const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.URI).then(()=>{
    console.log('connect to db');
}).catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT,()=>{
    console.log(`server is runnig on ${process.env.PORT}`)
})