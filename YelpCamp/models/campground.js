var mongoose = require("mongoose");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [ // Associating comment with campground by making a comments' array containg comments' IDs
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

// Compiling the Schema into a model

module.exports = mongoose.model("Campground", campgroundSchema);

// When a campground is created we take a current user's ID
// and the current user's username and save them to the author
// to that campground. 
