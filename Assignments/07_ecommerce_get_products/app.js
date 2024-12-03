// Import the 'express' module to create the server
const express = require('express');
const app = express(); // Initialize an Express application
const cros = require('cros');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the CORS middleware
app.use(cros());

// Import the 'fs' module to read files
const fs = require('fs');


// Read the products data synchronously from a JSON file
// This is a blocking operation to ensure the file is ready before the server starts
const products = JSON.parse(fs.readFileSync('./data/products.json'));

// Log the products data to the console (for debugging purposes)
console.log(products);

// Define a GET endpoint for '/api/v1/products'
// This endpoint sends the products data to the client in JSON format
app.get('/api/v1/products', (req, res) => {
    res.status(200).json({ // Respond with HTTP status 200 (OK)
        status: "success", // Indicate the request was successful
        message: 'successfully fetched', // Provide a success message
        data: {
            products // Include the products data in the response
        }
    });
});

// Export the app to be used in other files (e.g., for server setup or testing)
module.exports = app;
