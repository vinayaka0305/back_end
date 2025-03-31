const express = require("express");
const router = express.Router();
const {
  createProducts,
  deleteProudct,
} = require("../controllers/productController");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/", createProducts);
router.delete("/:id", isLoggedIn, deleteProudct);

module.exports = router;
