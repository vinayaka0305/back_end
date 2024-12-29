const UserSchema = require("../models/userSchema"); // Importing the User model/schema
const jwt = require('jsonwebtoken'); // Importing JWT for token generation
const bcrypt = require('bcrypt'); // Importing bcrypt for password hashing and comparison

// Register function to handle user registration
const register = async (req, res) => {
  try {
    // Hashing the user's password with a salt round of 10
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // Creating a new user document with the provided data
    const data = await new UserSchema({
      name: req.body.name, // Storing the user's name
      email: req.body.email, // Storing the user's email
      password: hashedPassword, // Storing the hashed password
    });

    // Saving the user document in the database
    const result = await data.save();

    // Sending a success response to the client
    res.status(201).json({
      status: "success",
      message: "User is created",
      result,
    });
  } catch (error) {
    // Handling errors and sending a failure response
    res.status(500).json({
      status: "failed", // Ensuring consistent status naming
      message: error.message, // Sending the error message
    });
  }
};

// Login function to handle user authentication
const login = async (req, res) => {
  try {
    // Extracting email and password from the request body
    const { email, password } = req.body;

    // Validating if email or password is missing
    if (!email || !password) {
      return res.status(404).json({
        status: "failed",
        message: "Please provide email or password", // Informing user about missing credentials
      });
    }

    // Finding the user in the database by email
    const user = await UserSchema.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "Email not found", // Informing user if email doesn't exist
      });
    }

    // Comparing the provided password with the stored hashed password
    const passwordBcrypt = bcrypt.compareSync(password, user.password);
    if (user && !passwordBcrypt) {
      return res.status(404).json({
        status: "failed",
        message: "Wrong password", // Informing user if password is incorrect
      });
    }

    // Generating a JWT token for authenticated users
    const token = jwt.sign({ payload: user }, "vinayaka_avv_sec", {
      expiresIn: "10m", // Setting token expiration time to 10 minutes
    });

    // Sending a success response with the token
    res.status(200).json({
      status: "login success",
      token: token, // Returning the generated token
    });
  } catch (error) {
    // Handling errors and sending a failure response
    res.status(500).json({
      status: "failed",
      error: error.message, // Sending the error message
    });
  }
};

// Exporting the register and login functions for use in other parts of the application
module.exports = { register, login };
