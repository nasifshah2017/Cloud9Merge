var mongoose = require("mongoose");

// POST - title, content 

var postSchema = new mongoose.Schema({
    title: String,
    content: String
}); 

// Its just like a return value for a file, so just like
// a return value in a function, nothing is returned unless
// we explicilty tell JavaScript what we want to return from 
// a function, same thing with the file, if we just include 
// the file, but we don't export anything out of it, we 
// actually be including nothing, we will just be requiring 
// an empty file, what we need to do is, export something,
// and what we want to export is the model. So, we are first 
// declaring the Schema and then we are compiling it into a 
// model, and thats what we are sending out. 

module.exports = mongoose.model("Post", postSchema);