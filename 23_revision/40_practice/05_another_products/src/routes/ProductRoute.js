const express = require('express');
const router = express.Router();
const {createProducts,deleteProudct} = require('../controllers/productController');


router.post('/',createProducts)
router.delete('/:id',deleteProudct)


module.exports = router;