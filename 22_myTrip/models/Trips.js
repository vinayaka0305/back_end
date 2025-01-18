const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  name: { type: String, required: [true, "city name required"] },
  duration: { type: String, required: [true, "duration required"] },
});

module.exports = mongoose.model("Trip", tripSchema);
