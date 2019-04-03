var bodyParser       = require("body-parser");
var methodOverride   = require("method-override"); // Importing the "method-override" tools from the npm folder
var expressSanitizer = require("express-sanitizer"); 
var mongoose         = require("mongoose");
var express          = require("express");
var app              = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public")); //To serve on a custom stylesheet in the public folder
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer()); // Telling Express to use Sanitizer, to get JS contents out of the code
app.use(methodOverride("_method"));

// Telling our app that whenever you get a request that has "_method"
// as a parameter then take whatever it is, for us it will be PUT 
// request or the DELETE request. 

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema); //Compiling the Schema into the model

// RESTFUL ROUTES

app.get("/", function(req, res){
   res.redirect("/blogs"); 
});  

// INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
      if(err){
          console.log("ERROR!");
      }  else {
        res.render("index", {blogs: blogs}); // First one is the name we are giving, second one is the parameter we are passing
      }
    });
  });

// NEW ROUTE
 app.get("/blogs/new", function(req, res){
    res.render("new");
 }); 

// CREATE ROUTE
app.post("/blogs", function(req, res){
    // Create blog
    console.log(req.body);
    console.log("==============================");
    console.log(req.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            // then, Redirect to the INDEX
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    // We have to use the id passed with this function to find its blog 
    // and then EDIT that blog
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog}); // Passing the blog found by its ID
        }                                          // stored in the foundBlog object 
    });                                            // then stored it in the blog object    
});                                                // and passed it to the edit.ejs file 

// The update route will send the updated (edited) blog
// back to the index

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
    // Sanitizer removes the JavaScript contents
    req.body.blog.body = req.sanitize(req.body.blog.body); 
    // The Expess built in function that takes 3 parameters, 
    // the id, the newData, and the callback function.
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    // destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else { 
            res.redirect("/blogs");
        }
    });
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
});

