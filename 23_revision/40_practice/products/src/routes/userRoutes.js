const express = require('express'); // Importing Express framework
const router = express.Router(); // Creating an Express router instance

// Importing user controller functions for authentication
const { register, login } = require('../controllers/userControllers');

// Route to register a new user (POST request)
router.post('/register', register); // Handles user registration

// Route to log in an existing user (POST request)
router.post('/login', login); // Handles user authentication

// Exporting the router to be used in other parts of the application
module.exports = router; // Allows this router to be imported and used in the main app file
