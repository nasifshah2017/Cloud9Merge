var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: { // Storing the user's id to track the username 
              // and priniting the username on their comment 
              // they don't have to type it themselves
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

//Exporting the comment model and the comment schema

module.exports = mongoose.model("Comment", commentSchema); 

