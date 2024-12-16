const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "login",
    data: [],
  });
});

router.post("/register", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "register",
    data: [],
  });
});

module.exports = router;
