const mongoose = require("mongoose"); // Importing Mongoose library

// Defining the schema for the product collection
const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product name (required field)
  price: { type: Number, required: true }, // Product price (required field)
});

// Exporting the model to use it in other parts of the application
module.exports = mongoose.model("myproduct", productSchema);
