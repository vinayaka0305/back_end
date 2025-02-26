const express = require('express');
const app = express();

const port = 3000;

const myMiddleWare = (req,res,next)=>{
    res.send('example')
    next();
}

app.use("/example",myMiddleWare);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
