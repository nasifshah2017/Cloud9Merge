var mongoose = require("mongoose");


// USER - email, name  

var userSchema = new mongoose.Schema({ // Defining the Schema
    email: String,      // object
    name: String,       // object 
    posts: [            // Array of Object IDs
        {
            type: mongoose.Schema.Types.ObjectId, //Syntax of writing Mongoose Object ID belonging to a post
            ref: "Post"
        }
    ] 
});

// This will send out the User model that when we require this file
// on reference.js or any other file, User model is the one thing 
// that we are exporting out to that file. 

module.exports = mongoose.model("User", userSchema);