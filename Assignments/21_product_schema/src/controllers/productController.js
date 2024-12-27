// const Products = require("../models/product");
const productSchema = require("../models/productSchema");
const ProductsSchema = require("../models/productSchema");

// const creationOfProduct = async (data) => {
//   try {
//     const productData = await new Products({
//       name: data.name,
//       Quantity: data.Quantity,
//       Price: data.Price,
//       instock: data.instock,
//     });
//     const result = await productData.save();
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// this below method the product creation -> C
const creationProductUsers = async (data) => {
  try {
    const productData = await new ProductsSchema({
      name: data.name,
      price: data.price,
    });
    const result = await productData.save();
    return result;
  } catch (error) {
    throw error;
  }
};

//this below method the retrive the product by id -> R

const retriveProductById = async (id) => {
  try {
    const result = await ProductsSchema.findById(id);
    return result;
  } catch (error) {
    throw error;
  }
};

//this below method the update the product by id and  bodydata -> U

const updateTheProductById = async(id,data)=>{
  console.log(id,data);
  try {
    const result = await productSchema.findByIdAndUpdate(id,data,{new:true})
    return result
  } catch (error) {
    throw error
  }
}

//this below method the delete the product by id -> D
const deleteProductById = async(id)=>{
  try {
    const data = await productSchema.findByIdAndDelete(id)
    return data;
  } catch (error) {
    throw error
  }
  

}

module.exports = { creationProductUsers, retriveProductById,updateTheProductById,deleteProductById};
