const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController");

// route.post("/", async (req, res) => {
//   try {
//     const data = await productController.creationOfProduct(req.body);
//     res.status(201).json({
//       status: "success",
//       message:"product Created",
//       data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "failed",
//       message: error.message,
//     });
//   }
// });

// this below method the product creation -> C
route.post("/", async (req, res) => {
  try {
    const data = await productController.creationProductUsers(req.body);
    res.status(201).json({
      status: "success",
      message: "product Created",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
});

//this below method the retrive the product by id -> R

route.get("/:id", async (req, res) => {
  try {
    const data = await productController.retriveProductById(req.params.id);
    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "product not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product fetched successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

//this below method the update the product by id and bodydata -> U

route.patch("/:id", async (req, res) => {
  try {
    const data = await productController.updateTheProductById(
      req.params.id,
      req.body
    );
    if (!data) {
      res.status(404).json({
        status: "failied",
        message: "product not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product updated successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "interal server error",
    });
  }
});

//this below method the delete the product by id-> U

route.delete("/:id", async (req, res) => {
  try {
    const data = await productController.deleteProductById(req.params.id);
    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "product not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = route;
