import Container from "../components/shared/Container";
import Header from "../components/shared/Header";
import { Publication, fetchPublications } from "../lib/publications";

interface PublicationProps {
  publications: Publication[];
  publicationYears: number[];
}

export default function Publications({
  publications,
  publicationYears,
}: PublicationProps): JSX.Element {
  return (
    <div>
      <Header />

      <Container className="mt-8">
        <div className="max-w-4xl mx-auto">
          {publicationYears.map((pubYear) => (
            <div key={`year-${pubYear}`} className="mb-4">
              <h2 className="text-2xl border-b border-black font-normal mb-4">
                {pubYear}
              </h2>
              {publications
                .filter(({ year }) => year == pubYear)
                .map((publication) => (
                  <div key={publication.id} className="mb-4">
                    <h4 className="text-lg">{publication.title}</h4>
                    <p className="prose max-w-none">{publication.authors}</p>
                    <p className="prose max-w-none">
                      <span className="italic">
                        {publication.conference} {publication.year}
                      </span>
                      {publication.award !== "" && (
                        <span className="text-dark-orange font-semibold">
                          {" "}
                          {publication.award}
                        </span>
                      )}
                      {publication.link !== "" && (
                        <span>
                          {" "}
                          <a
                            href={publication.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            link
                          </a>
                        </span>
                      )}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const publications: Publication[] = await fetchPublications();
  const publicationYears = [
    ...new Set(publications.map(({ year }) => year)),
  ].sort((a: number, b: number) => {
    return b - a;
  });

  return {
    props: {
      publications,
      publicationYears,
    },
  };
}
