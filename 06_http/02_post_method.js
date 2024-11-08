const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.writeHead(202, { "Content-Type": "text/plain" });

    res.end("welcome to get method of http module");
  }

  if (req.method == "POST") {
    //from the postman or frontend we are sending the data in post method
    //to receive that data we have one on('data');

    req.on("data", (chunks) => {
      // console.log(chunks);
      const response = Buffer.from(chunks);
      // console.log(response);
      const result = response.toString();
      // console.log(result);
      const obj = JSON.parse(result);
      console.log(obj);
      if (obj.age >= 18) {
        res.writeHead(200, { "Content-Type": "text/plain" });

        res.end(
          "welcome to post method of http module,you are eligible to vote"
        );
      } else {
        res.writeHead(400, { Content: "text/plain" });

        res.end(
          "welcome to post method of http module, your not eligible to vote"
        );
      }
    });
  }
});

server.listen(8055);
