var mongoose = require("mongoose");     // Importing the mongoose package from the downloaded npm folder
var passportLocalMongoose = require("passport-local-mongoose"); // Importing the passport-local-mongoose package from the downloaded npm folder


var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// This will take our Passport Local Mongoose package that we required above 
// and its going to add a bunch of methods that come with that package to 
// our User schema. So, it comes with lot of important functionality and
// features that we need to use in order to have user authentication
// Like by using passport-local-mongoose we have added the Serialize
// and the Deserialize methods and we don't have to declare it

UserSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model("User", UserSchema);