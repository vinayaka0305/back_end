const mongoose = require("mongoose");

//write your schema here with name of userSchema

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,require:true},
    role:{type:String,enum:["buyer","Seller"]}
})



module.exports = mongoose.model('users',userSchema);