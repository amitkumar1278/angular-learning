
# NodeJS installation

To ensure Anular cli works properly, make sure that you have the LTS version of NodeJS installed, NOT the latest version (from https://nodejs.org/en/). 
### to install:
$ sudo apt install nodejs npm

### to uninstall:
$ sudo apt-get remove nodejs.

### Completely uninstall NodeJs and re-install the latest version of NodeJs
$sudo apt-get purge --auto-remove nodejs 


### NVM		https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu-and-update-npm-to-the-latest-version/
If you try installing the latest version of node using the apt-package manager, you'll end up wit little old version. This is because when new versions of a software are released, it can take months for the Ubuntu team to test and release in the official Ubuntu store. 

To get the latest versions, we can use either nodesource or nvm (node version manager). I like nvm because it allows me use different node versions for different projects. Using NVM:

#### Install NVM
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
$ nvm --version

### Restart your terminal for your changes to take effect.

### Install NodeJS, to install Nodejs version 14.16, Simply run 
$ nvm install 14.16.0 .

### You can use a similar command to install any version of node you want, for example:
$ nvm install 12.18.1.

### This command automatically installs nodejs as well as the latest npm version which is at  v6.14.5.
$ npm --version

### If you ever need to switch node versions, you can simply run nvm use <version-number> , for example: 
$ nvm use v12.18.1.

### To list the different node versions you have installed with nvm, run 
$ nvm ls.

 
 
