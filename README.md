# Delta Lab Website

## Setup Information

1. Clone this repo, making sure you have the `WebCore` submodule cloned. Run:

    ```
    git clone --recursive https://github.com/NUDelta/DeltaWeb.git
    ```
    If you already cloned and just ran `git clone` regularly on this repo, you will have to additionally run

    ```
    git submodule update --init --recursive
    ```

2. Create a `core/settings.json` that looks like this:

    ```
    {
        "gmailKey": "NUDELTA GMAIL PASSWORD HERE"
    }
    ```

3. Ask Yongsung or Kapil for the `dev/credential.json` file that will let you run `dev/paper.py` to fetch the latest papers.

4. Run `pip install -r requirements.txt` to get the necessary packages to run `dev/paper.py`.

## Development

### Updating Papers
1. Navigate to the `Delta Peoples, Projects, and Publications` Google Spreadsheet in the Delta Lab folder. From the menu bar, click `Website URL Generator -> Generate Paper URLs`.

2. From the cloned repo, navigate to `dev` and run `python paper.py` to pull papers and generate `delta/paper.html`.

3. Run `./copy.sh` from the root directory.

4. Navigate to `core/` and run `meteor`.

5. Edit the Delta Lab website-specific files in `delta/` and run `./copy.sh` whenever you wish to see the changes. **Note**: this will take a bit longer than Meteor normally does to update the client since Meteor must rebuild the application each time `./copy.sh` is run.

6. If you want to make changes to the WebCore specifically, see [here](https://stackoverflow.com/questions/5542910/how-do-i-commit-changes-in-a-git-submodule) on how to update submodule changes.

## Deployment

### Getting Deploy Access
1. Login and add your SSH key to our [DigitalOcean account](https://cloud.digitalocean.com/settings/security). If you haven't generated an SSH key before, see [this](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2).

2. Ask someone with root access (currently Haoqi, Yongsung, Josh Shi, or Kapil) to add you to the authorized SSH users. Send them your public key by running the following: `cat ~/.ssh/id_rsa.pub > YOURNAME.txt`. Add the key to Digital Ocean with: `cat YOURNAME.txt | ssh root@delta.northwestern.edu "cat >> ~/.ssh/authorized_keys"`.

3. Verify this works by running  `ssh root@delta.northwestern.edu` and seeing if you can access the terminal.

### Deploy
1. Run `paper.py` from `dev/` to get the latest papers and then `./copy.sh` from the root directory to copy everything over to `core/`.

2. Make sure you don't track further changes to the mup.json (will screw others up). Use `git update-index --assume-unchanged mup.json`

3. Update the `app` property in `mup.json` to point to your current local working `core/` directory.

4. Run `mupx deploy` to deploy. If you have issues, try using [nvm](https://github.com/creationix/nvm) to change your node version to `4.4.5` and run again.
