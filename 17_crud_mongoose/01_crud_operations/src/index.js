// Import the main application module, which is defined in a separate file named 'app'
const app = require('./app');

// Import the dotenv package to manage environment variables
const dotenv = require('dotenv');

// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Load environment variables from a .env file into process.env
dotenv.config();

// Connect to the MongoDB database using the URI provided in the environment variables
mongoose.connect(process.env.URI).then(() => {
    // Log a message if the database connection is successful
    console.log('Connected to the database');
}).catch((err) => {
    // Log an error message if the database connection fails
    console.log(err);
});

// Start the server and listen on the port specified in the environment variables
app.listen(process.env.PORT, () => {
    // Log a message indicating that the server is running and on which port
    console.log(`Server is running on port ${process.env.PORT}`);
});
