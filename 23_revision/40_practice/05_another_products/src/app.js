const express = require("express");
const app = express();
const productRouter = require("./routes/ProductRoute");
const userRouter = require('./routes/userRouter')

app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/products", userRouter);

module.exports = app;
