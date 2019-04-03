var Campground = require("../models/campground");
var Comment = require("../models/comment");
// All the Middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
               if(err){
                   req.flash("error", "Campground not found");
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
                       req.flash("error", "You don't have permission to do that!");
                       res.redirect("back");
                   }
                   
               }
            });
        } else {
            req.flash("error", "You need to be logged in to do that");
            res.redirect("back"); // Will take the user back to the previous
        }                         // page they were on     
}

    


middlewareObj.checkCommentOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment){
               if(err){
                   res.redirect("back");
               } else {
                   //  If the user is logged in then does the he/she owns the comment
                   console.log(foundComment.author.id);  // Mongoose Object
                   console.log(req.user._id);               // String
                   // Mongoose method of checking if the author's ID on the particular
                   // found campground is equal to the currently logged in user's ID
                   if(foundComment.author.id.equals(req.user._id)) { 
                       next();
                       //res.render("campgrounds/edit", {campground: foundComment});
                   } else {
                       req.flash("error", "You need to be logged in to do that");
                       res.redirect("back");
                   }
                   
               }
            });
        } else {
            req.flash("error", "You don't have permission to do that");
            res.redirect("back"); // Will take the user back to the previous
        }                         // page they were on     
}

// Middleware
    
middlewareObj.isLoggedIn = function (req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");  // Flashing the message to the user
    res.redirect("/login");                     // before redirecting the "/login"
}




module.exports = middlewareObj