const app = require('./app'); // Importing the Express application from the app.js file
const dotenv = require('dotenv'); // Importing dotenv to manage environment variables
const mongoose = require('mongoose'); // Importing Mongoose to interact with MongoDB

// Configuring dotenv to load environment variables from a .env file
dotenv.config();

// Connecting to MongoDB using the URI specified in the environment variables
mongoose.connect(process.env.URI)
  .then(() => {
    console.log('Connected to DB'); // Log a success message when the database connection is successful
  })
  .catch((err) => {
    console.log(err); // Log an error message if the database connection fails
  });

// Starting the server and listening on the port specified in the environment variables
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); // Log a success message when the server starts
});
