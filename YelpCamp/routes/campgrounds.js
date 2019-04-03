var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware/index.js"); // Importing the Middleware functions from the index.js file inside the middleware folder


// ===================
// CAMPGROUNDS ROUTES
// ===================

// INDEX - show all campgrounds
router.get("/", function(req, res){
    console.log(req.user);                             // "req.user" carries the username and the ID of the logged in user
    // Get all Campgrounds from the Database
    Campground.find({}, function(err, allCampgrounds){ // We are passing in empty brackets as we want to get all the campgrounds 
                                                       // from the Database back, and store that collection of Campgrounds in the
                                                       // allCampgrounds variable
       if(err){
           console.log(err);
       } else {
           // Sending all the Campgrounds that came back to the index.ejs file
           res.render("campgrounds/index", {campgrounds: allCampgrounds});
           // First one is the name we want to give, 
           // Second one is the data we are passing in
       }
    });

});

// We use "/campgrounds" as our POST route which is same as our GET route
// We didn't make it "/addcampgrounds" or anything else because we are following
// a convention called "REST", to make our routes follow this convention
// the page that shows all of the Campgrounds, should have the URL
// "/campgrounds", when we have a page or route where we can create a new 
// camground, it should have the exact same URL of "/campground" 
// but it should be a "POST" request.

// Making the logic of creating a new Campground post by taking 
// data from the form

// CREATE - add new campground to the Database
router.post("/", middleware.isLoggedIn, function(req, res){    // middleware.isLoggedIn: Accesing the isLoggedIn function
    // Takes data from form and adds to the campgrounds' array // from the "middleware" file variable 
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username 
    }
    var newCampground = {name: name, price: price, image: image, description: description, author: author};
    // Create a new campground and save it to the Database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
    // Redirect back to campgrounds' page
            console.log(newlyCreated);
            res.redirect("/campgrounds"); // We have two "/campgrounds" but by default the server redirects to the app.get instead of app.post
        }
    });

});

// Following the REST convention, the the first one is "/campgrounds" as 
// a GET ROUTE which shows all the Campgrounds. The second "/campgrounds"  
// as a POST ROUTE takes the data from the form and adds it to the Campgrounds 
// array. "/campgrounds/new" shows the form, from where the POST Route takes
// its data

// Setting up the form for the user to enter
// new Campgrounds

// NEW - shows form to create new campgrounds
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows the details of one campground
router.get("/:id", function(req, res){
    // find the campground with provided ID
    // then we are populating the comments on that campground
    // and then with .exec we are executing all these to happen
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            //render the SHOW template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
            
        
    });
    
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
            });
        }); 
    //  If the user is logged in but does not own the campground then,
    //  redirect somewhere
    //  if the user is not logged in then,
    //  redirect somewhere
    


// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    // Find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    // Redirect somewhere(show page)
});

// DESTROY (DELETE) CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
//    res.send("YOU ARE TRYING TO DELETE SOMETHING!");
      Campground.findByIdAndRemove(req.params.id, function(err){
          if(err){
              res.redirect("/campgrounds");
          } else {
              res.redirect("/campgrounds"); // Redirecting to the show page
          }                                 // because the item has been deleted
      })                                    // there's no show page anymore
});



function checkCampgroundOwnership(req, res, next) {
    if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
               if(err){
                   res.redirect("back");
               } else {
                   //  If the user is logged in then does the he/she owns the campground
                   console.log(foundCampground.author.id);  // Mongoose Object
                   console.log(req.user._id);               // String
                   // Mongoose method of checking if the author's ID on the particular
                   // found campground is equal to the currently logged in user's ID
                   if(foundCampground.author.id.equals(req.user._id)) { 
                       next();
                       res.render("campgrounds/edit", {campground: foundCampground});
                   } else {
                       res.redirect("back");
                   }
                   
               }
            });
        } else {
            res.redirect("back"); // Will take the user back to the previous
        }                         // page they were on     
}

module.exports = router;