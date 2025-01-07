const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');

app.use(express.json());

app.use('/api/v1/tour',tourRouter)

module.exports = app;