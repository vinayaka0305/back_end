const jwt = require('jsonwebtoken');

const isLoggedIn = async(req,res,next)=>{
    try {
        const token = req.headers.authorization
        const decode = await jwt.verify(token,"vinayak");
        next();

    } catch (error) {
        res.status(401).json({
            status:"failed",
            message:error.message
        })
    }
}


module.exports = isLoggedIn;