const productSchema = require('../models/productSchema');

const createProducts = async(req,res)=>{
    try {
        const data = await new productSchema({
            name:req.body.name,
            price:req.body.price
        })
        const result = await data.save();
        if(!result){
            res.status(404).json({
                status:"failed",
                error:error.message
            })
        }else{
            res.status(200).json({
                status:"success",
                message:"created the product",
                result
            })
        }
    } catch (error) {
        res.status(500).json({
            status:"failed",
            error:error.message
        })
    }
}
const deleteProudct = async(req,res)=>{
    try {
        const result = await productSchema.findByIdAndDelete(req.params.id);
        if(!result){
            res.status(404).json({
                status:"failed",
                error:error.message
            })
        }else{
            res.status(200).json({
                status:"success",
                message:"deleted successful",
            })
        }
    } catch (error) {
        res.status(500).json({
            status:"failed",
            error:error.message
        })
    }
}

module.exports = {createProducts,deleteProudct};