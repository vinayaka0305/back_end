const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.method == 'POST'){
        req.on('data',(chunks)=>{

            const responseData = Buffer.from(chunks);
            const result = responseData.toString();
            const obj = JSON.parse(result);
            console.log(obj);
            let n = obj.num;

            if(n % 2 === 0){

                res.writeHead(200,{'Content-Type':"text/plain"});

                res.end(`The number ${n} is even`)

            }else{
                res.writeHead(404,{'Content-Type':"text/plain"});

                res.end(`The number ${n} is odd`)
            }
        })
    }
})

server.listen(8055);