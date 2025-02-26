const express = require("express"); // Importing Express framework
const router = express.Router(); // Creating an Express router instance
const isLoggedIn = require('../middlewares/isLoggedIn'); // Middleware to check if the user is logged in

// Importing product controller functions
const {
  createProducts,
  retrieveProductsById,
  updateProductsById,
  deleteProductsById,
  getAllProduct,
} = require("../controllers/productController");

// Route to create a new product (POST request)
router.post("/", createProducts); // Allows users to add a new product

// Route to retrieve a single product by its ID (GET request)
router.get("/:id", retrieveProductsById); // Fetches details of a product using its ID

// Route to update a product by its ID (PATCH request) - Requires user to be logged in
router.patch("/:id", isLoggedIn, updateProductsById); // Updates a specific product if the user is authenticated

// Route to delete a product by its ID (DELETE request) - Requires user to be logged in
router.delete("/:id", isLoggedIn, deleteProductsById); // Deletes a specific product if the user is authenticated

// Route to retrieve all products (GET request)
router.get("/", getAllProduct); // Fetches a list of all available products

// Exporting the router to be used in other parts of the application
module.exports = router; // Allows this router to be imported and used in the main app file
