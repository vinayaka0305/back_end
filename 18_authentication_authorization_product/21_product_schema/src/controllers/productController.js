const Products = require("../models/product");
const ProductsSchema = require("../models/productSchema");

//this method is getting all the products
const getProducts = async (req, res) => {
  try {
    const result = await ProductsSchema.find();
    res.status(200).json({
      status: "success",
      message: "fetched successfully",
      result,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};

// this below method the product creation -> C
const creationProductUsers = async (req, res) => {
  try {
    const productData = await new ProductsSchema({
      name: req.body.name,
      price: req.body.price,
    });
    const result = await productData.save();
    res.status(201).json({
      status: "success",
      message: "product Created",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

//this below method the retrive the product by id -> R

const retriveProductById = async (req, res) => {
  try {
    const data = await ProductsSchema.findById(req.params.id);
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
      message: error.message,
    });
  }
};

//this below method the update the product by id and  bodydata -> U

const updateTheProductById = async (req, res) => {
  // console.log(id, data);
  try {
    const data = await ProductsSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!data) {
      res.status(404).json({
        status: "failed",
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
      message: error.message,
    });
  }
};

//this below method the delete the product by id -> D
const deleteProductById = async (req, res) => {
  try {
    const data = await ProductsSchema.findByIdAndDelete(req.params.id);
    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "product not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "product deleted successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  creationProductUsers,
  retriveProductById,
  updateTheProductById,
  deleteProductById,
  getProducts,
};
