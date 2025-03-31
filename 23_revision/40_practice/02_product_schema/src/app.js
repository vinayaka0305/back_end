const express = require("express");
const app = express();
const productRoute = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());

app.use("/api/v1/product", productRoute);
app.use("/api/v1/product", userRouter);

module.exports = app;
