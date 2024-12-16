const express = require('express');
const app = express();
const weatherRoutes = require('../src/routes/weatherRoutes')

app.use('/api/v1/weather',weatherRoutes)

module.exports = app;