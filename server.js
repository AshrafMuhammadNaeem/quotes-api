//     Create a reference to the express module:
var express = require('express')
// This will give you access to the express module in your project.
// Use the express function to create an express app object. 
// This will always be the first step we'll take to use express in our project:
var app = express();
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