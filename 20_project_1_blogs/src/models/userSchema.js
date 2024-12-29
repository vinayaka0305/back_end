const mongoose = require("mongoose"); // Importing Mongoose for working with MongoDB

// Defining a schema for blog users
const blogUserSchema = mongoose.Schema({
  name: {
    type: String, // The `name` field is a string
    required: true, // This field is mandatory
    minlength: 5, // Minimum length for the `name` is 5 characters
    maxlength: 12, // Maximum length for the `name` is 12 characters
    unique: true, // Ensures the `name` value is unique across all documents
  },
  email: { 
    type: String, // The `email` field is a string
    required: true, // This field is mandatory
    unique: true, // Ensures the `email` value is unique across all documents
  },
  password: { 
    type: String, // The `password` field is a string
    require: true, // This field is mandatory (note: `required` should be used instead of `require`)
    unique: true, // Ensures the `password` value is unique (though it's unusual for passwords to be unique; reconsider this)
  },
});

// Exporting the `blogUser` model based on the schema
module.exports = mongoose.model("blogUser", blogUserSchema);
