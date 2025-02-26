const productSchema = require("../models/productSchema");

const creatProduct = async (req, res) => {
  try {
    const data = await new productSchema({
      name: req.body.name,
      price: req.body.price,
    });
    const result = await data.save();
    res.status(200).json({
      status: "success",
      message: "product created",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const retrieveProduct = async (req, res) => {
  try {
    const data = await productSchema.findById(req.params.id);
    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "product not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product found",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const data = await productSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "product not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product updated",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
const deleteProduct = async (req, res) => {
    try {
      const data = await productSchema.findByIdAndDelete(
        req.params.id,
      );
      if (!data) {
        res.status(404).json({
          status: "failed",
          message: "product not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  };

  const getAllProducts = async (req, res) => {
    try {
      const data = await productSchema.find();
      if (!data) {
        res.status(404).json({
          status: "failed",
          message: "data not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All products fetched",
          data
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  };

module.exports = { creatProduct, retrieveProduct,updateProduct,deleteProduct,getAllProducts };
