// Import the Express framework to create a server application
const express = require('express');

// Initialize an instance of the Express application
const app = express();

// Import the userRoutes module to handle routes related to user functionality
const userRoutes = require('./routes/userRoutes');

// Use the express.json() middleware to parse incoming JSON requests
app.use(express.json());

// Set up a route handler for user-related requests, prefixing all routes with '/api/v1/users'
app.use('/api/v1/users', userRoutes);

// Export the app module to be used in other files (e.g., for starting the server)
module.exports = app;
