![Kodflix](./kodflix.png?raw=true "Title")

# Kodflix - Kodiri's sample app :)

## Prerequirements
1. [Create a GitHub account](https://github.com)
2. [Install git](https://git-scm.com/downloads)
3. [Install node](https://nodejs.org/en/download/)
4. [Install Visual Studio](https://code.visualstudio.com/download)

## Setup

### Install app locally
Open a Terminal:
* on Mac, use the built in `Terminal` app
* on Windows, you can use either `PowerShell` (Windows 10+) or `GitBash` (any version)

Run the following commands, one after the other:
```
npm install -g create-react-app
create-react-app kodflix
cd kodflix
npm start
```
[Bonus reading: About the "React app"](https://github.com/facebook/create-react-app)

### [Create a GitHub repo](https://github.com/new)

### Grant your laptop access to your GitHub repo
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Then press `Enter` on every question you get asked

3. Copy your just-created public key, located, on Windows, at `C:\users\<your_user>\.ssh\id_rsa.pub`
4. Paste the key into your GitHub account: `Profile -> Settings -> SSH and GPG keys -> New SSH key`

### Open kodflix with Visual Studio

`File -> Add Folder to Workspace`

### Make kodflix git-aware locally
From now on, we can type any command from the integrated terminal (`View -> Integrated Terminal`)
```
git init
git remote add origin git@github.com:your_gitHub_user/kodflix.git
git add .
```
### Upload app to GitHub
Recurrent actions (every time we want to upload changes to our GitHub)

![Kodflix](./commit-push.png?raw=true "commit-push")
1. Open the source control panel (3rd icon on the left menu)
2. Set a message describing your changes
3. **"Commit"** the changes (`... -> Commit All`)
4. **"Push"** the changes, to get them saved on Github (`... -> Push`)

NOTE: If the push command gets rejected, try using the command line to ensuring authentication is granted:
```
git push -u origin master
```
This would be necessary just once, though
