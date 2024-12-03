// Import the app module (Express application instance) created in 'app.js'
const app = require('./app');

// Import the 'dotenv' package to manage environment variables
const dotenv = require('dotenv');

// Configure dotenv to load variables from a .env file into process.env
dotenv.config(); 

// Start the server on the port specified in the .env file
app.listen(process.env.PORT, () => {
    console.log('server is running'); // Log a message when the server starts successfully
});
