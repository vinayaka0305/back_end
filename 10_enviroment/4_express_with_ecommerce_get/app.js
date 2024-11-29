const express = require("express");
const app = express();
const fs = require("fs");

const product = JSON.parse(fs.readFileSync("./data/products.json"));
console.log(product);

app.get("/api/v1/products", (req, res) => {
  // res.send({data:product})
  res.status(200).json({
    status: "success",
    message: "product fetched successfully",
    data: {
      products:product,
    },
  });
});

module.exports = app;

//represntation state transfer