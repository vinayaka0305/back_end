// Import the built-in 'http' module to create a web server
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code to 202 (Accepted) and set the Content-Type to 'text/plain'
  res.writeHead(202, { "content-type": "text/plain" });

  // Send the response body and end the request
  res.end("Welcome to Node.js HTTP module");
});

// Start the server and listen on port 8055
server.listen(8055, () => {
  console.log("Server is running on http://localhost:8055");
});

//req -> request(it is an object)
//res -> response(it is an object)
//req -> incoming data from the front end particularly in post method;
//res -> sending data from backend

//it consists of two sections header and body

//header
//body
