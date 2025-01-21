const jwt = require("jsonwebtoken");

const loggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const decodeToken = jwt.verify(token, "vinayaka");

    req.id = decodeToken.id;
    req.created = decodeToken.token;
    next();
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = loggedIn;
