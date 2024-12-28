const express = require("express");
const app = express();
const productRoute = require('./routes/productRoutes')
const userRoutes = require("./routes/userRoutes");
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use('/api/v1/product',productRoute)
app.use("/api/v1/user", userRoutes);

module.exports = app;
