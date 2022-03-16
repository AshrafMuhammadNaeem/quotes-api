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
// If the endpoint for the Express API were defined as: GET /cars/:make,
//  then the value "Toyota" would automatically be processed into the make parameter within the GET /cars route.
// In an Express app, we can then access these parameters using req.params.<param>, 
// where <param> is the name of the named route parameter.
// Get a quote by id
// In our case, we want to define an endpoint that accepts an id parameter that 
// returns the corresponding quote by id. When requesting the quote with an id of 2,
//  the path for this request would be:
// /quotes/2
app.get('/quotes/:id', function(req, res){
    console.log("Return the quote with id:" + req.params.id);
    res.send("Return quote with the ID:" + req.params.id);
})
//Here, we are accessing the dynamic id parameter value using req.params.id.
// Now that we've set up 2 GET Routes in our API,
//  let's add a POST route that will allow users to send data to be stored.
// Our POST endpoint will be used when a user submits data to store a new quote.
// In this case, this data will include the quote string, the author string, and a year value.
// We can access this data in key-value pairs using req.body, but only after the data has been parsed into this format. We can install body-parsing middleware that retrieves data from the request body message, and parses it into these key-value pairs for us.

// We'll use a middleware called body-parser. In order to use body-parser, complete the following steps:
// Install body-parser and save it as a dependency for your Node.js project, by running the following 
// command in your command-line interface within your project folder: npm install --save body-parser
// In your server.js file, require body-parser with the following line of code:
var bodyParser = require('body-parser');
// Use app.use() to tell your Express app to use body-parser as middleware for
//  url-encoded form data (this is the data format we expect to receive from HTML forms)
app.use(bodyParser.urlencoded({extended: true}))
// Once we complete these steps, we can use req.body to access 
// the key-value pairs of data that were passed in the request body for a POST request.
// Our POST /quotes route will be defined as:
app.post('/quotes', function(req, res){
    console.log("insert a new quote" + req.body.quote);
    res.json(req.body)
})

// We are using req.body.quote to get the quote string, and sending the full JSON object 
// representing all of the quote's data (quote, author, year), using req.body.
// To connect to a SQLite database from a Node.js project,  complete the following steps:\
// Install the sqlite3 module using Node Package Manager, and save as a project dependency:
// npm install sqlite3 --save

// Import the sqlite3 module in your Node.js project:
var sqlite3 = require('sqlite3');
// Connect to DataBase
var db = new sqlite3.Database('myDatabase.db');
// // The first parameter of the sqlite3.Database function specifies the database to connect to or create.
// This can be a database file path, like above, or the string ':memory:',
//  to connect to a temporary in-memory database. By default, when connecting to a persistent database, 
// the database will be created if it does not already exist at the file path provided.
// Once you've connected to a database using the sqlite3 module,
//  you'll use the db object to run queries to work with the database.
// The run() method allows us to run simple SQL statements 
// that don't return query results, such as INSERT and CREATE.

db.serialize(function(){
    // Create Table
    db.run('CREATE TABLE Contacts( FirstName Text, LastName Text, Age INTEGER)');
    // Insert data into Table
    db.run('INSERT INTO Contacts VALUES("Saleem", "Ashraf", 33)');
})
db.close();

