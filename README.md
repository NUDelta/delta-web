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

3. `meteor run --settings settings.json`.
4. Run `./copy.sh` from the root directory. This must be done each time any of the files in the `delta/` directory are changed.
5. Update the `app` attribute in the `core/mup.json` file to the pwd of DeltaWeb on your machine.

## Deploy Information

1. Login and add your SSH key to our [DigitalOcean account](https://cloud.digitalocean.com/settings/security). If you haven't generated an SSH key before, see [this](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2).
2. Ask someone with root access (as of now, Kevin or Haoqi) to add you to the authorized SSH users. (Note to us: paste person's public ssh to a new line in `~/.ssh/authorized_keys`).
3. `ssh root@dtr.northwestern.edu`

You probably won't need to do this too often, but you won't be able to deploy without your SSH key added.

**Deploying:** You can make all of your changes and deploy to the server from your local setup.

1. Make sure you don't track further changes to the mup.json (will screw others up). Use `git update-index --assume-unchanged mup.json`
2. Update the `app` property in `mup.json` to point to your current local working DTR directory.
3. `mupx deploy` to deploy!

TODO: We need to test if emails are working properly.
