var express = require("express");                               // Importing express package from the downloaded npm folder
var app = express();                                            // Storing the Express package in the app variable
var mongoose = require("mongoose");                             // Importing the mongoose package from the downloaded npm folder
var passport = require("passport");                             // Importing the passport package from the downloaded npm folder
var bodyParser = require ("body-parser");                       // Importing the body-parser package from the downloaded npm folder
var LocalStrategy = require("passport-local");                  // Importing the passport-local package from the downloaded npm folder
var passportLocalMongoose = require("passport-local-mongoose"); // Importing the passport-local-mongoose package from the downloaded npm folder
var User = require("./models/user");                            // Importing the User model from the models' folder

mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });      // Connecting Mongoose to the MongoDB database

app.set('view engine', 'ejs');                              // Setting all the files to be used to be of ejs format
app.use(bodyParser.urlencoded({extended: true}));           // Telling Express to use Body Parser

// The Passport.js relies on express-session that is why it 
// it needs to be required and used by Express before using
// the Passport application

app.use(require("express-session")({                        // Short-cut method of requiring and telling Express to use express-session package
    secret: "Thanos will wipe out half of the Universe",    // We have to pass in three different parameters in order for it to work
    resave: false,                                          // The first one is secret, 
    saveUninitialized: false                                // The "secret" will be used basically to encode and decode the sessions
                                                            // The phrase passed in "secret" will be used to encode or decode the information 
                                                            // in the session
}));

app.use(passport.initialize());                             // Telling Express to use passport
app.use(passport.session());                                // Telling Express to use passport with session

passport.use(new LocalStrategy(User.authenticate()));       // Telling Passport to use the "passport-local" package using the User.authenticate method that is coming from passportLocalMongoose in the user.js file
passport.serializeUser(User.serializeUser());               // Serialize function is responsible for reading the session, takes data from the session
passport.deserializeUser(User.deserializeUser());           // takes data from the session and encodes it and then Deserialize function takes that 
                                                            // encoded data and decodes it after the user logs in, and when the user logs out, the 
                                                            // Serialize functions encodes back the data and put it in Session

//============
// The Routes
//============

app.get("/", function(req, res){                            // The Root Route
    res.render("home");                                     // Sends to the home page
});

app.get("/secret", isLoggedIn, function(req, res){          // The Secret Route
    res.render("secret");                                   // Sends to the secret page
});

// Whenever a request comes in to get the secret page, Express 
// will run the isLoggedin() function to check if the user is
// logged in or not, if he/she is logged in then Express will
// provide the secret page and if he/she is not logged in then
// Express will redirect him/her to the login page.

// Authentication Routes

app.get("/register", function(req, res){                    // To display the user sign up form
    res.render("register");                                 //Sending user to the user sign up form 
});

app.post("/register", function(req, res){                   // To handle user sign up
   req.body.username                                        // Importing from the sign up form
   req.body.password                                        // Importing from the sign up form
   User.register(new User({username: req.body.username}), req.body.password, function(err, user){
       if(err){
           console.log(err);                                // If there's an error
           return res.render("register");                   // then the user get sent back to the sign up page               
       }
       passport.authenticate("local")(req, res, function(){ // else the passport.authenticate logs in the user
        res.redirect("/secret");                            // using the "local" strategy and decoding the information
       });                                                  // using the serialize and deserialize functions
       
   });
// We make a new User object that is not saved to the database yet,
// Its new user and we only pass in the username imported from the 
// sign up form, and the reson we do that is because we don't save 
// the password to the database, its not a good idea, so we pass
// the password as a second parameter, to User.register, and 
// User.register will take this new User that has a username and then
// it will hash that password, which means it turns it into a huge string
// of numbers and letters and it stores that in the database.
// So, we pass in the username that we want to create and then we pass the 
// password seperately, and then if everything goes well, it will it will 
// return a new user that has everything inside of it, it has the username
// and it has the hashed password as well.
});

// LOGIN ROUTES

app.get("/login", function(req, res){                       // render login form
    res.render("login");                                    // Directing to the login form
});

// Login logic
app.post("/login", passport.authenticate("local", {         
    successRedirect: "/secret",                                 
    failureRedirect: "/login"
}), function(req, res){
    
});

// We have already seen passport.authenticate but we haven't seen it used like this 
// inside app.post(), where it's not in the callback itself.
// So, this is what is known as a Middleware.
// The idea of Middleware is that it is some code that runs before our final route callback
// here. 
// When our app gets a post request on "/login", it is going to run "successRedirect" and the 
// "failureRedirect" code immediately, and we can have multiple middlewares stacked up so we 
// can have another middleware that will run after we authenticate and another middleware after
// that, and the idea is that they sit between the beginning of your route and then at the end 
// of the route which is our handler at the very end. Hence, the name "Middleware". 
// The whole point of this is that it actually tries to log you in, it checks, it authenticates
// your credentials. So, its going to take your password and the username that are in the request,
// inside req.body. We don't have to explicitly provide that, passport automatically takes the 
// username and the password from the form or from the request body and it is basically going to 
// compare the password, that the user typed into the input, and compare it to the crazy hash version
// in the database, and then we provide an object with two parameters, successRedirect and falureRedirect.
// So, if it works we are going to redirect to "/secret" and if it doesn't work we will redirect to "/login"

// LOG OUT ROUTE

app.get("/logout", function(req, res){
    req.logout();                       // Passport is logging out the user, its removing all the user data from the system
    res.redirect("/");                  // The user getting directed to the home page after getting logged out
});

// The isLoggedIn function checks if the user is logged in or not,
// If the user is logged in then it renders the secret page for them
// and if the user is not logged in then it redirects the user to the 
// login page. The function is a middleware.

function isLoggedIn(req, res, next){ // req is the request object, res is the response object and next is the next thing that needs to be called 
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

// Connecting with the server

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...");
});