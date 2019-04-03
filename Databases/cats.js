var mongoose = require("mongoose"); // Importing the mongoose packages from the downloaded npm folder

// Connecting Mongoose to the MongoDB Database on the mongod server that's running on the other console
// we have named our Databas as "cat_app", first it will look for the database with that name and when
// it will not find it then it will create a database with that name. But if there was one then it would
// have used the pre-existing cat_app. 

mongoose.connect("mongodb://localhost/cat_app");

// Defining what a structure of a cat actually looks like before adding it to the Database.

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
}); 

// And this actually doesn't do anything to our database
// it just tells Mongoose our JavaScript side of things
// that I want to be able to add cats to our Database
// and a cat should be defined as the structure shown
// in the schema. This is defining a pattern for our data.

// So, what we did here is we took the catSchema which has 
// all its objects inside it and we compiled it into a model
// and we saved it into the variable "Cat". And we will use 
// the Cat variable to insert new cats in the database,
// to update cats, to remove cats and everything else
// to interact with the Database. Like Cat.create,
// Cat.update, Cat.find etc etc. 


var Cat = mongoose.model("Cat", catSchema);


// Adding a new cat to the DB

// var george = new Cat({ //Making a new cat, the name george here doesn't have any impact. DB only saves the info passed in the objects that gets saved
//    name: "Mrs. Norris",
//    age: 7,
//    temperament: "Evil"
// });

// george.save(function(err, cat){  //We save "george" which adds it to the Database
//     if(err){
//         console.log("SOMETHING WENT WRONG!"); // If "george" doesn't get saved due to an error
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DATABASE:");
//         console.log(cat); // Else "george" gets saved and the server displays it on the console
//     }
//     
// }); // We commented it out so that we don't get a new cat everytime we run the file on the console

// We don't need to make a new cat and save it to the Database, instead we make it right away 
// and then it gets saved right away in the database.

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){  // We can name the parameters as we want, the first one is always eror and cat is what we are saving
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

// Retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){ // We are passing in an empty object as argumentbecause we want to retrieve all the cats
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
});

// Mongoose is an ODB, Object Data Mapper. 
// Its a way for us to write JavaScript,
// inside of out JavaScript files, and that
// JavaScript code will interact with our Database
// So its basically a JavaScript layer, on top 
// of MongoDB.



