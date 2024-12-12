const express = require("express");
const app = express();
app.use(express.json());

const fs = require("fs");

const products = JSON.parse(fs.readFileSync("./data/products.json"));

app.get("/api/v1/num", (req, res) => {
  let num = Number(req.body.num);
  res.status(200).json({
    status: "Success",
    message: num + 1,
  });
});

//reading the data from the file
app.get("/api/v1/products", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "product fetched successfully",
    data: {
      products: products,
    },
  });
});

app.get("/api/v1/products/:name/:price", (req, res) => {
  const name = req.params.name;
  const price = Number(req.params.price);

  const product = products.find(
    (product) => product.name == name && product.price == price
  );

  if (!product) {
    return res.status(404).json({
      status: "failed",
      message: "product not found",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: "product fetched successfully",
      data: {
        product: product,
      },
    });
  }
});

module.exports = app;
