import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import axios from "axios";
import "./App.css";

function App() {

  //interceptor are similar to middleware any api calls is going to the backend automatically it will attach the header
  axios.interceptors.request.use((obj)=>{
    obj.headers["authorization"] = sessionStorage.getItem('token')
    return obj;
  })  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Registration/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
