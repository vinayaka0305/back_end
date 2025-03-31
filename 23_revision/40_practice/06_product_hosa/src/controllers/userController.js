const userSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = await new userSchema({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await data.save();
      res.status(200).json({
        status: "success",
        message: "user created",
        result,
      });
    
  } catch (error) {
    res.status(500).json({
      status: "failed",
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
        message: "require email or password",
      });
    } else {
      const user = await userSchema.findOne({ email: email });
      if (!user) {
        res.status(404).json({
          status: "failed",
          message: "require email",
        });
      }
      const passwordResult = bcrypt.compare(password, user.password);
      if (user && !passwordResult) {
        res.status(404).json({
          status: "failed",
          message: "password incorrect",
        });
      }
      const token = jwt.sign({ id: user._id, name: user.name }, "vinay", {
        expiresIn: "1hr",
      });
      res.status(200).json({
        status: "success",
        message: "login succesful",
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failure",
      error: error.message,
    });
  }
};

module.exports = { register, login };
