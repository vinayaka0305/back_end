const userSchema = require("../models/userSchema"); // Importing the User model
const bcrypt = require("bcrypt"); // Importing bcrypt for password hashing
const jwt = require("jsonwebtoken"); // Importing JWT for authentication

// User Registration Function
const register = async (req, res) => {
  try {
    // Hashing the password asynchronously before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Creating a new user instance with the provided data
    const user = new userSchema({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword, // Storing the hashed password
    });

    // Saving the user to the database
    const result = await user.save();

    // Sending a success response
    res.status(201).json({
      status: "success",
      message: "User is created",
      result,
    });
  } catch (error) {
    // Handling errors and sending a failure response
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

// User Login Function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if both email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "Please provide email and password",
      });
    }

    // Finding the user by email in the database
    const user = await userSchema.findOne({ email: email });

    // If user is not found, return an error
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "Email not found",
      });
    }

    // Comparing the provided password with the hashed password in the database
    const passwordResult = await bcrypt.compare(password, user.password);

    // If password does not match, return an error
    if (!passwordResult) {
      return res.status(401).json({
        status: "failed",
        message: "Wrong password",
      });
    }

    // Generating a JWT token for authentication (storing only necessary user info)
    const token = jwt.sign({ id: user._id, email: user.email }, "vinayaka_av", {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Sending a success response with the token
    res.status(200).json({
      status: "login success",
      token: token,
    });
  } catch (error) {
    // Handling errors and sending a failure response
    res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};

// Exporting the functions to be used in other parts of the application
module.exports = { register, login };
