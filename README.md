# Delta Lab Website
This repository holds all the code for the Northwestern Delta Lab's website: [http://delta.northwestern.edu/](http://delta.northwestern.edu/). 
## Setup Information
1. Make sure you have [MeteorJS](https://www.meteor.com/install), [Python 3.x](https://www.python.org/downloads/) (we use 3.8.5) and [Pipenv](https://pipenv-fork.readthedocs.io/en/latest/#install-pipenv-today) installed.
2. Clone the repo to your local machine.
3. Create a `settings.json` that looks like this:
    ```
    {
      "private": {
        "MAIL_URL": "MAIL URL HERE"
      },
      "public": {
    
      }
    }
    ```
   Emails are sent using [SendGrid](https://sendgrid.com/). Ask Kapil for the details for the SMTP server used. 
4. Ask Kapil for the `dev/credential.json` file that will let you run `dev/paper.py` to fetch the latest papers.
5. Run `pipenv install` to get the necessary packages to run `dev/paper.py`

## Development

### Updating Papers
1. Navigate to the `Delta Peoples, Projects, and Publications` Google Spreadsheet in the Delta Lab folder. From the menu bar, click `Website URL Generator -> Generate Paper URLs`.
2. In the cloned repo, run `pipenv shell` to start a virtual environment with the needed packages to download papers. 
3. Navigate to `dev` and run `python paper.py` to pull papers and generate `client/templates/paper.html`.

### Making Changes to Web Code
1. Run `meteor` from the root of the repo. Direct your browser to `localhost:3000`.
2. Make changes as needed. Meteor will automatically restart the server and update the client as changes are made.

## Deployment
### Getting Deploy Access
1. Login and add your SSH key to our [DigitalOcean account](https://cloud.digitalocean.com/settings/security). If you haven't generated an SSH key before, see [this](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2).
2. Ask someone with root access (currently Haoqi and Kapil) to add you to the authorized SSH users. Send them your public key by running the following: `cat ~/.ssh/id_rsa.pub > YOURNAME.txt`. Add the key to Digital Ocean with: `cat YOURNAME.txt | ssh root@delta.northwestern.edu "cat >> ~/.ssh/authorized_keys"`.
3. Verify this works by running `ssh root@delta.northwestern.edu` in terminal, and see if you can access the server. 

### Deploying
We use [Meteor Up](http://meteor-up.com/) to build and deploy the Delta Website.
1. Run `paper.py` from `dev/` to get the latest papers.
2. Install [Meteor Up](http://meteor-up.com/getting-started.html) globally.
3. Navigate to `.deploy` using `cd .deploy`.
4. Copy the settings file created above for deployment and add it to the `.deploy` directory with the name, `settings.json`.
5. Run `mup deploy` to deploy.
