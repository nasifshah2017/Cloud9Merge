//Making a request to google.com to get back their home page

// var request = request('request');
// request('http://www.google.com', function (error, response, body){
//     if(!error && response.statusCode == 200) {
//         console.log(body) // Show the HTML for Google homepage.
//     }
// })

//Importing the "request" package from the downloaded npm folder

const request = require('request');

//Making a HTTP request to "http://www.facebook.com" to get back the HTML of Facebook page

//request('http://www.facebook.com', function(error, response, body){
//    if(error){
//        console.log("SOMETHING WENT WRONG!");
//        console.log(error); //If there was an Error
//    } else {
//        if(response.statusCode == 200){ //Else we actually got a response 
//            //THINGS WORKED
//            console.log(body); //The actual response body, the stuff that came back, the HTML Google code
//        }
//    }
// });

request('http://jsonplaceholder.typicode.com/users/1', function(error, response, body){
   
    if(!error && response.statusCode == 200){
        const parsedData = JSON.parse(body);
        console.log(parsedData.name + ' lives in ' + parsedData.address.city);
    }
})