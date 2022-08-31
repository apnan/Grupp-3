import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="content">
      <form id="login_form" className="login-form">
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
            <button type="submit" onSubmit={submitHandler}>
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
