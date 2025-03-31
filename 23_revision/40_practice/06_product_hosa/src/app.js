const express = require("express");
const app = express();
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRouter");

app.use(express.json());

app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
