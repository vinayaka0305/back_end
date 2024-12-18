const express = require('express');
const app = express();
const weatherRouter = require('./routes/weatherRoutes')
app.use(express.json());


app.use('/api/v1/weather',weatherRouter)


module.exports = app;