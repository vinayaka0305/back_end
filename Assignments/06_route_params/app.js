const express = require('express');

const app = express();
app.use(express.json());


app.get('/product/:producId',(req,res)=>{   
    const param = req.params.producId
    res.status(200).json({
        producId:param
    })
})

module.exports = app;