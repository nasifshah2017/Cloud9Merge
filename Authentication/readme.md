# Authentication

## Intro to Auth
* What tools are we using
    * Passport
    * Passport Local
    * Passport Local Mongoose
* Walk through auth flow
* Discuss sessions
    * Express-Session
    
- Students are really excited to learn about user authentication
- because they feel it makes their app legitimate. It makes them 
- real and usable if you can sign up, you can log in and you can
- log out. So, that makes it a fun and exciting thing to teach. 
- But the truth is its also a really hard thing to teach. Because
- Authentication is pretty complicated. There are lot of moving
- pieces that needs to fit together to make it work. A lot of big 
- concepts and honestly there's a lot of code to make it work. 
- Fortunately, for us there are lot of tools out there that makes
- us implement authentication quickly and safely. 
- When you are  teaching user authentication, there's a choice that 
- you have to make and for us that choice was are we going to teach
- Authentication from scratch, not using any tools at all, and
- making sure students focus on ins and outs of every important 
- concepts, and it might take 5 to 6 hours, it might be a lot of 
- lessons, a lot of videos, we might end up losing some students
- but we make sure that everyone understands how Authentication 
- works, or do we use some existing tools out there, tools that 
- help us add user authentication faster, simpler and way fewer
- lines of code. It all boils down to this issue of is more important
- for students to have deep understanding of how things work, is that
- the priority, or is it priority to have students make things fast.
- So, is it about conceptual understanding and depth of knowledge or 
- is it about making stuffs. Obviously, in an ideal world we would want
- both. We want everyone to understand the ins and outs of everything 
- that we teach and we want students to have tons of practical knowledge
- and be able to make things quickly. 
- In the past we have tried both approaches to teaching where we started 
- out by trying to give students a deep undertstanding of every concept 
- and how it all worked and fit together before we have implemented anything
- and then we ahve also don ethe opposite where we just try making some things 
- work first and then come back and talk about how it works. 
- So, we have decided to have two units, in this first unit on authentication
- that we are on right now, we going to start by giving you a quick overview
- not at all in depth of how authentication works and then we are going to use
- this tools that make our lives easier and make our code shorter. We are going
- to use that right away and the focus is on just making something that has 
- Authentication.
- Now, we are going to introduce the tools that we are going to use.
- So, we are going to use somethin called "Passport JS".
- We are not using it because its something that will make our life easier,
- make our code shorter or make this implementation faster, but its also 
- something that's used a lot in the real world. 
- Lots and lots of applicationuse Passport JS to implement their Authentication. 
- Passport is simple, unobstrusive authentication for Node.js.
- Its an authentication middleware for Node.js. Extremely flexible and modular, 
- Passport can be unobstrusively dropped in to any Express-based web application.
- A coprehensive set of strategies support authentication using a username and 
- password, Facebook, Twitter, and more. 
- We are also going to use another package called Passport Local and this is one 
- of those schemes or strategies for Authentication, so there's a Passport Facebook,
- a Passport Twitter, A Passport Google and Passport local and 300+ different 
- Passport strategies. Passport local is for username and password, which is 
- what we will be doing to start, but whats really great about Passport, is that 
- later in this course, we acn go and add Facebook or Twitter, and we can keep 
- local as well and we can have 3, 5 or 10 different ways of logging in to our 
- app. Usually, we want to keep it pretty limited but we can have as many as we 
- want by using Passport and to name Passport its about providing this entry point 
- in all sorts of destination. 
- There is one more package that we are going to use which is called Passport 
- Local Mongoose and Passport Local Mongoose is just another package that will 
- help us with Authentication with Passport and it is specially made to work 
- with Mongoose. So, we don't have to use it. We could just get away with just 
- using Passport Local, the Passport Local Mongoose is going to help us make 
- it even faster and make it simpler for us. So, these are the three main tools
- that we will be using. 
- 
- Once we log in we can move back and forth from one page to another by staying
- logged in and don't have to get redirect back to the login page as we are 
- already logged in. So, the way that it works the key concept on which everything
- hinders around is something called "Sessions".
- Basically, http is supposed to be a stateless protocol, which means that when
- you send requests, those requests are one time thing and they don't contain
- information about your history, or the previous request that you have made, 
- they are not linked together. A request doen't have a state, its just a one 
- time transaction, which would make it really hard to implement User Auth, 
- because we want to be able to stay logged in, we want the server to know that
- Rusty456 (our username) is still logged in and the way that we do that is by 
- using sessions and what sessions will do is that there just a way to make 
- http not stateless. They are a way to provide state. So, every request that we
- make on this app, when we are logged in or someone's logged in, there's a 
- little bit of information about that user thats saved to that request, thats
- sent to the server and its not actually the user password or the whole username, 
- but its a little bit of information and its encoded and its basically made to 
- be a secret and then its get to our server and then passport will see that 
- and it will translate it into soemthing that it understands, basically crack 
- the code or unencrypt it and it will use that information to tell if someone's
- logged in or not.
- So, the key concept is that Sessions allow us to have state in our http request.
- So, we can send data, we can go back to the home page and it still knows that 
- we are logged in as Rusty456 and we can go to any page of that site without 
- any problem, and thats because every time we are making a request we are sending
- a tiny piece of information that says Rusty456 is logged in, and soon as we 
- log out that piece of information is gone. So, now when we go to any page that
- is protected, we have some logic that says if there is no user in the session
- then don't let that person go to that protected page. 

# Auth CodeAlong Part 1
* Set up folder structure
* Install needed packages
* Add root route and template
* Add secret route and template

# Auth CodeAlong Part 2
* Create user model
* Configure passport

# Auth CodeAlong Part 3
* Add Register routes
* Add register form

# Auth CodeAlong Part 4
* Add Login routes
* Add Login Form

# Auth CodeAlong Part 5
* Add Logout Route
* Add isLoggedIn middleware


- Source: http://www.passportjs.org/
