const express = require('express');
const app = express();
const router = require('./src/routes/productRoute');
const userRouter = require('./src/routes/userRoutes')

app.use(express.json());

app.use('/api/v1/product',router)
app.use('/api/v1/product',userRouter)

module.exports = app;