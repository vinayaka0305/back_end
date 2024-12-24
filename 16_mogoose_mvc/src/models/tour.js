const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model("tour", tourSchema);
