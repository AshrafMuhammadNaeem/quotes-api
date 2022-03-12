//     Create a reference to the express module:
var express = require('express')
// This will give you access to the express module in your project.
// Use the express function to create an express app object. 
// This will always be the first step we'll take to use express in our project:
var app = express();
// here below will come hard coded data base for quotes
var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
    ];
// Create a variable to store the port # your server will run on.
var port = 3000;
// This is the port your server will use to listen for requests. 
// Clients will send requests to this port to access the server.

// Use the express listen function to instruct the server to start listening,
app.listen(port, function(){
    console.log("Express is listening to port:" + port)
})

// Setup Routes to Handle Requests

//     Lets first handle the most route that our browser just tried to access: GET ' / ' . 
// This is the request that is sent when you try to access the root (homepage) of your server.
// Use the express app.get function to create a route for the GET  ' / ' endpoint.
// accepts requests at the GET / endpoint, and responds with the message "Get request received at '/'"
app.get('/', function(request, response){
    response.send("Get request received at '/'")
})
//  Now start the server with node server.js in terminal and then go on to localhost:3000
// to see the message "Get request reeceived at '/"

// Now we will the GET routes for our API with following endpoints:
// GET/quotes GET/quotes/:id and POST/quotes
// Let's start with the GET /quotes route, which returns a list of all quotes.
// For now, since we aren't yet connected to a database, let's hard code an array of JSON objects in our server file. 
// Add this below the 2 import statements at the top of your server.js file:
// We'll return this list of quotes as JSON. With that, our GET /quotes route is defined as:
// app.get('/quotes', function(req, res){
//     console.log("Get a list of all quotes as json:");
//     res.json(quotes)
    
// })

// Filtering/Query Strings
// Query strings can be included in the
//  request URI in the following format: baseURL/path?query=value 
// With query being the name of the query string, and value being its value.
// n Express, we can access these query strings 
// in a route callback function using req.query.<queryString>, where <queryString>
//  is the name of the value you are expecting.
// We'll handle this within the same GET /quotes endpoint,
//  since we're not working with a different resource
//  so copy the above code and paste it here to modify function and make it comment in above lines
app.get('/quotes', function(req, res){
    if(req.query.year){
        res.send("Return a list of quotes from the year: " + req.query.year );
    }
    if(req.query.id){
        res.send("give me id:" + req.query.id )
    }
    else{
        console.log("Get a list of all quotes as json:");
    res.json(quotes)
    }
    
    
})