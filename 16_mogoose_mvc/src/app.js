const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoute')
const mongoose = require('mongoose');
const dontenv = require('dotenv');

dontenv.config();

const uri = process.env.URI
mongoose.connect(uri).then(()=>{
    console.log('connected to DB')
}).catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use('/api/v1/tours',tourRouter)

module.exports = app;