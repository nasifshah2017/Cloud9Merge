var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

// Defining two schemas and compiling them to models

// POST - title, content 

var postSchema = new mongoose.Schema({
    title: String,
    content: String
}); 
var Post = mongoose.model("Post", postSchema);

// USER - email, name  

var userSchema = new mongoose.Schema({ // Defining the Schema
    email: String,      // object
    name: String,       // object 
    posts: [postSchema] // Creating the Association by embedding 
});                     // postSchema in the userSchema
                        // We are adding an attribute called posts
                        // which is an array of posts

var User = mongoose.model("User", userSchema);

// Creating a new, single user

// var newUser = new User({
//    email: "jonsnow@winterfell.edu",
//    name: "Jon Snow"
// });

// Pushing the user to the posts' array

// newUser.posts.push({
//    title: "How to know who I am",
//    content: "Ask Samwell Tarly"
// });
 
// Saving the User

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post ({
//    title: "Reflections on Apples",
//    content: "They are delicious"
// });

// newPost.save(function(err, post){
//    if(err){
//        console.log(err);
//    } else {
//        console.log(post);
//    }
// });

// Retrieving a user from the database

User.findOne({name: "Jon Snow"}, function(err, user){ // Retrieving or Finding the user
    if(err){
       // console.log(err);
    } else {
        user.posts.push({  // Pushing in a new post
            title:"3 Things I really hate",
            content: "Lannisters. Lannisters. Lannisters"
        });
        user.save(function(err, user){  // Pushing new comment doesn't save it to the database 
            if(err){                    // so we are saving it by user.save()
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});

// That's what the console prints
// after we run node embed.js 

// { _id: 5c42654f2d55a71b91284280,
//  email: 'jonsnow@winterfell.edu',
//  name: 'Jon Snow',
//  posts: 
//   [ { _id: 5c42654f2d55a71b91284281,
//       title: 'How to know who I am',
//       content: 'Ask Samwell Tarly' },
//     { _id: 5c4268ffe849231bd3627037,
//       title: '3 Things I really hate',
//       content: 'Lannisters. Lannisters. Lannisters' } ],
//  __v: 1 }

// So its a ONE to MANY relationship where
// ONE user has MANY comments 


