// Import the Express framework to create a router instance
const express = require('express');

// Create a new router object to define user-related routes
const router = express.Router();

// Import the userController module, which contains logic for user-related operations
const userController = require('../controllers/userController');

// Define a route to handle POST requests for creating a new user
router.post('/', async (req, res) => {
    try {
        // Call the createUsers method from userController, passing the request body
        let data = await userController.createUsers(req.body);

        // Respond with a 201 status code (Created) and a success message
        res.status(201).json({
            status: "success",
            data
        });
    } catch (error) {
        // If an error occurs, respond with a 404 status code and the error message
        res.status(404).json({
            status: "failed",
            message: error.message
        });
    }
});

// Define a route to handle GET requests for retrieving all users
router.get('/', async (req, res) => {
    try {
        // Call the findUser method from userController to fetch all users
        const result = await userController.findUser();

        // Respond with a 200 status code (OK) and the retrieved user data
        res.status(200).json({
            status: "Success",
            result
        });
    } catch (error) {
        // If an error occurs, respond with a 404 status code and the error message
        res.status(404).json({
            status: "failed",
            message: error.message
        });
    }
});

// Export the router to be used in other modules (e.g., to handle user-related routes in the main application)
module.exports = router;
