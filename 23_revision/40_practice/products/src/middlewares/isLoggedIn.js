const jwt = require("jsonwebtoken"); // Importing JSON Web Token (JWT) library

// Middleware function to check if the user is logged in
const isLoggedIn = async (req, res, next) => {
  try {
    // Retrieving the token from request headers
    let token = req.headers.authorization;

    // Verifying the token using a secret key
    const decodeToken = jwt.verify(token, "vinayaka_av");

    // If token is valid, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If token verification fails, send an unauthorized response
    res.status(401).json({
      status: "Failed",
      message: "Token failed, please log in again",
    });
  }
};

// Exporting the middleware to be used in protected routes
module.exports = isLoggedIn;
