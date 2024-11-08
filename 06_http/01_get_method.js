const http = require('http');

const server = http.createServer((req,res)=>{
    //req -> request(it is an object)
    //res -> response(it is an object)
    //req -> incoming data from the front end particularly in post method;
    //res -> sending data from backend

    //it consists of two sections header and body

    //header
    res.writeHead(202,{'Content-Type':'text/plain'});

    //body
    res.end('welcome to node.js http module');
})

server.listen(8055);