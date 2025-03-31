const jwt = require("jsonwebtoken");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, "vinu");
    next();
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};

module.exports = isLoggedIn;
