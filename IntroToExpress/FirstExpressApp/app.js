var express = require("express"); //Importing the Express packages from the node modules folder
var app = express(); //Storing the packages on the app variable

// "/" => "Hi there!"
app.get("/", function(req, res){ //When a GET request is made to slash (or root), then we want the callback function to run
//And the call back function takes two different arguments req and res, which stands for request and response
//req and res are objects, in this function req contains all the information on the request that was made, that triggered this route
//and res contains all the information on what we are going to respond with

res.send("Hi there!"); //This is just a way of resonding with some texts

//Now if we go to the root page of our app, once we serve it, once it is started
//then we expect to get this text, printed out on our browser.
    
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

// "/dog" => "MEOW"
app.get("/dog", function(req, res){
    console.log("SOMEONE MADE A REQUEST ON /DOG");
    res.send("MEOW!");
});

//Anything we put after colon(:) is declared
//as a route variable, where the user can put 
//whatever they want after "/r/" and the server
//will take them to a page that displays the
//message "WELCOME TO A SUBREDDIT!"

//So whatever the user puts on the variable subredditName
//is stored on the "subreddit" variable and displayed 
//on the message in between "WELCOME TO THE" and
//"SUBREDDIT" in upper-case

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName; 
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

//So, on the route we defined below, the subredditName,
//the id and the title are the route variables those are
//put in by the user, and the "r" and "comments" is the contant
//that will stay as it is on the url when a search is made
//"req.params" is an object that carries the contents that
//the user has asked for on its request, so they are what the
//user put on the subredditName, id and the title

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

//This is the route that will run when our app gets any 
//any request other than the "root(/)", "bye" and "dog"
//which are defined in this file.
//Order of roue matters, which is why we cannot
//put this route above all the other routes that
//we defined. If we do then all the routes that is defined below 
//it will not run and the server will keep on displaying "You
// Are A Star" for all the routes those are even defined
// That is why the coder should make sure that they place
// this route below all the defined routes, so that the server
// tests all the defined routes before testing this route
// because once the server finds the route it is looking for,
// it leaves and never moves on the next route.

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!!");
});

//To make all the routes work, first we need to make the cloud 9 server listen
//to these routes, and it is done by the app.listen function which is given below,
//env stands for the environment variable and it connects with the port of cloud 9 
//and its IP address. We will be using it at the bottom of every single application
//that we make with Express. So, this tells express to listen on a particular port 
//that cloud 9 wants to and a particular IP that cloud nine expects it to as well
//We passed a call back function so that we can get a signal that the server has
//listened to our routes and we get that message on our console (terminal).

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});