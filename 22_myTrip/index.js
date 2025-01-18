const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.set("strictQuery",false);
dotenv.config();


//db connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`mongodb connected : ${process.env.MONGO_URI}`)
}).catch((error)=>{
    console.log(error);
    process.exit(1)
})

const port = process.env.PORT || 8088

const server = app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})


process.on("unhandledRejection",(error,promise)=>{
    console.log(`logged error: ${error}`);
    server.close(()=>process.exit(1))
})