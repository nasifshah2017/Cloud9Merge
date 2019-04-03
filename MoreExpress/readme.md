# Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
* Explain what EJS is and wht we use it
* Pass variables to EJS templates

# EJS Control Flow

* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file

# Styles And Partials

* Show how to properly include public assets
* Properly configure our app to use EJS
* Use partials to dry up our code!
*
* When we create a web app and we use Express to start
* a web server it doesn't automatically serve every single file
* that it sees it doesn't know that we want to do that.
* And the default is to not serve anything at all, aside
* from the views' directory.
* 
* So, if we want anything else we need to tell Express
* explicitly that, hey! I need you to serve my public
* directory or whatever other directories we have.
* 
* And luckily Express provides us an easy way to that.
* Inside our app.js, at the top we need to add 
* app.use(express.static("public")), public is the 
* name of our directory. And this will tell Express
* to serve the contents of the public directory. 
* 
* Partials carry the boiler plate of an ejs file
* The header.ejs contains the upper part of the boiler plate.
* The footer.ejs contains the lower part of the boiler plate.
* Then we include these two files in all our ejs files.
* We do that by writing include header.ejs and include
* footer.ejs
* 
*
*
*

# Post Requests !!!

* Write post routes and test them with postman
* Use a form to send a post request
* Use body parser to get form data
* 
* req.body is an object that contains the data sent through the form 
* in the POST route
* To make this work first we need to install body-parser on our console
* by running the command "npm install body-parser --save".
* We need to extract the data put in by the user and turn it
* into a JavaScript object, that's why we use body-parser by 
* downloading it from Node Package Manager (NPM).
* Pretty much anytime we have a form that an user enters
* data into that we want to extract the data from on the 
* server side (backend), we need to use body-parser.
* 
* https://www.npmjs.com/package/body-parser


