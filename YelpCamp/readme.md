# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all the campgrounds

* Each Campground has:

* Name
* Image
* 
Array [
objects inside the bracket {name:"Salmon Creek", image: "http://www.image.com"}
objects inside the bracket {name:"Salmon Creek", image: "http://www.image.com"}
objects inside the bracket {name:"Salmon Creek", image: "http://www.image.com"}
objects inside the bracket {name:"Salmon Creek", image: "http://www.image.com"}
objects inside the bracket {name:"Salmon Creek", image: "http://www.image.com"}
objects inside the bracket {name:"Salmon Creek", image: "http://www.image.com"}
objects inside the bracket {name:"Salmon Creek", image: "http://www.image.com"}
]

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in Body Parser
* Setup route to show the form
* Add basic unstyled form

# Style the Campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and the Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use Campground model inside our routes!

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
*   The mongoose command that deletes all the entries 
*   in the database.
* Add a show route/template

* RESTFUL ROUTES
* 
* name      url       verb     description
* ===============================================
* INDEX     /dogs     GET      Display a list of all dogs
* NEW       /dogs/new GET      Displays form to make a new dogs
* CREATE    /dogs/    POST     Add new dog to Database
* SHOW      /dogs/:id GET      Show info about one dog
* 
*
*
*
*
* This pattern is something that 
* lots and lots of applications will follow.
* And this makes it reliable and predictable 
* for us to interact with other applications.
* Once we talk about APIs is we'll know that 
* if we want to get all of the users from 
* the GitHub API we can do api.github.com/users
* And that will give us a list of all the users
* thats the users' index. 

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require eveything correctly

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts
    - Now we are going to work in adding comments to YelpCamp
    - Currently, all that we have is a list of Campgrounds and
    - when we click on a Campground to go to the show page, see 
    - some information about it, but what we want to happen is 
    - there to be a list of comments or reviews in the show page
    - and then a button that says add a new review/comment, and  
    - then we  can click on that and go to a form, submit a new  
    - comment, and that will take us back to the show page and  
    - we will see a list of comments. 
    - So, there's a lot of stuffs that is needed to be done, we 
    - need to set up the Comments' model, we have to associate it
    - with the Campground model, we have to require all the files 
    - correctly, then we have to create all the routes, we have to
    - create all the views.
    - But we are going to start somewhere else, we are going to start
    - by creating what is called a seeds file. And the point of seeds'
    - file is that we can run it to seed our databse with some data.
    - So, right now we have four campgrounds in the database.
    - But we want to write a file that we can run and what the file 
    - will do is empty everything in the database to start and then
    - its going to add in three or four campgrounds, and each one will
    - have a few comments. So, we have some sample data to work with. 
    - And the reason we are doing this is so that when we add comments
    - in, we will have to see if the comments are working or not. 
    - Otherwise, once we create the comment model, then we would have 
    - to get the comment new, and create the routes working, and then
    - we have to do a lot more work before we can tell if our comment
    - is set up correctly or not. 
    
*

# Add the Comment model
* Make our errors go away!
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form 
* 
* RESTFUL ROUTES
* 
* name          url             verb        description
* ===========================================================
* INDEX         /dogs           GET         Display a list of all dogs
* NEW           /dogs/new       GET         Displays form to make a new dog
* CREATE        /dogs           POST        Add new dog to DB
* SHOW          /dogs/:id       GET         Shows info about one dog
* 
* INDEX         /campgrounds
* NEW           /campgrounds/new
* CREATE        /campgrounds
* SHOW          /campgrounds/:id
* 
* COMMENTS' ROUTES
* NEW           /campgrounds/:id/comments/new
* CREATE        /campgrounds/:id/comments
* 
- Now we need to add in Comment routes, because we want the users to
- to add in comments, so we want to add a button on the show page which 
- on clicking will take us to a route, from where we can add a comment to
- the particular campground's show page, thats the important part
- so our comments route will not look like above campground routes, it 
- will not have NEW(comments/new as a GET), and CREATE(/comments as a POST),
- because "comments/new" has no information on the particular campground that
- we are adding the comment to. So, this would work if we arbitrarily create
- comments, but if we wanted it to be associated with a particular campground
- which we do then we need the campgroud ID on the URL. So, this gets to the 
- first topic which is "nested routes". So, what we can do is take these
- RESTful Routes and combine them, and then we can nest the comment routes 
- on top of or after the campground routes. 
- So, our comment NEW actually going to have URL camgrounds/:id/comments/new
- and our CREATE will have campgrounds/:id/comments. So, what we have done is
- taken the "campground/:id" and put them before URLs that has to do with 
- comments. That is because a comment is dependent on a campground. We don't 
- have comments that exist away from campgrounds, they are inherently linked. 
- And inside CREATE we are not only going to make a comment, we are going to
- make a comment and associate it with a campground. So, we going to do a 
- findById for a campground and then we are going to have to CREATE a comment
- and then we are going to have to connect them and save them both. So, we need  
- the ID on the CREATE URL (campgrounds/:id/comments). So, all thats to say we  
- are going to use the nested routes and these are two new routes we are adding 
- NEW and CREATE for comments. 

# Style Show Page
* Add sidebar to show page
* Display comments nicely

# Finish Styling Show Page
* Add pblic directory
* Add custom stylesheet

# Auth Pt. 1 - Add User Model
* Install all packages needed for Auth
* Define User model

# Auth Pt. 2 - Register
* Configure Passport
* Add register routes 
* Add register template 

# Auth Pt. 3 - Login
* Add login routes
* Add login template

# Auth Pt. 4 - Logout/Navbar
* Add Logout route
* Prevent user from adding a comment if not signed in
* Add links to navabar
* Show/hide auth links correctly 

# Auth Pt. 5 - Show/Hide Links 
* Show/hide Auth links in navbar correctly 

# Refactor the routes
* Use Express router to reorganize all routes

# User + Comments
* Associate users and comments 
* Save author's name to comment automatically 

# Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override 
* Add Edit Route for Campgrounds
* Add Link to Edit Page 
* Add Update Route
* Fix $set problem

# Deleting Campgrounds
* Add Destroy Route
* Add Delete button

# Authorization
* User can only edit his/her campground
* User can only delete his/her campground
* Hide/Show edit abd delete buttons

# Editing Comments 
* Add Edit route for comments
* Add Edit button
* Add Update Route 

<!--/campgrounds/:id/edit-->
<!--/campgrounds/:id/comments/:comment_id/edit-->

# Deleting Comments
* Add Destroy Route
* Add Delete Button

<!--Campground Destroy Route: /campgrounds/:id-->
<!--Comment Destroy Route: /campgrounds/:id/comments/:comment_id-->

# Authorization Part 2: Comments
* User can only edit his/her comment
* User can only delete his/her comment
* Hide/Show edit and delete buttons
* Refactor Middleware

# Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerst to header
* 
- In this lesson we are focusing on improving the usability of YelpCamp
- right now its kind of an disaster of giving feedback, error messages, 
- or success messages to an user and by disaster we just mean that it doesn't
- exist at all. We have a console.log that our users cannot see, we see it as 
- developers as our console here when our server's running, but no one else 
- sees that. So, we have three main objectives here as you can see them above.
- We want to demo it first so to show you what to expect, how it will look, how
- it behaves, the we will install and configure a package called "connect-flash".
- So, what we are doing is adding in Flash, or the Flash, or a Flash, in other 
- frameworks, people call it flash hash, people call it flash messages, but basically
- the idea is we are going to show a message to a user like successfully logged in,
- or successfully logged out, or maybe something like you don't have permissions to 
- that, or please log in before before you add a campground something like that. We 
- want to show it to a user just once, we don't want it to be permanent fixture on 
- the page, we want to flash it to them one time and then it goes away on the next 
- page or if the user refreshes. Then the last thing is to add in our flash messages
- to the header and add in some bootstrap classes that will style it. So. there's
- some built in ways of doing things with Bootstrap. This is such a common feature
- to have messages that are flashed out to your user on all sort of sites that 
- bootstrap has some built in styling for that, that will take advantage of. 
- 
- 
- 
- Source: https://github.com/jaredhanson/connect-flash
-       : https://gist.github.com/arshdkhn1/1536652eb534cafe4ef5fb95d6485c4b
- 

    