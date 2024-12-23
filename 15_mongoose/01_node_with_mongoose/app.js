// Importing Mongoose to manage database connection and operations
const mongoose = require('mongoose');

// Importing the Employee model (schema definition for the "employee" collection)
const Employee = require('./models/employee');

// Setting up the connection to the MongoDB database using Mongoose
mongoose.connect('mongodb://localhost:27017/mongooseManagement')
  .then(() => {
    console.log('Database is connected'); // Success message when connection is established
  })
  .catch((err) => {
    console.log(err); // Error message if the connection fails
  });

// Function to perform a create operation using the Employee model
const createOperation = async () => {
  try {
    // Creating a new employee document using the Employee model
    const employeePost = new Employee({
      firstName: "Vinayaka", // Setting the first name (required field)
      age: 28,              // Setting the age (required field)
      salary: 40000         // Setting the salary (required field)
      // Note: `lastName` and `status` are optional and will use default values if not provided
    });

    // Saving the employee document to the database
    const result = await employeePost.save();

    // Logging the saved document to the console
    console.log(result);
  } catch (error) {
    // Catching and logging any errors that occur during the operation
    console.log(error);
  }
};

// Calling the createOperation function to execute the create operation
createOperation();
