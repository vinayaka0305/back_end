const productSchema = require("../modules/productSchema");

//create
const createProducts = async (data) => {
  try {
    const productData = await new productSchema({
      name: data.name,
      price: data.price,
    });
    const result = await productData.save();
    return result;
  } catch (error) {
    throw error;
  }
};

//retire by id

const retrieveProduct = async (id) => {
  try {
    const result = await productSchema.findById(id);
    return result;
  } catch (error) {
    throw error;
  }
};

//update by id

const updateProduct = async (id, data) => {
  try {
    const result = await productSchema.findByIdAndUpdate(id, data, {
      new: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

//delete

const deletProduct = async (id) => {
  try {
    const data = await productSchema.findByIdAndDelete(id);
    return data;
  } catch (error) {
    throw error;
  }
};

const reterAll = async () => {
  try {
    const data = await productSchema.find();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createProducts,
  retrieveProduct,
  updateProduct,
  deletProduct,
  reterAll,
};
