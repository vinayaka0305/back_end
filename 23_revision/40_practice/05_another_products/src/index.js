const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.URI).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
})


app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})

