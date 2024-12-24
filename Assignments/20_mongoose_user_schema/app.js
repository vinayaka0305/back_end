const mongoose = require("mongoose");
const User = require('./models/user');

const url = "mongodb://localhost:27017/users";
mongoose.connect(url).then(()=>{
    console.log('connected to DB')
}).catch((err)=>{
    console.log(err)
})


const createOperation = async()=>{
    try {
        const userPost = new User({
            name:"vinayaka_av",
            email:"vav6473@gmail.com",
            password:"user",
            role:"buyer"
        })
        const result = await userPost.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

createOperation();