var express = require("express");
var app = express();
var bodyParser = require("body-parser"); //Importing the body-parser package from the node modules folder

//Now we have to tell express to use body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"]; //An array of friends' name

// The Root route
app.get("/", function(req, res){
    res.render("home");
});

// The Post route, to add new friends through a form
app.post("/addfriend", function(req, res){
    var newFriend= req.body.newfriend; //Extracting the data put in by the user and storing it in "newFriend"
    friends.push(newFriend); //The we are adding it in friends' array
   res.redirect("/friends"); //Then we are sending the user back to the friends' list page
});

//The friends' route
app.get("/friends", function(req, res){
    res.render("friends", {friends: friends}); //Passing the friends' array to the friends' template, 2nd object contains the array
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server is now running !!!");
})