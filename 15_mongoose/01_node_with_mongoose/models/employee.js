// Importing Mongoose to define the schema and interact with MongoDB
const mongoose = require("mongoose");

// Defining the Employee schema
const employeeSchema = mongoose.Schema({
  // firstName: A mandatory field of type String to store the employee's first name
  firstName: { type: String, required: true },

  // lastName: An optional field of type String to store the employee's last name
  lastName: { type: String },

  // status: A Boolean field to indicate if the employee is active or inactive
  // - Required: true (must be provided)
  // - Default: false (if no value is provided, it will be set to false)
  status: { type: Boolean, required: true, default: false },

  // age: A mandatory field of type Number to store the employee's age
  age: { type: Number, required: true },

  // salary: A mandatory field of type Number to store the employee's salary
  salary: { type: Number, required: true },
  role:{type:String,enum:["admin","user",'superadmin']}
});

// Explanation of the schema:
// - This schema defines the structure of documents for the "employee" collection in MongoDB.
// - Each document (record) will have the fields specified in the schema.
// - Fields have specific data types and validation rules (e.g., required, default values).

// Exporting the model based on the schema
// - The first argument ("employee") is the name of the collection in MongoDB.
// - Mongoose automatically converts it to lowercase and plural form, so the actual collection name will be "employees".
module.exports = mongoose.model("employee", employeeSchema);
