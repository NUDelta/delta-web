import gspread
from oauth2client.service_account import ServiceAccountCredentials
from bs4 import BeautifulSoup as bs
from operator import itemgetter

def pull_from_google():
    """
    Pulls raw paper data from Google Sheets

    Args:
        None

    Outputs:
        (list of strings): header row from sheet
        (list of lists): individual rows containing paper data
    """
    # setup connection
    scope = ['https://spreadsheets.google.com/feeds']
    credentials = ServiceAccountCredentials.from_json_keyfile_name('credential.json', scope)
    gc = gspread.authorize(credentials)

    # pull papers from Delta Lab paper spreadsheet
    website_info_spreadsheet = gc.open_by_url('https://docs.google.com/spreadsheets' +
                                              '/d/1Z5Qf5s4FMflwfsxnjL3mSeYlWVu4dHgJ3ZYGsDA9cc4/edit#gid=1')

    # select relevant worksheet
    paper_worksheet = website_info_spreadsheet.worksheet("Delta Papers")
    paper_worksheet_vals = paper_worksheet.get_all_values()

    # split into header and paper data
    header = paper_worksheet_vals[0]
    papers = paper_worksheet_vals[1:]

    return header, papers


def normalize_header(header):
    """
    Normalize header values to be camelCase without numbers, punctuations, or symbols.

    Args:
        header (list of strings): header row of spreadsheet

    Outputs:
        (list of strings): header with normalized strings
    """
    return [normalize_string(column) for column in header]


def normalize_string(input):
    """
    Normalize an input string such that the output is camelCase without numbers, punctuations, or symbols.
    Examples:
        "First Name" -> "firstName"
        "Market Cap (millions) -> "marketCapMillions
        "1 number at the beginning is ignored" -> "numberAtTheBeginningIsIgnored"

    Args:
        input (string): string to normalize

    Outputs:
        (string): normalized string
    """
    key = ''
    upper_case = False

    for letter in input:
        if letter == ' ' and len(key) > 0:
            upper_case = True
            continue

        if not letter.isalpha():
            continue

        if len(key) == 0 and letter.isdigit():
            continue  # first letter must be letter

        if upper_case:
            upper_case = False
            key += letter.upper()
        else:
            key += letter.lower()

    return key


def format_papers(header, papers):
    """
    Nicley formats raw paper data.

    Args:
        header (list of strings): header row of spreadsheet
        papers (list of lists): individual rows containing paper data

    Outputs:
        (list of dicts): list of dictionary objects
    """
    # normalize header and get indicies for needed columns
    normalized_header = normalize_header(header)

    indicies = {
        'putit': normalized_header.index('putItUpOnTheDeltaSite'),
        'authors': normalized_header.index('authors'),
        'titles': normalized_header.index('title'),
        'conferences': normalized_header.index('conferencejournalworkshopVenueNameAbbreviated'),
        'years': normalized_header.index('year'),
        'pdfs': normalized_header.index('websiteLink'),
        'award': normalized_header.index('award')
    }

    # format output
    output = papers
    for i in range(len(papers)):
        output[i] = {
            'putit': output[i][indicies['putit']],
            'author': output[i][indicies['authors']].replace('\n', '').replace('\r', ''),
            'title': output[i][indicies['titles']].replace('\n', '').replace('\r', ''),
            'conference': output[i][indicies['conferences']].replace('\n', '').replace('\r', ''),
            'year': output[i][indicies['years']],
            'pdf': output[i][indicies['pdfs']].replace('\n', '').replace('\r', ''),
            'award': output[i][indicies['award']]
        }

    # sort output by year and conference
    output.sort(key=itemgetter('year', 'conference'), reverse=True)

    return output


def create_html(papers, file_name):
    """
    Creates properly formatted HTML for display on Delta Web from papers, and saves

    Args:
        papers (list of dicts): papers to convert to html
        file_name (string): file to save HTML to

    Output:
        (string): HTML string
    """
    # add template string to front
    output_string = "<template name=\"papers\">\n" + \
                    "<div class=\"container\" id=\"paper\">\n" + \
                    "<div class=\"row\">\n" + \
                    "<div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n"

    # build string with papers
    current_year = papers[0]['year']
    output_string += "<h3>" + current_year + "</h3>\n"

    for paper in papers:
        if paper['putit'].strip() != "Wait -- don't put it up yet":
            pdf = paper['pdf'].strip()
            title = paper['title'].strip()
            conference = paper['conference'].strip()
            authors = paper['author'].strip()
            award = paper['award'].strip()
            year = paper['year']

            # add year and line break
            if(year != current_year):
                current_year = year
                output_string += "<h3>" + current_year + "</h3>\n"

            # add link to paper and conference
            # if no link, only show title
            if pdf == '':
                output_string += "<span>" + title + "</span>"
            else:
                output_string += "<a href=\'" + pdf + "'>" + title + "</a>"

            # add conference and year
            # ignore year if forthcoming
            if year.lower() == 'forthcoming':
                output_string += "<span style='margin-left:10px;font-size: 12px;'>" + conference + "</span>\n"
            else:
                output_string += "<span style='margin-left:10px;font-size: 12px;'>" + \
                                 conference + ' ' + year + "</span>\n"

            # add award, if applicable
            if paper['award'] != "":
                output_string += "<span style='background-color:#edb055; color:#FFFFFF;padding-left: 0.5em;" + \
                                 "padding-right: 0.5em;font-weight:bold'>" + award + "</span>\n"

            # add authors
            output_string += "<p class='paper-author'>" + authors + "</p>\n"

    # add template string to end
    output_string += "</div>" + \
                     "</div>" + \
                     "</div>" + \
                     "</template>"

    # format output_string as html
    soup = bs(output_string, features="html.parser")
    pretty_html = soup.prettify()

    # write output file
    f_out = open(file_name, 'w')
    f_out.write(pretty_html)
    f_out.close()

    return output_string


def main():
    header, papers = pull_from_google()
    formatted_papers = format_papers(header, papers)
    create_html(formatted_papers, '../client/templates/paper.html')


if __name__ == '__main__':
    main()
