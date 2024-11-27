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

module.exports = app;
