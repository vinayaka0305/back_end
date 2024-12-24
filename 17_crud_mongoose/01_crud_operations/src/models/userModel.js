// Import the mongoose library to define schemas and interact with the MongoDB database
const mongoose = require("mongoose");

// Define a schema for the user collection
// A schema acts as a blueprint for the structure of documents in a collection
const userSchema = mongoose.Schema({
  name: { type: String, required: true }, // Define a 'name' field of type String, which is mandatory
  email: { type: String, required: true }, // Define an 'email' field of type String, which is also mandatory
});

// Create and export a Mongoose model based on the userSchema
// The model represents a MongoDB collection named 'User' (pluralized as 'users' by Mongoose)
// A single database can have multiple collections, each for different data sets
module.exports = mongoose.model("User", userSchema);
