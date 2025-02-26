const productSchema = require("../models/productSchema"); // Importing the product schema

// Function to create a new product
const createProducts = async (req, res) => {
  try {
    // Creating a new product instance with request body data
    const data = await productSchema({
      name: req.body.name,
      price: req.body.price,
    });

    // Saving the product to the database
    const result = await data.save();
    
    res.status(200).json({
      status: "success",
      message: "product created",
      result,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      error: error.message, // Fixed "throw" to "error"
    });
  }
};

// Function to retrieve a product by its ID
const retrieveProductsById = async (req, res) => {
  try {
    const result = await productSchema.findById(req.params.id); // Finding product by ID

    if (!result) {
      res.status(404).json({
        status: "failed",
        message: "product not found", // Fixed typo
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product found",
        result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message, // Fixed "throw" to "error"
    });
  }
};

// Function to update a product by its ID
const updateProductsById = async (req, res) => {
  try {
    const result = await productSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns the updated product
    );

    if (!result) {
      res.status(404).json({
        status: "failed",
        message: "product not found", // Fixed typo
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "updated the product",
        result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message, // Fixed "throw" to "error"
    });
  }
};

// Function to delete a product by its ID
const deleteProductsById = async (req, res) => {
  try {
    const result = await productSchema.findByIdAndDelete(req.params.id); // Deleting the product by ID

    if (!result) {
      res.status(404).json({
        status: "failed",
        message: "product not found", // Fixed typo
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message, // Fixed "throw" to "error"
    });
  }
};

// Function to retrieve all products
const getAllProduct = async (req, res) => {
  try {
    const result = await productSchema.find(); // Fetching all products

    res.status(200).json({
      status: "success",
      message: "fetched all products",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message, // Fixed "throw" to "error"
    });
  }
};

// Exporting all functions for use in other parts of the application
module.exports = {
  createProducts,
  retrieveProductsById,
  updateProductsById,
  deleteProductsById,
  getAllProduct,
};
