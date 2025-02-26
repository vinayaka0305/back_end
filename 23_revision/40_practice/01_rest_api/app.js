const express = require('express'); // Importing Express.js framework
const app = express(); // Creating an Express application
const fs = require('fs'); // Importing File System module to handle file operations

app.use(express.json()); // Middleware to parse JSON request bodies

// Reading products data from JSON file and parsing it into a JavaScript object
const products = JSON.parse(fs.readFileSync('./data/product.json'));

// Route to fetch all products
app.get('/api/v1/products', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "file read successfully",
        data: {
            products // Sending the product data as response
        }
    });
});

// Route to add a new product
app.post('/api/v1/products', (req, res) => {
    const id = products[products.length - 1].id + 1; // Generating new product ID
    const { name, price, quantity } = req.body; // Extracting product details from request body
    const newProduct = { id, name, price, quantity }; // Creating new product object
    products.push(newProduct); // Adding new product to the array

    // Writing updated product data back to the JSON file
    fs.writeFile('./data/product.json', JSON.stringify(products), () => {
        res.status(201).json({
            status: "success",
            message: "Product added successfully",
            data: {
                newProduct // Sending the newly added product as response
            }
        });
    });
});

// Route to get a single product by its ID
app.get('/api/v1/products/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extracting the product ID from the request parameters and converting it to an integer
    const product = products.find((p) => p.id === id); // Searching for the product in the products array

    // If product is not found, return a 404 error response
    if (!product) {
        res.status(404).json({
            status: "Failed",
            message: "Product not found"
        });
    } else {
        // If product is found, return the product details
        res.status(200).json({ // Changed status code to 200 (OK) instead of 201 (Created)
            status: "success",
            message: "Product found",
            data: {
                product
            }
        });
    }
});


module.exports = app; // Exporting the app module for use in other files
