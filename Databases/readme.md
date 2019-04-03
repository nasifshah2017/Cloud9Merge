# Databases

## Intro To Databases
* What is a Database?
    * A collection of information/data
    * Has an Interface.
    * So, a Database isn't just a collection of information/data.
    * If we had a text file and that had a bunch of information
    * and we saved it, that would not be a database.
    * Yes, it might store data for us, it might be a collection of information
    * but the other important aspect of Database is that it has an interface
    * for interacting with the data whether it is adding new information, like
    * adding a new user to the database, or if it removing all the users or editing
    * an existing user or whatever it is there needs to be a way for us to interact 
    * with the data, and it has an interface. When, I say interface I mean we can 
    * write code to interact with it.
    
* SQL(relational) vs NoSQL(non-relational)
    * So, SQL databases are tabular databases and they are flat.
    * Let me show what I mean. So, I have some crude diagrams
    * that I typed up and this is showing what the tables for
    * a database involving Users and Comments could look like
    * 
    * USERS TABLE
    * id | name | age | city
    * ------------------------
    * 1  | Tim  | 57  | NYC
    * 2  | Ira  | 24  | Missoula
    * 3  | Sue  | 40  | Boulder
    * 
    * COMMENTS TABLE
    * id |       text
    * -------------------------
    * 1  | "lol"
    * 2  | "Come visit Montana"
    * 3  | "I love puppies!!!"
    * 4  | "Seriously, Montana is great"
    * 
    * USER/COMMENTS JOIN TABLE
    * userId  |  commentsId
    *   1           3
    *   3           2
    *   2           1
    * 
    * 
    * 
    * Lets just start by focusing on the users
    * so, one user has an ID, a name, an age, 
    * and a city and then every single user that
    * we add must follow that pattern. So, we 
    * are defining these and then we are adding 
    * instances of the user or of users to this 
    * table and then suppose I also have comments.
    * So, I want a user to be able to comment.
    * So, I have a comments' table and all that
    * a comment has is an ID and some text of the 
    * comment. If I want there to be a relationship
    * between users and comments, where a user can 
    * have a comment that is associated with it.
    * The only way to do that to express this relationship
    * is through another table which is what we have below.
    * 
    * USER/COMMENTS JOIN TABLE
    * userId  |  commentId
    * -----------------------
    *    1          3
    *    2          2
    *    2          4
    *    3          1
    *    
    * And these are called JOIN TABLES
    * and what this table does is it joins
    * a user's ID with a comment ID. 
    * So, what I want to show with all of 
    * this is everything is tabular.
    * So, we have to define a table ahead of
    * time and its not very flexible at all.
    * Let's suppose I wanted to add another attribute 
    * to Ira that she has a favourite color
    * of Purple. Then, I have to go and add
    * favourite color to everyone and all of
    * them has to be empty or null for every other
    * person. So, its not flexible. What I have to do 
    * define exact pattern of what a user look like
    * and then I need to follow that pattern very closely.
    * 
    * So, the other type of Database is called the non-relational
    * databases or NoSQL databases. And on this one we do not have 
    * to define a pattern ahead of time, they are much more flexible.
    * so, here's an example of representing Ira using a non-relational
    * database. 
    * 
    * ==========================
    * A NON-RELATIONAL DATABASE:
    * ==========================
    * {
    *   name: "Ira"
    *   age: 24,
    *   city: Missoula,
    *   comments: [
    *       {text: "Come visit Montana!"},
    *       {text: "Seriously Montana is great!"}
    *   ],
    *   favColor: "purple"
    *  }
    *  
    * 
    * 
    *
    * {
    *   name: "Tammy"
    *   age: 24,
    *   city: Missoula,
    *   comments: [
    *       {text: "Come visit Montana!"},
    *       {text: "Seriously Montana is great!"}
    *   ],
    *   favFood: "Ribeye"
    *  }
    *  
    * There are no table. So, we don't have to define 
    * the tabular structure and things can be nested.
    * So, its not a flat database. As you can see above
    * it looks just like JavaScript, infact its really
    * really similar. Its something called BSON, which
    * stands for Binary JavaScript Object Notation. But,
    * its basically JavaScript objects that we are familiar 
    * with and they have a bunch of key value pairs, so name
    * is Ira, age is 24, city is Missoula, and then comments 
    * can just be nested right inside of the data. And the most 
    * important part is that Comments can just be nested right
    * inside of the data. We don't have to deal with IDs, we 
    * don't have to define a table ahead of time. We can just 
    * nest comments and start adding objects. And if we recommit
    * something else we can just add in another comment by pushing
    * into the comments' array. So, we ended up with a very very
    * flexible structure where if we wanted we could just define 
    * favColor down there and then we can have a whole another user, who
    * is named Tammy. And she is 24 too and can be from Missoula,
    * but she has a favourite food called Ribeye. 
    * 
    * So, thats enough of that, all we wanted to focus here is
    * the broad difference between SQL and non-SQL databases.
    * So, SQL Databases or relational databases have been around
    * the longest. They are what most people think of databases 
    * where we have to define a table. Everything is tabular and 
    * if we want to relate a data we have to have multiple tables
    * to relate that data. And we often use IDs to do that. With
    * a non-relational database which is what we are going to be 
    * focusing on for most of this course. We don't have to define 
    * any sort of tables. We don't have tables at all actually and 
    * instead we have a much more flexible structure. Now, this isn't
    * to say that non-relational databases are better. Infact in lot 
    * of cases they are not but there are specific situation where they
    * make sense. But it is more flexible which if that's what you are 
    * looking for then you want to use a non-relational database. 

db.dogs.find()
db.dogs.delete({age: 14})

# Intro To MongoDB
* What is MongoDB?
* Why are we using it?
* Let's install it
* 
* The main reason we decided to go with Mongo is because its the most
* popular database right now with Node and Express. 
* There's a popular that you might have heard of called the MEAN
* stack that stands for Mongo Express Angular and Node.
* So, we are going to do the MEN stack right now, so no Angular.
* The other reason we decided on Mongo, is because it has
* really good tools right now for us to use it inside of an Express App.

# Our First Mongo commands
* mongod
* mongo
* help
* show dbs
* use 
* insert
* find
* update
* remove
* 
* 
* The bottom four commands are the most important.
* The first one is mongod which starts our mongo daemon
* The mongo process. Which is going to running in the 
* background (The other terminal) for the rest of the
* course. We just hae to have this running in order to use Mongo.
* And then in our main tab we will type "mongo" and run it on
* the console and that opens up the Mongo Shell. We use it to debug,
* to test things out, also we use it when we are learning like right
* now, but we won't be using it for real to interact with out Database,
* like remove things, or update things. We will be doing that from
* some sort of files. 
* "show dbs" will show database names. 
* The way we make a Database, is the same way we "use" a Database.
* Its the "use" command. So, first we will type "use"
* and then the database name, so if there is a Database name it
* will directly use it but if there is no Database of that name 
* then it will directly make a Database with that name and then it 
* will use it. 
* The DB that we create directly for use will not display
* when we run show db, that's because it is empty. 
* We fill up our Database by inserting objects in it. 
* And we do that by using the "insert" command. Like if
* it is a DB of dogs, then each dogs will have a name, an
* age, or breed. But as it Mongo, which means it will follow
* NoSQl, or non-relational language. So some dogs will have
* all the features like name, breed, age but others might only
* have name and color, and then some might even have no objects
* at all and it is empty. 
* So will have it by having a new collection. So just like
* "use" we will not declare a new collection ahead of time 
* we can just go ahead and "insert" the collection immedaitely
* So, for example if our collection name is "dogs" and we want to 
* insert a single dog in our Database, then we write "db.dogs.insert()"
* and then we pass in the data that we want to insert. So, db is
* the name of the Database, "dogs" is the collection, and insert is the 
* command. Now, to insert a single dog we pass in the objects inside 
* the insert command. For example: db.dogs.insert({}name: "Rusty", breed: "Mutt") 
* Now to prove that the collection was created we will run "show collections"
* and that will give us "dogs" collection. 
* Now if we want to view the dogs in our collection we run the "find"
* command as db.dogs.find(). If we don't pass any arguments inside
* "find" then it will return us all the dogs in the collection.
* Now if we want to find a particular dog in our collection, then
* we pass in an object of that particular dog in our find command, 
* for example if we want to find a dog with the name "Rusty" then 
* we run "db.dogs.find({name: "Rusty"})" and we hit enter and 
* the it will return the dog or dogs with the name "Rusty" and will
* display all its objects. 
* Now, if we figure out that a certain dog's color in our collection
* is brown but we entered it as black then we can change the color
* object by using the command "update". And this command takes 2 objects
* as arguments with it, the first one is the object to identify the dog
* that to be updated and the second one is the updated form of the object. 
* So, it will be run as following "db.dogs.update({name: "Lulu"}, {color: brown})"
* But one proble is with this command the db will erase all the other objects
* of Lulu and will only keep the "color: brown" object. To prevent that from
* happenning we pass in a key to keep all the other previous objects just as below
* "db.dogs.update({name: "Lulu"}, {$set: {color: "brown", isCute: true}})"
* And it will return
* "{name" : "Lulu", "color" : "brown", "isCute" : true}
* So, that was Updating and now the last thing to talk about is "Removing"
* or deleting. Which in Mongo we use the "Remove" command to accomplish. 
* Now if we want to remove Lulu from our database. Then we run the "Remove"
* command by passing in the unique object of that dog. So, to remove Lulu
* we run "db.dogs.remove({name: "Lulu"})" and it will delete Lulu
* from the collection. Now, if you pass in an object that is same for more
* than one dog then all the dogs that has that object will get deleted form 
* the collection. 

# Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose
* 
* So, far we have seen how to interact with MongoDB using
* the Mongo console, but its not actually where we will write our code
* that interacts with the database. Where we will actually be doing that
* is inside our Express code. So, lets take the YelpCamp's app.js as an 
* example. We can write the code in our POST route where we are taking
* the data entered by the user on the form and insert it in our Mongo
* DB collection instead of the array. Likewise instead of rendering the
* campgrounds' page by passing in the array through the GET route we
* are actually going to run a find command as db.campgrounds.find and 
* then take the results of that and send that to the campgrounds' template. 
* And in order to do these all we are going to learn about a tool called 
* Mongoose. 
* Mongoose is an elegant mongodb object modelling for NodeJS. 
* It provides a straight-forward, schema-based solution to model
* your application data. It includes built-in type casting,
* validation, query building, business logic hooks and more,
* out of the box. 
* So, Mongoose is a tool that we are going to download with npm.
* That helps us interact with MongoDB inside of our JavaScript files.
* It is possible to do it without Mongoose. There are tools like
* this out there but it just makes it easier for us to interact with the 
* Database. Just like jQuery makes it easier for us to interact with the 
* DOM, but we don't have to have jQuery. Mongoose makes it easier and 
* cleaner to interact with a MongoDB Database.