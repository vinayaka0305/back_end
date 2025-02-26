const express = require('express');
const router = express.Router();
const {creatProduct,retrieveProduct,updateProduct,deleteProduct,getAllProducts} = require('../controllers/productController');


router.post('/',creatProduct);
router.get('/:id',retrieveProduct)
router.get('/',getAllProducts)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)


module.exports = router;