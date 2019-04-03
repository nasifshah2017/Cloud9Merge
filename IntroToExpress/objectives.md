# Introduction To Express

* What is a framework? How is it different from a library?

-	So, far on Library, it is the code that someone else wrote that we can include in our application and use. So that’s what the frameworks also are, it’s the code that someone else wrote, usually a lot of people wrote because it’s a lot more code that we can use in our application. 
-	But the way we use them is different. So, I have a stack overflow post that I am going to pull up and it talks about the difference between a library and a framework.
-	The most important difference, and in fact the defining difference between a library and a framework is Inversion of Control.
-	What does this mean? Well, it means that when you call a library, you are in control. But with a framework, the control is inverted: the framework calls you.
-	Basically, all the control flow is already in the framework, and there's just a bunch of predefined white spots that you can fill out with your code.
-	A library on the other hand is a collection of functionalities that you can call.
-	Both frameworks and libraries are external codes that we are including in our own application. But a library is something that you are in control of, if you want to use a library you can use one method or ten methods, just like if we include jQuery, its up to us that which parts of it we are to use. We might use a few of the methods for animations or we might use 100 different methods. 
-	On the other hand, on Framework we give up a little bit of control, where if we use a framework like the one, we are going to use, which is Express, we have some decisions that have been already made for us, that we have to abide by in order to use the framework.
-	The task of a framework is not to replace any sort of creativity or modernize the way that all applications work. What frameworks really do is that they take all of the common stuff that we do in every application, all the setup works, all the basic things that every app needs and it prepackages it all up so that we can use it and get started on new apps without having to do all the basic groundworks every single time. 
-	So, when we write an application we just focus on the important contents of the application. 

* What is Express?

-	Express is a framework and it’s a Web Development framework. 
-	There is all sort of different frameworks out there. There are frameworks that help us make videogames or there are frameworks that help us make mobile apps and there are tons and tons of frameworks to make web applications. 
-	Express is one of those frameworks that exists across all those languages. 

* Why are we using Express?

-	Express is by far the most popular Node Development Framework. It has the most downloads on NPM and it has the most people contributing to it on GitHub. Its just the most widely used Node framework which is always a great reason for us to use it. 
-	There are a lot of tutorials on it and there’s a big community of people who knows Express, who are writing about it and talking about it, which is always something you want to look for when you are learning new technology. 
-	The second reason of why we are using Express, is a little more complex to explain. I need to give you a little bit of backstory on the different types of frameworks that we can have.
-	There are two terms that people use to describe frameworks. Those are heavy-weight and light-weight. Heavy-weight and light-weight refer to how much a framework does for you versus how much you must do yourself. A framework that’s Heavy-weight has a lot of text in there and just a few blanks that you feel in. A framework that is Light-weight has a lot more blanks on it, where you are expected to go in and fill in your code more often. 
-	So, Express is a very Light-weight framework, so it doesn’t hide things from you, it doesn’t do things that you don’t expect it to do.  You use Express and you exactly know what you are getting, versus Rails which is very problematic because it does so much for you and you can make apps fast. But students don’t understand what it’s doing because they have never seen a framework that doesn’t do that for them. 
-	So, I’ve noticed that students who learn with a framework like Rails as their very first framework, a very heavy-weight framework, where they only fill in a few blanks, they end up being very reliant on Rails and they don’t understand the underlying concepts and they can’t work with a framework that isn’t Rails or at least it takes more effort for them to unlearn the Rails way of doing things. 
-	So, Express on the other hand is much lighter-weight and that doesn’t mean that its less powerful or that you can’t use Express to do things that you can do in Rails. It just means that you need to understand how things work in order to get things done. On Rails, you can make an awesome web app without really knowing what the heck you are doing. 
-	So, in my mind that’s really the main reason that I’m teaching Express, yes, its popular, there’s a large community behind it, but more importantly its just a great tool to learn how to make web apps. 
-	It’s a Node Framework. 

- Source:      https://expressjs.com/
	           https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library




