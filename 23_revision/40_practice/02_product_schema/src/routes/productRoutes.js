const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController");
const isLoggedIn = require("../middlewares/isLoggedIn");

//create route post
route.post("/", async (req, res) => {
  try {
    const data = await productController.createProducts(req.body);
    res.status(200).json({
      status: "success",
      message: "product created",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
});

//get product by id

route.get("/:id", async (req, res) => {
  try {
    const data = await productController.retrieveProduct(req.params.id);
    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "product not found  ",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product fetched",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

//update
route.patch("/:id", isLoggedIn, async (req, res) => {
  try {
    const data = await productController.updateProduct(req.params.id, req.body);
    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "product not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        messgae: "updated successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "internal server error",
    });
  }
});

//detele

route.delete("/:id", async (req, res) => {
  try {
    const data = await productController.deletProduct(req.params.id);
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
      status: "failed",
      message: "internal server error",
    });
  }
});

//retrieve all;

route.get("/", async (req, res) => {
  try {
    const data = await productController.reterAll();
    if (!data) {
      res.status(404).json({
        status: "failed",
        messagae: "Products not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        messagae: "fetched all products by me",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "internal server error",
    });
  }
});

module.exports = route;
