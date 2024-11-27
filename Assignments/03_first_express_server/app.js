const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('<h2>first server</h2>')
    //the express will convert the header content-type automatically to json
    //text/html;
})

app.get('/about',(req,res)=>{
    res.send('about page')
    //text/html;
})

app.get('/profile',(req,res)=>{
    res.send({
        name:"vinayaka",
        age:28
    })
    //the express will convert the header content-type automatically to json
    //application/json
})

module.exports = app;

//json is neutral data anyone can access the data;
// api is platform indepenet we can access it using java server,python server
