//Importing the NPM package that we installed
//The server will find the package in the node modules folder
//And store it on "cat" variable and then we can use
//the name"cat" to use the functions directly from the package

var cat = require("cat-me"); 
var joke = require("knock-knock-jokes");

cat();

console.log(cat());
console.log(joke());
