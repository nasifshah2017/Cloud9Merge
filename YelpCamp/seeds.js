// We are going to set up this file through error driven development
// where we write some code we want to work with, and we get an 
// an error and then we write some code to make that error go away
// and then we keep doing it until thw whole code works. 

var mongoose   = require("mongoose");
var Campground = require("./models/campground"); // "." represents the current folder that the server is in 
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque nunc, maximus ut odio eget, consectetur ornare nulla. Maecenas turpis quam, vulputate sed varius et, facilisis sed arcu. Cras ac erat dignissim, maximus quam a, sollicitudin mi. Ut sed ligula bibendum, lobortis lacus vitae, aliquet arcu. Sed maximus ac tortor tempus efficitur. In posuere scelerisque augue eget luctus. Ut tincidunt nulla ac dapibus congue. Suspendisse ultrices tellus ornare lobortis egestas. Sed quis ultricies est, at tincidunt augue. In sed rhoncus quam. Praesent augue justo, sollicitudin eget sagittis quis, congue ut purus. Vivamus quis rutrum nisl, id egestas odio. Nunc fermentum vehicula massa, at vulputate quam euismod sed."
    },
    {
        name: "Orchard Point", 
        image: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque nunc, maximus ut odio eget, consectetur ornare nulla. Maecenas turpis quam, vulputate sed varius et, facilisis sed arcu. Cras ac erat dignissim, maximus quam a, sollicitudin mi. Ut sed ligula bibendum, lobortis lacus vitae, aliquet arcu. Sed maximus ac tortor tempus efficitur. In posuere scelerisque augue eget luctus. Ut tincidunt nulla ac dapibus congue. Suspendisse ultrices tellus ornare lobortis egestas. Sed quis ultricies est, at tincidunt augue. In sed rhoncus quam. Praesent augue justo, sollicitudin eget sagittis quis, congue ut purus. Vivamus quis rutrum nisl, id egestas odio. Nunc fermentum vehicula massa, at vulputate quam euismod sed."
    },
    {
        name: "Granite Hill", 
        image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque nunc, maximus ut odio eget, consectetur ornare nulla. Maecenas turpis quam, vulputate sed varius et, facilisis sed arcu. Cras ac erat dignissim, maximus quam a, sollicitudin mi. Ut sed ligula bibendum, lobortis lacus vitae, aliquet arcu. Sed maximus ac tortor tempus efficitur. In posuere scelerisque augue eget luctus. Ut tincidunt nulla ac dapibus congue. Suspendisse ultrices tellus ornare lobortis egestas. Sed quis ultricies est, at tincidunt augue. In sed rhoncus quam. Praesent augue justo, sollicitudin eget sagittis quis, congue ut purus. Vivamus quis rutrum nisl, id egestas odio. Nunc fermentum vehicula massa, at vulputate quam euismod sed."
    }
];

function seedDB(){

// Removing all the campgrounds from the database
    Campground.remove({}, function(err){ // Passing in empty brackets which will remove all the campgrounds
            if(err){
                    console.log(err);
                   }
            console.log("removed campgrounds!");
    Comment.remove({}, function(err) {
            if(err){
                    console.log(err);
                   }
            console.log("removed comments!");
        // Addng a few campgrounds to the Database by looping
        // the data array using the for loop
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // Create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
        
    }); 

// Adding a few comments to the Database 
}

// This will export the seedDB function out
// and that will be stored in the seedDB variable
// in the app.js file. 

module.exports = seedDB; 
