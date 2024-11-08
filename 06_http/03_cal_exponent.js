const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.method == 'POST'){
        req.on('data',(chunks)=>{
            const responseData = Buffer.from(chunks);
            const result = responseData.toString();
            const obj = JSON.parse(result);
            console.log(obj);
           
            let num1 = obj.num1;
            let num2 = obj.num2;
            if(num1<=0){
                res.writeHead(404,{'Content-Type':'text/plain'})

                res.end('The operation cannot be performed')
            }else{
                let output = Math.pow(num1,num2);

                res.writeHead(200,{'Content-Type':'text/plain'})

                res.end(`The result is ${output}`)
                
            }
        })
       
    }
})


server.listen(8055)