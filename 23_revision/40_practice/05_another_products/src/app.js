const express = require("express");
const app = express();
const productRouter = require("./routes/ProductRoute");

app.use(express.json());

app.use("/api/v1/products", productRouter);

module.exports = app;
