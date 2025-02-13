// Import the built-in 'http' module to create an HTTP server
const http = require('http');  

// Create an HTTP server
const server = http.createServer((req, res) => {  
    // Check if the request method is 'GET'
    if (req.method === 'GET') {  
        // Set the response status to 202 (Accepted) and Content-Type to plain text
        res.writeHead(202, { 'content-type': "plain/text" });  

        // Send the response message for GET requests
        res.end('Welcome to Node.js HTTP module - GET method');  
    }

    // Check if the request method is 'POST'
    if (req.method === "POST") {  
        // Listen for incoming data chunks from the request body
        req.on('data', (chunks) => {  
            // Convert the received buffer data into a string
            const response = Buffer.from(chunks);  
            const result = response.toString();  

            // Parse the received JSON string into a JavaScript object
            const obj = JSON.parse(result);  

            // Check if the 'age' property in the received object is 18 or more
            if (obj.age >= 18) {  
                res.writeHead(202, { 'content-type': "plain/text" });  // Set response status and content type
                res.end('Welcome to Node.js HTTP module - POST method, he can vote');  
            } else {  
                res.writeHead(400, { 'content-type': "plain/text" });  // Set response status to 400 (Bad Request)
                res.end('Welcome to Node.js HTTP module - POST method, he was not able to vote');  
            }
        });
    }
});

// Start the server on port 8055 and log a message when it's running
server.listen(8055, () => {  
    console.log('Server is listening on port 8055');  
});
