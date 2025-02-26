const mongoose = require("mongoose"); // Importing Mongoose for MongoDB interaction

// Defining the schema for the User model
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Username must be unique and required
  email: { type: String, required: true, unique: true }, // Email must be unique and required
  password: { type: String, required: true }, // Password must be required
});

// Exporting the User model to be used in other parts of the application
module.exports = mongoose.model("user", userSchema);
