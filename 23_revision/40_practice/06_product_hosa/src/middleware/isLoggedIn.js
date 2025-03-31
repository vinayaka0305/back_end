const jwt = require('jsonwebtoken');

const isLoggedIn = (req,res,next)=>{
    try {
        const token= req.headers.authorization
         jwt.verify(token,"vinay");
         next();
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"token failed, pls login again"
        })
    }
}

module.exports = isLoggedIn