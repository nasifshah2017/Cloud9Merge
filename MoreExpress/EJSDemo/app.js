var express = require("express"); //Importing the express package from the node modules folder
var app = express(); //Storing the express functions on the "app" variable

app.use(express.static("public")); //Telling Express to run the files from the "public" directory
app.set("view engine", "ejs"); //Telling Express that all our files in the routes are going to be of "ejs" format

//The Root route  
app.get("/", function(req, res){
    res.render("home"); 
    //res.render looks for a page, in the views folder, 
    //with the name passed in it as an argument.
    //The render method lives in the response object.
    //"ejs" is a filetype and it stands for embedded JavaScript
    //The Root route will send the user to the home page
    //which was coded in home.ejs file, but to make the
    //server find the file in the views folder we first 
    //need to install ejs on the console by running "npm install ejs --save"
});

//A route sending a GET request with a variable that will be put by the user
app.get("/fallinlovewith/:thing", function(req, res){
    //Whatever the user put after "/fallinlovewith" as "thing"
    //will be stored as "thing" variable
    var thing = req.params.thing;
    //Letting the server know that "thingVar" will represent "thing"
    //in the love.ejs file
    res.render("love", {thingVar: thing}); 
});

//ejs stands for Embedded JavaScript, it lets us embed
//JavaScript code, variables, if statements, loops,
//inside HTML

//In our ejs file, whatever we put inside these two 
//"<%= %>" parentheses we are telling ejs to treat 
//it as JavaScript instead of HTML.

//Actually there are two different types of tags
//in ejs "<%= %>" and "<% %>".
//So on the first one we have an equal sign
//and on the next one we do not have an
//equal sign.

//We use the first one, which is with the equal
//sign (<%= %>), to evaluate or display something
//on our HTML file, but if something falls in the
//JavaScript logic like an "if" statement or a 
//"while" loop that we do not want to display
//on our page to the user, then we write it inside
// the one with no equal sign (<% %>).

//So, again the equal sign will take the retun value 
//and stick it in the HTML and the no equal sign will
//just run the code

//EJS = HTML + JavaScript

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
        ];
        
        res.render("posts", {posts: posts});
});

//Server is listenning to the requests made by the system
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server is now running!!!");
});