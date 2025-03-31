const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/", isLoggedIn, createProduct);

module.exports = router;
