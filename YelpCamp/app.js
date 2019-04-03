var express          = require("express");              // Importing Express from the installed npm folder
var app              = express();                       // Storing the express functions on the variable "app"
var bodyParser       = require("body-parser");          // Importing Body-Parser from the installed npm folder
var mongoose         = require("mongoose");             // Importing Mongoose from the installed npm folder
var passport         = require("passport");             // Importing Passport from the installed npm folder
var LocalStrategy    = require("passport-local");       // Importing Passport Local Strategy from the installed npm folder
var methodOverride   = require("method-override");      // Importing Method Override from the downloaded npm folder
var Campground       = require('./models/campground');  // Importing the Campground model from the campground.js file
var Comment          = require("./models/comment");     // Importing the Comment model from the comment.js file
var User             = require("./models/user");        // Importing the User model from the user.js file in the models' folder
var seedDB           = require("./seeds");              // Importing seeds' function from the seeds.js file
var commentRoutes    = require("./routes/comments");    // Importing the comment routes from the comments.js file
var campgroundRoutes = require("./routes/campgrounds"); // Importing the campground routes from the campgrounds.js file
var indexRoutes      = require("./routes/index");       // Importing the index routes from the index.js file
var flash            = require("connect-flash");        // Importing Connect-Flash from the installed npm folder

mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true}); // Creating a yelp_camp Database in MongoDB and connecting Mongoose to it
app.use(bodyParser.urlencoded({extended: true}));                           // Telling Express to use Body-Parser
app.set("view engine", "ejs");                                              // Setting the route files to be of ejs format
app.use(express.static(__dirname + "/public"));                             // "__dirname" represents the current directory path that the serve is on
app.use(methodOverride("_method"));                                         // Telling Express to use method override and "_method" is the convention
app.use(flash());                                                           // Telling Express to use connect-flash
// seedDB();                                                                // Everytime we start the server it will run the seedDB function

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Thanos is a farmer!",
    resave: false,
    saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// We are passing in a middleware function which will
// be used in all the routes, we are passing in the
// req.user which carries the username and the ID 
// of the current logged in user, that we want to
// display on all of our pages

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next(); // We have to have the next function here, so that the server moves 
            // to the next middleware code instead of stopping after displaying
            // the username and the ID
});

// Telling our app to use the three route files
// that we required

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes); // It takes all the campground routes from the campgrounds.js page and adds "/campgrounds" before them
app.use("/campgrounds/:id/comments", commentRoutes);

// The Root route will have our Landing Page
app.get("/", function(req, res){
    res.render("landing");
});





// The server is listenning to the request made by the system
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has Started!");
});