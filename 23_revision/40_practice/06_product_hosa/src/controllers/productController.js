const productSchema = require("../models/productSchema");


const createProduct = async(req,res)=>{
    try {
        const data = await productSchema({
            name:req.body.name,
            price:req.body.price,
        })
        const result = await data.save();
        res.status(201).json({
            status:"success",
            message:"product_created",
            result
        })
    } catch (error) {
        res.status(404).json({
            status:"success",
           error:error.message
        })
    }
}

module.exports = {createProduct}
