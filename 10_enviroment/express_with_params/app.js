const express = require('express');
const app = express();

app.get('/product/:productId',(req,res)=>{
    
    console.log(req.params.productId)
    res.send(`the given product id is ${req.params.productId}`)
    // res.send({productId:req.params.productId})
})

module.exports = app;