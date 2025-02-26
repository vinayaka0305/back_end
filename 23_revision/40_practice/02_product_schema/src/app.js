const express = require("express");
const app = express();
const productRoute = require("./routes/productRoutes");

app.use(express.json());

app.use("/api/v1/product", productRoute);

module.exports = app;
