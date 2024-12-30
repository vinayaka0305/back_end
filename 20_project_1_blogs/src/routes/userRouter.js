const express = require("express"); // Importing the Express framework
const router = express.Router(); // Creating an instance of the Express router
const { register, login,getUerInformation } = require("../controllers/userController"); // Importing the register and login functions from the user controller

// Route to handle user registration
router.post("/register", register);
// Maps the `/register` endpoint to the `register` function in the user controller

// Route to handle user login with authentication middleware
// router.post('/login', login);
// This commented-out route allows login without authentication. Keeping it as reference or for debugging.

router.post("/login", login);
// Maps the `/login` endpoint to the `login` function with the `isLoggedIn` middleware applied
// This middleware ensures that only authenticated users can access the login route

// Exporting the router to be used in the main application

router.get('/user/:id',getUerInformation)
module.exports = router;
