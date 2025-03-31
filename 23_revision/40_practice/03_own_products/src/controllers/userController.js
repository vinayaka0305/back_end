const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const register = async(req,res)=>{
    try {
        const password = req.body.password
        const hashedPassword = await bcrypt.hash(password,10);
        const data = new userSchema({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword
        })

        const result = await data.save();
        res.status(201).json({
            status:"success",
            message:"user created",
            result
        })
    } catch (error) {
        res.status(500).json({
            status:"success",
            error:error.message
        })
    }
}


const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            res.status(404).json({
                status:"failed",
                message:"required email or password"
            })
        }else{
            const user = await userSchema.findOne({email:email});
            if(!user){
                res.status(404).json({
                    status:"failed",
                    message:"required email"
                })
            }
            const passwordResult = bcrypt.compareSync(password,user.password);
            if(user && !passwordResult){
                res.status(404).json({
                    status:"success",
                    message:"incorrect password"
                })
            }
            const token = jwt.sign({id:user._id,name:user.name},"vinu",{
                expiresIn:"1hr"
            })
            res.status(200).json({
                status:"success",
                message:"login success",
                token:token
            })
            
        }
    } catch (error) {
        res.status(500).json({
            status:"failed",
            error:error.message
        })
    }
    
}


module.exports = {register,login}