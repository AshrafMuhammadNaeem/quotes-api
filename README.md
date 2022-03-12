# quotes-api
Creating APi with Node.js and Express framework
The following guide will walk you through the process of setting up the Node.js project , and using Express to define routes that align to a REST API.
Context

We'll create a basic REST API that stores and provides access to a set of quotes. Each quote will have the following information associated with it:

    id: a unique number to reference the quote
    quote: a string containing the quote itself
    author: a string containing the author's first and last name, or "Unknown"
    year: the year the quote was recorded or discovered

Path	Method	Body	Result
/quotes 	GET 	n/a 	View a list of all quotes
/quotes/:id 	GET 	n/a 	View a quote with the id :id
/quotes 	POST 	quote object 	Add a new quote

At this point since we haven't set up a database yet, our API will return placeholder messages and sample data.

Later, we will complete this project by connecting the API to a database. For now, we'll return sample data in place of stored data.

Let's get started!
