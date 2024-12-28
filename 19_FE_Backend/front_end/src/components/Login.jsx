import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    // const{name,value} = e.target;
    // setData((prev)=>({...prev,[name]:value}))
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    axios
      .post("http://localhost:8088/api/v1/user/login", data)
      .then((result) => {
        console.log(result.data.token);
        sessionStorage.setItem('token',result.data.token)
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Login;
