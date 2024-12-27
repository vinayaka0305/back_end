const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  Quantity: { type: Number, required: true },
  Price: { type: Number, required: true },
  instock: { type: String, enum: ["Yes", "No"] },
  //here enum is what ever the fixed character we are going to give,it will take any one of that, if we pass anything apart from this it will not allow
});

module.exports = mongoose.model("products", productSchema);
