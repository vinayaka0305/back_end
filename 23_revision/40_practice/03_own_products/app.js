const express = require('express');
const app = express();
const router = require('./src/routes/productRoute');

app.use(express.json());

app.use('/api/v1/product',router)

module.exports = app;