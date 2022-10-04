import React, { useState } from "react";
import RegValidation from "./RegValidation";
// import '../components/signin.css'
import './signin.css'


const Signin = () => {
    const initialstate = {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        registeredstatus: false
    };
    const [values, setValues] = useState(initialstate);
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
    const handleFormSubmit = async (event) => {
      //
      event.preventDefault();
      setErrors({});
      
      const validationErrors = RegValidation(values);
      setErrors(validationErrors);
      if (validationErrors.hasErrors) {
        return;
      }
      const response = await fetch(
        "https://grupp-3-backend.herokuapp.com/api/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        let data = await response.json();
        console.log(data)
         console.log(" I am heree");
        setErrors({ msg: data.message });
      } else {
        
        setValues({ ...values, registeredStatus: true });
      }
    };





    return (
      <div>
        <div>
          <div className="content">
            <form id="register-form" className="register-form">
              {values.registeredStatus ? (
                <h2>
                  {values.registeredStatus ? "Registered Successfully" : ""}
                </h2>
) : (
                <div className="register">
                  <h1>SignUp</h1>
                  {}
                  {errors.msg && <p className="error">{errors.msg}</p>}

                  {errors.name && <p className="error">{errors.userName}</p>}

                  <input
                    type="text"
                    name="userName"
                    className="input-text"
                    placeholder="User Name"
                    value={values.userName}
                      onChange={handleChange}
                  
                    autoComplete="off"
                  ></input>

                  {errors.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}

                  <input
                    type="text"
                    name="firstName"
                    className="input-text"
                    placeholder="Your First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    autoComplete="off"
                  ></input>

                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}

                  <input
                    type="text"
                    name="lastName"
                    className="input-text"
                    placeholder="Your Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    autoComplete="off"
                  ></input>
{errors.email && <p className="error">{errors.email}</p>}

                  <input
                    type="text"
                    name="email"
                    className="input-text"
                    placeholder="Your Email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="off"
                  ></input>
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}

                  <input
                    type="password"
                    name="password"
                    className="input-text"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                  ></input>

                  {errors.reEnterPassword && (
                    <p className="error">{errors.reEnterPassword}</p>
                  )}

                  <input
                    type="password"
                    name="reEnterPassword"
                    className="input-text"
                    placeholder="Re-enter password"
                    value={values.reEnterPassword}
                    onChange={handleChange}
                  ></input>
                  <button
                    className="submit-btn"
                    type="submit"
                    form="register-form"
                    onClick={handleFormSubmit}
                  >
                    SignIn
                  </button>
                </div>
              )}
              <div className="register-text">
                <p>
                  Already a user? <a href="/">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signin;