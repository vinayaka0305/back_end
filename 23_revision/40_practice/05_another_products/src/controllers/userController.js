const userSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new userSchema({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const result = await user.save();
    res.status(200).json({
      status: "succes",
      message: "user created",
      result,
    });
  } catch (error) {
    res.status(404).json({
      status: "succes",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).json({
        status: "failed",
        message: "pls provide email or password",
      });
    }

    const user = await userSchema.findOne({ email: email });
    if (!user) {
      res.status(404).json({
        status: "failed",
        message: "email not found",
      });
    }

    const correctPassword = await bcrypt.compare(password,user.password);

    if (!correctPassword) {
      res.status(404).json({
        status: "failed",
        message: "wrong password",
      });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, "vinayak", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "login success",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { register, login };
