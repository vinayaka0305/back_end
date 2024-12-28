import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios
      .get("http://localhost:8088/api/v1/product")
      .then((result) => {
        console.log(result.data.result);
        setData(result.data.result);
      })
      .catch((err) => {
        console.log(err);
       
      });
  };
  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
          <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
            {data.length > 0 &&
              data.map((product,index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
