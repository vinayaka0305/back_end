const app = require('./app'); // Importing the Express app instance
const mongoose = require('mongoose'); // Importing Mongoose for database connection
const dotenv = require('dotenv'); // Importing dotenv to manage environment variables

dotenv.config(); // Loading environment variables from .env file

// Connecting to MongoDB using the URI from environment variables
mongoose.connect(process.env.URI)
    .then(() => {
        console.log('Database connected successfully'); // Log message on successful connection
    })
    .catch((err) => {
        console.log('Database connection error:', err); // Log error if connection fails
    });

// Starting the Express server on the specified PORT from environment variables
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`); // Log message when server starts
});
