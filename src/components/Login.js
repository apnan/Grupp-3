import React, { useState } from "react";
import axios from   "axios"
import "./login.css";
import { updateLoggedIn } from "./context/ProtectedRoutes";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const submitHandler = async(e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          "Content-type":"application/json"
        }
      }
      setLoading(true)
     // const  data = await axios.post('http://localhost:3000/api/login', {
     //   email, password
     // }, config);
      const data = {"firstName": "Bhavani", "lastName": "Marthala" }
      console.log(data)
      updateLoggedIn()
      navigate("/profile");
      localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch (err) {
      setError(err.response.data.message)
      
    }
    
    
    
  }

  return (
    <div className="content">
      <form id="login_form" className="login-form" onSubmit ={submitHandler}>
        <h1>Log In</h1>

        <div className="form_div">
          <label>Email:</label>
          <input
            className="input-text"
            name="userName"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            id="pass"
            className="input-text"
            name="password"
            type="password"
            placeholder="Enter pssword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <button type="submit" onSubmit={submitHandler} >
              submit
            </button>
        </div>
      <div className="register-text">
        <p>
          Not a user? Register <a href="register">Here</a>
        </p>
      </div>
    </form>

    </div>
  );

}
export default Login;
