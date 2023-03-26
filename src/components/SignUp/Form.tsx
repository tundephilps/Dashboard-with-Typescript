import React from "react";
import "./Form.scss";

import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div>
      <form className="login100-form validate-form">
        <h1
          style={{
            color: "#09037c",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
            fontSize: "30px",
            marginBottom: "30px",
          }}
        >
          Welcome!
        </h1>
        <p
          style={{
            color: "#09037c",
            fontFamily: "sans-serif",
            paddingBottom: "25px",
          }}
        >
          Enter details to Login
        </p>

        <div className="wrap-input100">
          <input
            className="input100"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="wrap-input100 ">
          <input
            className="input100"
            type="password"
            name="pass"
            placeholder="Password"
          />
        </div>
        <p style={{ fontSize: "3px !important", color: "#39d0fd" }}>
          FORGOT PASSWORD?
        </p>

        <div className="container-login100-form-btn ">
          <Link to="/Dashboard/" style={{ width: "100%" }}>
            {" "}
            <button className="login100-form-btn">Log in</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
