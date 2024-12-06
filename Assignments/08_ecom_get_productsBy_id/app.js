const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const products = JSON.parse(fs.readFileSync("./data/products.json"));

// console.log(products);
app.get("/api/v1/products", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "successfully fetched",
    data: {
      products,
    },
  });
});

app.get("/api/v1/products/:id", (req, res) => {
    const id = parseInt(req.params.id)
  const product = products.find((product) => {
    // console.log(typeof product.id);
    // console.log(typeof req.params.id);
    return product.id == id;
  });
//   console.log(product);
  if (!product) {
    res.status(404).json({
      status: "failed",
      message:"Product not found"
    });
  } else {
    res.status(200).json({
      status: "succeess",
      message: "Product fetched successfully",
      data: {
        product,
      },
    });
  }
});

module.exports = app;
