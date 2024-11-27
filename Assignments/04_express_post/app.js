const express = require("express");

const app = express();
//post receving the data in the backend

//middleware
//means any request that is come to the backend first it will go middle and run then only the other code will run
app.use(express.json())
//express.json() will parse the json data;

app.post("", (req, res) => {
    //req.body will help us to access the data from the front end;
    console.log(req.body);
  res.send("welcome to post method");
});

app.post('/add',(req,res)=>{
    // console.log(req.body);
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const result = num1 + num2;
    res.send({result:result})
})


app.post('/sub',(req,res)=>{
    const num1 = parseInt(req.body.num1)
    const num2 = parseInt(req.body.num2);
    const result = num1 - num2;
    res.send({result:result})
})


app.post('/mul',(req,res)=>{
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const result = num1 * num2;
    res.send({result:result});
})


app.post('/div',(req,res)=>{
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    if(num2 == 0){
        res.status(400).send('cannot divide by zero')
    }else{
        const result = num1/num2;
        res.send({result:result})
    }
  
})

module.exports = app;
