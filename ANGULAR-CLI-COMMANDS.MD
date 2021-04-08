
# Angular CLI Commands:

### install angula cli
	$npm install -g @angular/cli@latest
	$ng --version

### Creating new App

$ ng new my-first-app
	initially strict:NOT
	routing Not
 
	$ cd my-first-app/

### to start server
	$ ng serve

### to use bootstrap CSS framework, before installing quit running server. below command will install bootstarp locally in this project, not globally.

	$ npm install --save bootstrap@3

### edit angular.json => project => build => options =>
	"styles": [
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
		"src/styles.css"
	]

path of bootstrap file:  	bootstrap/dist/css/bootstrap.min.css
 
### to install http
	
	$ npm install @angular/http@latest

### above command will download and store in node_modules folder
 
 	$ npm fund
 
### Run below command to update npm:
 	$ npm install -g npm
 

 
 
 
=================================================================

# Angular Specific Components:
 
### it will generate component having name "servers", run this command from CLI
 $ ng generate component servers
 
### shortcut of above command is
 $ng g c servers

### to prevent specs file
$ ng g component recipes --skipTests=true

### create component nested in to file
$  ng g component recipes/recipe-list --skipTests=true
 
=================================================================
#  After cloning the project just follow the instructions.

### Run below command to install angular dependency or "node_modules"

$ cd 'your project name...'

### And then install the packages and dependencies.
npm install

### and then you can run the project by running this code.
ng serve
 
 
=================================================================

 
 
 
 
 
 
 
 
 
 
 
 
 
