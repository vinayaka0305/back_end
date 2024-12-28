const jwt = require('jsonwebtoken')

const isLoggedIn =(req,res,next)=>{
    try {
        let token = req.headers.authorization;
        const decodeToken = jwt.verify(token,"vinayaka_av_sec")
        console.log(decodeToken);
        next()
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"token failed, pls login again"
        })
    }
}

module.exports = isLoggedIn;


// const isLoggedIn =(req,res,next)=>{
//     console.log('middleware')
//     console.log(req.headers.authorization);

//     if (!req.headers.authorization) {
//         return res.status(401).json({
//             status: "Failed",
//             message: "Authorization header missing",
//         });
//     }

//     const token = req.headers.authorization;
//     if (token === "avv") { // Replace this with secure token validation
//         next();
//     } else {
//         res.status(401).json({
//             status: "Failed",
//             message: "Authentication failed",
//         });
//     }
// }
