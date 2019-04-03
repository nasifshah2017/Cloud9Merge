var express = require("express");
var router  = express.Router();
var passport= require("passport");  // Importing Passport from the installed npm folder
var User    = require("../models/user"); // Importing the User model from the user.js file in the models' folder


// The Root route will have our Landing Page
router.get("/", function(req, res){
    res.render("landing");
});

// AUTHENTICATION ROUTES

// Displaying the Registration form 
router.get("/register", function(req, res){
    res.render("register");
});

// Handle the sign up logic
router.post("/register", function(req, res){ // After signing up on the Registration Form this where the user is sent
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){ //Rather than storing the password it stores the crazy hash number
        if(err){
            // console.log(err);
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username)
           res.redirect("/campgrounds"); 
        });
        
    }); 
});

// Display the login form
router.get("/login", function(req, res){
    res.render("login");     // Sending the user to the login page
});                                                         // And flashing the error message if the user
                                                            // does access stuffs by not being logged in
// Handling the login logic
// app.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local",       // Passing in the passport package function to verify the user    
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
        
    }), function(req, res){
    res.send("LOGIN LOGIC HAPPENS HERE!");
}); 

// Log out route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
});

// The isLoggedIn function checks if the user is logged in or not,
// If the user is logged in then it allows the user to access the site
// and if the user is not logged in then it redirects the user to the 
// login page. The function is a middleware.


module.exports = router;