const express = require('express');
const app = express();
app.use(express.json());

app.use((req,res,next)=>{
   if(req.body.num1 && req.body.num2){
    next();
   }else{
    res.status(400).send({error:"number is not found"})
   }
   
})
app.use((req,res,next)=>{
    if(typeof req.body.num1 == 'number' && typeof req.body.num2 == 'number'){
        next();
    }else{
        res.status(400).send({error:'number is not valid'})
    }
})

app.post('/add',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1 + num2;
    res.send({result});
})

module.exports = app;