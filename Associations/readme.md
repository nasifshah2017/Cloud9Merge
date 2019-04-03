# Associations

## Intro To Associations
* Define associations
* Discuss one:one, one:many, and many:many relationships 
* 
* Associations will allow us to have multiple pieces of data, and multiple 
* collections in our database that are related to one another.
* This is hugely important to build complex web apps. 
* Right now we have YelpCamp in our database and our camp
* has campgrounds in it. Then we are going to add users in it.
* Then those users are going to get associated with the campgrounds.
* Then the campgrounds will have comments, that means those campgrounds 
* are associated with a list of comments. 
* If we take an example of Facebook, when we sign up on Facebook 
* there's an entity, a model called USERS and then there's another 
* entity called POSTS and then somewhere there's PHOTOS, there's
* ALBUMS, COMMENTS, TAGS, LIKES etc. 
* 
* All of these models that we mentioned above are interconnected.
* So, a USER is related to a POST, when a USER creates a POST, that
* POST is not just an arbitrary POST. Its related to the USER. Same 
* thing with PHOTOS that an USER uploads, and the ALBUMS those 
* PHOTOS belong to. So a PHOTO can be associated with an ALBUM 
* and an ALBUM can be associated with an USER. And then we have 
* COMMENTS. A COMMENT can be on a PHOTO, the COMMENT can be on a 
* POST. The COMMENT can also be on an ALBUM of PHOTOS, then we have 
* TAGS, so PHOTOS can have TAGS, but you can also TAG people(other USERS),
* in COMMENTS, you can TAG people on POSTS. We have LIKES, you can LIKE a 
* COMMENT, you can LIKE an ALBUM, you can LIKE a PHOTO you can LIKE a POST. 
* 
* There are so many things going on, but the core concept is that the 
* Data is related. The term Association just refers to the idea of having
* Associated Data. The other important point is that there are different 
* types of Associations, there is Association known as ONE TO ONE, ONE TO MANY,
* and MANY TO MANY relationships. 
* 
* So, lets just start talking about ONE TO ONE relationships, and ONE TO ONE 
* relationships are the simplest relationships. So, we have one of entity, and 
* that's related to one another entity, so we could say that one book has one 
* publisher, or an employee has one title, where it gets more exciting is when 
* we start talking about ONE TO MANY relationships. ONE TO MANY realtionship is 
* when one entity is related to many of another entity. 
* 
* Taking the example of Facebook, ONE user can have multiple PHOTOS that they 
* have uploaded. The PHOTOS belong to that ONE user. A PHOTO cannot have many
* uploaders so it is an ONE TO MANY relationship, unlike a MANY TO MANY 
* relatioship, where the association goes both ways. 
* 
* The classic relationship of a MANY TO MANY relatioship is STUDENTS and 
* COURSES. So, in college, a STUDENT can sign up multiple courses, and each
* COURSES has multiple STUDENTS enrolled. So, its a two way MANY TO MANY 
* relationship. Another one would be BOOKS and AUTHORS. So, an AUTHOR can 
* write many BOOKS and each BOOK can also have many AUTHORS. It might be common
* for there to only be one AUTHOR, but its definitely possible and not uncommon
* to have multiple AUTHORS. 
* 
* So these are the three basic types of relationships and the type that we will 
* encounter the most is ONE TO MANY. So we will have comments and campgrounds, 
* and one campground has many comments but one comment only belongs to one 
* campground. 
* 
* In the next lessons we will see how we can write associations, how we can 
* connect different models using mongoose. We are going to show two different 
* ways of doing that. 
* 
* The first is using whats known as Embedding data, and the second one known as
* Referencing data. So, we are going to do these in two seperate installments.

## Embedding Data

* User
* Post

## Referencing Data

# Module.Exports
* Introduce module.exports
    - It is going to clean up our code and make it more modular
    - The we'll show how we can use module.exports to clean up
    - code that we just wrote. 
    - We will break the reference.js file into seperate sections
    - The models will have its own file. For example, if
    - the Post model have its own file and be referred as post.js,
    - Then we can connect that file with our reference.js file,
    - by typing "var Post = require("post.js");" and we will do 
    - the same thing for the User model. So, why will we do this, 
    - there are two answers. First one is that it will help us
    - clean up our code. Also it makes our code modular, which
    - means if we want to use any of our models in another code, 
    - then we don't have to rewrite the models code again we can
    - just require the models' files in those codes. So, we will
    - set up a models folder inside our Association folder, and
    - the models folder will carry the files post.js and user.js.
    - We will be writing module.exports below all of the models'
    - files and module.export will be exporting the files to the
    - reference.js file or the other files where we want to use 
    - that model. 
* Move our models into seperate files