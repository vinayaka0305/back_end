const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send('<h1>hello vinayaka</h2>')
})


module.exports = app;