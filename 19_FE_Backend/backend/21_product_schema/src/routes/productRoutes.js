const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn')
const {
  getProducts,
  creationProductUsers,
  retriveProductById,
  updateTheProductById,
  deleteProductById,
} = require("../controllers/productController");

//this method is getting all the products
router.get("/",isLoggedIn, getProducts);

// this below method the product creation -> C
router.post("/", creationProductUsers);

//this below method the retrive the product by id -> R
router.get("/:id", retriveProductById);

//this below method the update the product by id and bodydata -> U
router.patch("/:id", updateTheProductById);

//this below method the delete the product by id-> D
router.delete("/:id", deleteProductById);

module.exports = router;
