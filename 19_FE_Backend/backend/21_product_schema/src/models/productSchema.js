const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: { type: String },
  price: { type: String },
});

//newProduct is the data base collection name
module.exports = mongoose.model("newProduct", productsSchema);
