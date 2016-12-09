# Todo App

**Introduction**

* Todo App is a JavaScript To Do List Application.
* It has the following features;
	* Log in and sign up via email and password
	* Allows users sign up and login
	* Allows users create lists
	* Allows users add lists to cards and move cards between lists.
	*Allows user add a name, description, due date and several todo items to a card
	* Allows users mark todo items as done.
	* Allows users undo done tasks

click [here](https://bc-19-todo-app.herokuapp.com/) to access the app on Heroku.

**Dependencies**

**Back End Dependencies**

* This app's functionality depends on multiple JavaScript packages including:
    * [Express.Js](https://expressjs.com/): This farmework handles routing on <the></the> backend. https://github.com/expressjs/express/
    * [nodemon](nodemon.io): Nodemon helps monitor for changes in your source and automatically restarts your server.https://github.com/remy/nodemon/

**Front End Dependencies**

* [Bootstrap](http://getbootstrap.com/): Bootstrap makes styling responsive web pages faster and easier. 
    GITHUB: https://github.com/twbs/bootstrap
* [AngularJs](https://angularjs.org/): AngularJS is a JavaScript MVC Framework that integrates two-way data binding, web services, and build web components. 
    GITHUB: https://github.com/angular/angular.js 
* [JQuery](https://jquery.com/):JQuery is a very helpful JavaScript framework. It has features that out with HTML document manipulation, event handling, animation, and a host of other things. 
    GITHUB:https://github.com/jquery/jquery 
* Angular-sweetalert: A beautiful replacement for JavaScript's "Alert". 
    GITHUB: https://github.com/oitozero/ngSweetAlert
* Angular-drag-and-drop-lists: Angular library that helps build lists with drag and drop capabilities. 
    GITHUB: https://github.com/marceljuenemann/angular-drag-and-drop-lists
* Angular Fire: Angular library to make dealing with firebase easy
    GITHUB: https://github.com/firebase/angularfire


**Installation and setup**

* Navigate to directory of choice on terminal.
* Clone this repository on that directory
	* Using SSH;
        >git clone git@github.com:Del-sama/todo->application.git

	* Using HTTP;
        >https://github.com/Del-sama/todo-application.git

* Navigate  to the repo's folder on your computer
> cd todo-application/
* Install the app's backend dependencies. 
* Create a firebase database and add the config.
* Install the app's Backend dependencies using bower.
	 >npm install

* Install the app's Frontend dependencies using bower.
	 >./node_modules/bower/bin/bower install
* In order to use bower, you need to install it through npm. You also need to have node and git installed on your system.

* Run the app

    >npm start

`nodemon` monitors all changes made to your host and restarts your server.



