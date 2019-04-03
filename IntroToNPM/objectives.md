#Intro to NPM

* Define NPM
* 
* Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries 
* in the world. It stands for Node Package Manager.
* NPM is the package manager for JavaScript,
* So let's talk about what a package is when we write front and Javascript.
* Think back to creating an HTML file and then including things with a script tag.
* And if we wanted to include something like jQeury or the bootstrap javascript library or any other
* javascript library we need to use a script tag in our HTML.
* But if we're writing node on the server side and we want to include a library or something that someone
* else wrote We can't just add a script tag because there are no script tags because there's no HTML
* We're just dealing with Node the way that we get those libraries when we're writing server side javascript
* to run or writing node is through NPM rather than calling them libraries and NPM refers to them as packages
* 
* So packages are just code that someone else has written.
* A group has written a single person has written that we can include an add to our own project and what
* makes it even more exciting to me compared to including a front end libraries like jQuery or bootstrap
* is that all the packages are centralized here on this NPM Website (https://www.npmjs.com/) and more importantly NPM has a command
* line tool so I can install things really really easily.
* 
* I wanted to install a package like Express or or goal for forever whatever these are.
* All I have to do is type NPM install and the name of the package in my command line and that's it.
* I don't have to go and find a Cdn or a link and copy and paste something.
* All I have to do is run NPM install and then the name of the package.
* And as long as NPM knows about that package and you can see there's almost 200000 different packages
* 
* But as we progress through this course we're going to continually use and add in new packages when people
* create web applications using Node.
* They don't just write plain javascript and do everything from scratch.
* For the most part you're going to use packages and other tools frameworks things that other people have
* written to make our life easier.
* 
* In our stack we'll be using a package called Express which you can see here.
* This one is really popular.
* We'll also be using another package called Mongoose.
* 
* Explain why NPM is awesome
* 
* Great libraries.
* Also it's this centralized repository of almost 200000 different packages.
* Pretty much everything you want to do any possible thing whether it's printing out pictures of cats
* or setting up a web application or connecting to a database or printing out colorful text in your terminal
* or telling a knock knock joke almost anything you could imagine doing with javascript and node.
* Someone has already done it and packaged it into this nice module into a package that you can install
* 
* Intro to the packages we will end up using
* 
* and then I very briefly introduced a few of the packages that will end up using the most important one
* by far is called Express and that will be our framework that we use.
* But we'll also use things like mongoose and Morgan and Ejay ass and body parser and cookie parser and
* passport and a few other ones as well.
* 
* Source: https://www.npmjs.com/
* 
*
# Installing and Using Packages
*
* Use 'npm install' to install a package
* Use 'require()' to include a package