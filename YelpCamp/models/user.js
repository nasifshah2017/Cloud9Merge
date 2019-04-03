var mongoose = require("mongoose");                                 // Importing Mongoose from the installed npm folder
var passportLocalMongoose = require("passport-local-mongoose");     // Importing Passport Local Strategy from the installed npm folder

var UserSchema = new mongoose.Schema({                              // Defining the User Schema 
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);                           // The plugin adds some extra methods to the user model.

module.exports = mongoose.model("User", UserSchema);                // Exporting the User Model to the files where it is required 