const jwt = require('jsonwebtoken'); // Importing JWT for token verification

// Middleware function to check if the user is logged in
const isLoggedIn = (req, res, next) => {
  try {
    // Extracting the token from the Authorization header
    let token = req.headers.authorization;

    // Logging the token to check its presence
    // console.log(token);

    // Verifying the token using the secret key
    const decodeToken = jwt.verify(token, "vinayaka_avv_sec");

    // Logging the decoded token for debugging purposes
    // console.log(decodeToken);
    req.id = decodeToken.id,
    req.created = decodeToken.name
    // Proceeding to the next middleware or route handler if the token is valid
    next();
  } catch (error) {
    // Handling errors if the token is invalid or missing
    res.status(401).json({
      status: "Failed", // Indicating failure in the status field
      message: error.message, // Sending the error message to the client
    });
  }
};

// Exporting the middleware for use in other parts of the application
module.exports = isLoggedIn;
