const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');


router.get("/",async(req,res)=>{
    try {
        const data = await tourController.getDataTourDetails();
        res.status(200).json({
            status:"Success",
            data
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:error.message
        })
    }
})

router.post('/',async(req,res)=>{
    try {
        const data = await tourController.createTourDetails(req.body);
        res.status(200).json({
            status:"Success",
            data
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message: error.message
        })
    }
})

module.exports = router;