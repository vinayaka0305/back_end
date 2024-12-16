const express = require("express");
const app = express();
const weatherRoute = require("./Routes/weatherRoutes");
const userRoute = require('./Routes/userRoutes');

app.use("/api/v1/weather", weatherRoute);
app.use('/api/v1/users',userRoute);

module.exports = app;
