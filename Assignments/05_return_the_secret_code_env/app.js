// Import the Express library to create and manage the server
const express = require('express');
// Create an instance of an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Function to encrypt a string using a simple Caesar cipher (rotating by 13 positions)
function encryptString(str) {
    let encrypted = ''; // Initialize an empty string to store the encrypted result
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i); // Get the Unicode value of the character at index 'i'
        let encryptedCharCode = (charCode + 13) % 256; // Shift the character code by 13, wrapping within a byte range (0-255)
        encrypted += String.fromCharCode(encryptedCharCode); // Convert the shifted code back to a character and append to the result
    }
    return encrypted; // Return the encrypted string
}

// Define a route to handle GET requests at the path '/api/get-env'
app.get('/api/get-env', (req, res) => {
    // Check if the environment variable 'CODE' is defined
    if (!process.env.CODE) {
        // Respond with an error if the environment variable is not set
        return res.status(500).json({ error: 'Environment variable CODE is not set' });
    }

    // Respond with a JSON object containing the encrypted value of the environment variable 'CODE'
    res.status(200).json({
        screct: encryptString(process.env.CODE) // Encrypt and send the 'CODE' variable
    });
});

// Export the app instance for use in other files (e.g., to start the server in a separate file)
module.exports = app;
