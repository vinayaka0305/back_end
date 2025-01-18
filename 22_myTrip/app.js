const express = require('express');
const app = express();
const tripRouter = require('./routes/tripRoutes');
const errorHandler = require('./middlewares/error')

app.use(express.json());


app.use('/api/trips',tripRouter);

app.use('/',(req,res)=>{
    return res.json({
        message:"Welcome to Node.js Rest Api Using Express.js and MONGODB"
    })
})

app.use(errorHandler)

module.exports = app;