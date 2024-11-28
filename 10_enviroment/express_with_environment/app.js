const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log(process.env.TOKEN)
    res.send("hii")
//    res.send({number:process.env.TOKEN})
  
})

module.exports = app;