const userSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const creationOfUsers = async (req, res) => {
  try {
    const user = await new userSchema({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const result = await user.save();
    res.status(201).json({
      status: "success",
      message: "product Created",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "internal serval error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        status: "failed",
        message: "pls provide email and password",
      });
    } else {
      const user = await userSchema.findOne({ email: email });
      //   console.log(user);
      if (!user) {
        return res.status(404).json({
          status: "failed",
          message: "email is not found",
        });
      }
      if (user && user.password != password) {
        return res.status(404).json({
          status: "failed",
          message: "wrong password ",
        });
      }
      const token = jwt.sign({ payload: user }, "vinayaka_av_sec", {
        expiresIn: "1m",
      });
      res.status(200).json({
        status: "login success",
        token: token,
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "failed",
      message: "internal serval error"
    });
  }
};

module.exports = { creationOfUsers, login };
