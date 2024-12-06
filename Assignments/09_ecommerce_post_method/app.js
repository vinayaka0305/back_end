const express = require("express"); // Importing the Express framework.
const app = express(); // Creating an instance of an Express application.
const fs = require("fs"); // Importing the File System module for file operations.

// Middleware to parse incoming JSON data from the frontend into JavaScript objects.
app.use(express.json());

// Reading the products data from the JSON file and parsing it into a JavaScript object.
const products = JSON.parse(fs.readFileSync("./data/products.json"));

// Define a GET route to fetch all products.
app.get("/api/v1/products", (req, res) => {
  // Send a success response with status 200 (OK) and include all products.
  res.status(200).json({
    status: "success", // Status of the request.
    message: "successfully fetched", // Descriptive message.
    data: {
      products, // Data containing all products.
    },
  });
});

// Define a GET route to fetch a single product by its ID.
app.get("/api/v1/products/:id", (req, res) => {
  // Extract the ID from the URL and convert it to an integer.
  const id = parseInt(req.params.id);

  // Find the product in the products array that matches the given ID.
  const product = products.find((product) => {
    return product.id == id; // Use loose equality to compare ID types.
  });

  // If the product is not found, send a 404 (Not Found) response.
  if (!product) {
    res.status(404).json({
      status: "failed", // Indicate the failure.
      message: "Product not found", // Explain why it failed.
    });
  } else {
    // If the product is found, send a 200 (OK) response with the product data.
    res.status(200).json({
      status: "success", // Indicate the success.
      message: "Product fetched successfully", // Descriptive message.
      data: {
        product, // Data containing the requested product.
      },
    });
  }
});

// Define a POST route to create a new product.
app.post("/api/v1/products", (req, res) => {
  // Generate a new ID for the product by incrementing the last product's ID.
  const id = products[products.length - 1].id + 1;

  // Extract name, price, and stock from the request body.
  const { name, price, stock } = req.body;

  // Create a new product object with the generated ID and extracted data.
  const newProduct = { id, name, price, stock };

  console.log(newProduct); // Log the new product to the console for debugging.

  // Add the new product to the products array.
  products.push(newProduct);

  // Write the updated products array back to the JSON file.
  fs.writeFile("./data/products.json", JSON.stringify(products), () => {
    // Send a success response with status 201 (Created) and include the new product data.
    res.status(201).json({
      status: "success", // Indicate the success.
      message: "posted successfully", // Descriptive message.
      data: {
        newProduct, // Data containing the newly created product.
      },
    });
  });
});

// Export the app object so it can be used in other files (e.g., server.js).
module.exports = app;
