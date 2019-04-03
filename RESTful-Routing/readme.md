# RESTful Routing

## Introduction
* Define REST and explain WHY it matters 
* List all 7 RESTful routes
* Show example of RESTful routing in practice 

* REST - a mapping between HTTP routes and CRUD

* We are focusing on something called REST
* It stands for Representational State Transfer 
* but thats not the key to this lesson. Its
* not that important. What is important though is defining what
* REST is. So, REST is not a new tool or technology. Its not a 
* language or anything like that. Its much simpler. REST is just
* a pattern for defining our Routes. Its a way of mapping HTTP 
* routes and CRUD together and CRUD stands for CREATE READ 
* UPDATE and DESTROY. 
* 
* So, we have these functionalities 
* CREATE
* READ 
* UPDATE 
* DESTROY
* And lets take an example of users, so my site has USERS
* and I want someone to be able to CREATE a new USER. Someone
* should be able to read USERS which means retrieving information
* on USERS, updating USERS or DELETING them. 
* 
* So, lets take an example of a blog site, we want to be able READ 
* all blogs but then we want to be able to ADD a new blog, like a 
* new post. The we want to be able to EDIT a blog and the we also want 
* to be able to DELETE a blog. For doing all these functions we need ROUTES
* for all of them. Inside our Express app there are 7 different routes like
* app.get(), app.post(), app.something() is defined. Yes, it sounds like we 
* need more than 7 routes. But remember that for some operations like for 
* CREATING something we need 2 routes, we need the Form route that shows us 
* the Form, and then we need for a place for the Form to submit. The same
* thing goes for EDIT. So, to UPDATE something we need a Form and we need 
* somewhere for the Form to go. 
* 
* So, whats important is that REST is just a convention, its an architecture
* for mapping our HTTP routes to CRUD functionality. 
* 
* So, lets take Blog as an example again, if we wanted to have a page where
* we could DESTROY a blog for an instance, our URL could be something like 
* "/destroyBlog/:id", and then we need a blog that we are destroying so we
* would have an ID there to locate that blog, or to UPDATE we might have 
* something like "/updateBlog/:id" and to read all the blogs we can have 
* something like "/allBlogs". And the point is we can do whatever we want. 
* And that's the point of REST is that we don't do whatever you want. You
* follow a pattern and the reason that you make RESTful route is the whole
* point behind it is its conventional. You see it all over the place in 
* different application. But, more importantly is the fact that its reliable.
* So, the other people who are working on your code or when we are talking 
* about API is if you are interacting with a RESTful API or someone is 
* interacting with your own API that you have created, you know that if 
* something is RESTful it follows a particular pattern. And that pattern 
* is the one given below. 
* 
*
*
* 
*            RESTful Routes - A Table of all 7 RESTful routes  
* ------------------------------------------------------------------------------------------------------------------------------------------
* Name      |   Path            |   HTTP Verb   |   Purpose                                         |   Mongoose.Method
* ------------------------------------------------------------------------------------------------------------------------------------------
* Index     |   /dogs           |   GET         |   List all dogs                                   |   Dog.find()
* ------------------------------------------------------------------------------------------------------------------------------------------
* New       |   /dogs/new       |   GET         |   Show new dog form                               |   N/A
* ------------------------------------------------------------------------------------------------------------------------------------------
* Create    |   /dogs           |   POST        |   Create a new dog, then redirect somewhere       |   Dog.create()
* ------------------------------------------------------------------------------------------------------------------------------------------
* Show      |   /dogs/:id       |   GET         |   Show info about one specific dog                |   Dog.findById()
* ------------------------------------------------------------------------------------------------------------------------------------------
* Edit      |   /dogs/:id/edit  |   GET         |   Show edit form for one dog                      |   Dog.findById()
* ------------------------------------------------------------------------------------------------------------------------------------------
* Update    |   /dogs/:id       |   PUT         |   Update a particular dog, then redirect somewhere|   Dog.findByIdAndUpdate()
* ------------------------------------------------------------------------------------------------------------------------------------------
* Destroy   |   /dogs/:id       |   DELETE      |   Delete a particular dog, then redirect somewhere|   Dog.findByIdAndRemove()
* ------------------------------------------------------------------------------------------------------------------------------------------
* 
* So, we have a table of all the different RESTful routes, in this case for dogs.
* So, these are the 7 routes that we talk about in our application. We will be 
* building a blog site using these 7 routes and we will be using the franework
* called Semantic UI instead of Bootstrap which is a lot cleaner and it also
* have buttons to operate. 
*

# Blog Index
* Setup the Blog App
* Create the Blog model
* Add Index route and template
*

# Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

# Putting the C in CRUD 
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

# SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

# Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

# DESTROYYYY
* Add Destroy Route
* Add Edit and Destroy Links

# Final Updates
* Sanitize blog body
    * npm install express-sanitizer --save 
* Style Index
* Update REST Table

