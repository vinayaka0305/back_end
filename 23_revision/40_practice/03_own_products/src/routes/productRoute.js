const express = require("express");
const router = express.Router();
const {
  creatProduct,
  retrieveProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/productController");

const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/", creatProduct);
router.get("/:id", retrieveProduct);
router.get("/", getAllProducts);
router.patch("/:id", isLoggedIn, updateProduct);
router.delete("/:id", isLoggedIn, deleteProduct);

module.exports = router;
