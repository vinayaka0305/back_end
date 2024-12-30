const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user:{type:String},
  created:{type:String},
  comments:{type:Array}
});

module.exports = mongoose.model("blogs", blogsSchema);
