const express = require('express'); // Importing Express framework
const app = express(); // Creating an Express application instance
const router = require('./routes/productRoutes'); // Importing product routes
const userRouter = require('./routes/userRoutes')

// Middleware to parse JSON request bodies
app.use(express.json());

// Mounting the product routes under the "/api/v1/newproduct" endpoint
app.use('/api/v1/newproduct', router);

//Mouting the user routes under the "api/v1/user" endpoint
app.use('/api/v1/user',userRouter)

// Exporting the Express app for use in other parts of the application
module.exports = app;
