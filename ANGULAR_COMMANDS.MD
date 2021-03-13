
NodeJS installation
=================================================================
To ensure Anular cli works properly, make sure that you have the LTS version of NodeJS installed, NOT the latest version (from https://nodejs.org/en/). to install:

$ sudo apt install nodejs npm

# to uninstall:

$ sudo apt-get remove nodejs.

# Completely uninstall NodeJs and re-install the latest version of NodeJs

$sudo apt-get purge --auto-remove nodejs 


# NVM		https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu-and-update-npm-to-the-latest-version/
If you try installing the latest version of node using the apt-package manager, you'll end up wit little old version. This is because when new versions of a software are released, it can take months for the Ubuntu team to test and release in the official Ubuntu store. 

To get the latest versions, we can use either nodesource or nvm (node version manager). I like nvm because it allows me use different node versions for different projects. Using NVM:
# Install NVM

$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
$ nvm --version

# Restart your terminal for your changes to take effect.

# Install NodeJS, to install Nodejs version 14.16, Simply run 

$ nvm install 14.16.0 .

# You can use a similar command to install any version of node you want, for example:

$ nvm install 12.18.1.

# This command automatically installs nodejs as well as the latest npm version which is at  v6.14.5.

$ npm --version

# If you ever need to switch node versions, you can simply run nvm use <version-number> , for example: 

$ nvm use v12.18.1.

# To list the different node versions you have installed with nvm, run 

$ nvm ls.

=================================================================
Angular CLI Commands:

# install angula cli
$npm install -g @angular/cli@latest
$ng --version

# Creating new App

$ ng new my-first-app
	initially strict:NOT
	routing Not
 
$ cd my-first-app/

# to start server
$ ng serve

# to use bootstrap CSS framework, before installing quit running server. below command will install bootstarp locally in this project, not globally.

$ npm install --save bootstrap@3
 
 # above command will download and store in node_modules folder
 
 $ npm fund
 
 # Run below command to update npm:
 $ npm install -g npm
 
 bootstrap/dist/css/bootstrap.min.css
 
 
 =================================================================
push Angular Application to github
Get started by creating a new file or uploading an existing file. GIT recommend every repository include a README, LICENSE, and .gitignore.

Step 1: Create a new Angular Project and switched to angular project directory using "cd my-project"
Step 2: Download and Install GIT
Step 3: if ".git" and ".gitignore"  files are not creRun "git init" command to generate
Step 4: Execute below git command to commit locally:
$ git status
$ git add
$ git commit -m "Initial commit"

# if branch is not there
$git branch -M master

Step 5: Login to Github and create a repository
Step 6: to commit your file to github run below commands:

$ git remote add origin https://github.com/amitkumar1278/{repository-name}.git
$ git remote add origin https://github.com/amitkumar1278/angular.git
$ git push -u origin master

refresh repository page on github to see committed files.
 

  =================================================================

 Angular Specific Components:
 
 # it will generate component having name "servers", run this command from CLI
 $ ng generate component servers
 
 # shortcut of above command is
 $ng g c servers
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
