const express = require('express'); // Importing the Express framework
const app = express(); // Initializing an Express application instance
const userRouter = require('./routes/userRouter'); // Importing the user router for handling user-related routes

// Middleware to parse incoming JSON requests
app.use(express.json());
// Ensures that the request body is parsed as JSON for all incoming requests

// Mounting the userRouter under the `/api/v1/blog` path
app.use('/api/v1/blog', userRouter);
// All routes defined in `userRouter` will now be prefixed with `/api/v1/blog`
// Example: `/api/v1/blog/register`, `/api/v1/blog/login`

// Exporting the Express app for use in the main server file
module.exports = app;
