const express = require("express");
const app = express();
app.use(express.json());

const fs = require("fs");

const products = JSON.parse(fs.readFileSync("./data/products.json"));

app.get("/api/v1/num", (req, res) => {
  let num = Number(req.body.num);
 return res.status(200).json({
    status: "Success",
    message: num + 1,
  });
});

//reading the data from the file
app.get("/api/v1/products", (req, res) => {
 return res.status(200).json({
    status: "success",
    message: "product fetched successfully",
    data: {
      products: products,
    },
  });
});

app.get("/api/v1/products/:name/:price", (req, res) => {
  const name = req.params.name;
  const price = Number(req.params.price);

  const product = products.find(
    (product) => product.name == name && product.price == price
  );

  if (!product) {
    return res.status(404).json({
      status: "failed",
      message: "product not found",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: "product fetched successfully",
      data: {
        product: product,
      },
    });
  }
});

app.post("/api/v1/products", (req, res) => {
  const id = products[products.length - 1].id + 1;

  console.log(id);
  const { name, price, quantity } = req.body;

  const newProduct = { id, name, price, quantity };

  products.push(newProduct);

  console.log(newProduct);

  fs.writeFile("./data/products.json", JSON.stringify(products), () => {
    return res.status(201).json({
      statuse: "success",
      message: "product posted",
      data:{
        product : newProduct
      }
    });
  });
});

app.get('/api/v1/products/:id',(req,res)=>{
  const id = Number(req.params.id);

  const product = products.find((product)=>product.id === id);

  if(!product){
    res.status(404).json({
      status:"failed",
      message:"product not found",
    })
  }else{
    res.status(200).json({
      status:"success",
      message:"product found",
      data:{
        name:product
      }
    })
  }
})

module.exports = app;
