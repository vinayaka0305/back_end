// Import the UserSchema model, which defines the structure of the user data in the database
const UserSchema = require("../models/userModel");

// Function to create a new user and save it to the database
const createUsers = async (data) => {
  try {
    // Create a new instance of UserSchema with the provided data (name and email)
    const user = await new UserSchema({
      name: data.name,
      email: data.email,
    });

    // Save the user instance to the database and return the result
    // `save()` is a Mongoose method that persists data to the MongoDB collection
    const result = await user.save();

    // Return the saved user data
    return result;
  } catch (error) {
    // If an error occurs during the process, throw it to be handled by the caller
    throw error;
  }
};

// Function to retrieve all users from the database
const findUser = async () => {
  try {
    // Use the `find()` method from Mongoose to fetch all user documents from the collection
    let result = UserSchema.find();

    // Return the retrieved user data
    return result;
  } catch (error) {
    // If an error occurs during the process, throw it to be handled by the caller
    throw error;
  }
};

const findUserById = async (id) => {
  try {
    // console.log(id);
    let result = await UserSchema.findById(id);
    // console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteUserById = async(id)=>{
  try {
    const result = await UserSchema.findByIdAndDelete(id);
    return result
  } catch (error) {
    throw error
  }
}


const updateUserById = async(id,body)=>{
  try{

    const result = await UserSchema.findByIdAndUpdate(id,body,{
      new:true
    })
    return result
  }catch(err){
    throw err
  }
}

// Export the functions for use in other modules, such as route handlers
module.exports = {
  createUsers,
  findUser,
  findUserById,
  deleteUserById,
  updateUserById,
};
