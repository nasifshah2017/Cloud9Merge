// Here we do Association through referencing, in embedding, 
// we had a bunch of posts in an array in the post model and  
// we embed that array in the user model.

// {    
//  name: "user's name"
//  posts:[                                 // Array
//          {title: "xxxx", content: "yyyy"}
//          {title: "xxxx", content: "yyyy"}
//          {title: "xxxx", content: "yyyy"}
//          {title: "xxxx", content: "yyyy"}
//          {title: "xxxx", content: "yyyy"}
//      ]
//          
//    
// }

// On this one we will do the Assocition through referencing,
// so instead of having posts we will have a bunch of IDs,
// and this IDs will corresspond to individual posts. So,
// the key difference compared to embedding is that we are storing 
// IDs instead of posts. We are referencing the IDs of posts
// rather than embedding the whole posts. 

// {
//    name: "user's name"
//    posts: [
//        1235479767afdff
//        6725874849oidjj
//        64863876655iopj
//        99478673654joil
//        ]
// }


// {
//    id: 1235479767afdff
//    title: "xxxx"
//    
// }


var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

// Requiring the Post model's file to use that model on this file
// we are adding on the filepath "./" to let the server know that  
// the post's file is inside the current directory we are in, which 
// is the Association's directory.

var Post = require("./models/post"); 
var User = require("./models/user"); 

// Defining two schemas and compiling them into models

 Post.create({
    title: "How to cook the best burger pt.4",
    content: "JBKWDWJFBEKUG"
 }, function(err, post)
{
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
 });

// Find User
// Find all posts of that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//   if(err){
//        console.log(err);
//    } else {
//        console.log(user);
//    }
// });

// So, first we are finding a user, and then we are populating,
// the field "posts" which will find all the IDs of all users
// and only select the ones that belong to this particular user
// and it will make its own posts array that will contain
// all the posts belong to that user, and then we are doing
// .exec which will actually make this happen through the 
// callback function. 

// Creating a single user

// User.create({
//    email: "bob@gmail.com",
//    name: "Bob Belcher"
// });


