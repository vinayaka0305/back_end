const express = require('express');
const app = express();
const fs = require('fs')
app.use(express.json());

app.get('',(req,res)=>{
    res.json({
        status:200,
        message:"express get method"
    })
})

const products = JSON.parse(fs.readFileSync('./data/products.json'))

app.get('/api/v1/products',(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"file readed",
        data:{
            products
        }
    })
})


app.get('/api/v1/products/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const product = products.find((product)=>product.id === id)
    if(!product){
        res.status(404).json({
            status:"failed",
            message:"product not found"
        })
    }else{
        res.status(200).json({
            status:"success",
            message:"product found",
            data:{
                product
            }
        })
    }
   
})


app.post('/api/v1/products',(req,res)=>{
    const id = products[products.length-1].id + 1
    const{name,price,quantity} = req.body
    const newProduct = {id,name,price,quantity}
    products.push(newProduct);


    fs.writeFile('./data/products.json',JSON.stringify(products),()=>{
        res.status(201).json({
            status:"success",
            message:"posted successfully",
            data:{
                newProduct
            }
        })
    })
})  

module.exports = app;