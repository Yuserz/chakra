import "../Styles/loginSignUp.less";
import TextBox from "./TextBox.jsx";
import React from "react";

export default function LoginForm() {
  return (
    <div className="login-container">
      <div className="box login">
        <div className="intro-box">
          <p className="intro-box__intro-text">Welcome Back</p>
          <p className="intro-box__intro-message">
            Enter your email and password to sign in
          </p>
        </div>
        <div className="input-box">
          <label htmlFor="Email">Email</label>
          <TextBox
            type="text"
            name="email"
            id="exampleFormControlInput2"
            placeholder="Your email address"
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="Password">Password</label>
          <TextBox
            type="password"
            name="password"
            id="exampleFormControlInput2"
            placeholder="Your password"
            required
          />
        </div>

        <div className="remember-me">
          <label className="remember-me__switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p>Remember me</p>
        </div>

        <div>
          <button className="confirm-btn">SIGN IN</button>
        </div>

        <div className="account">
          Don't have an account?{" "}
          <a href="/signup" className="sign-in-up">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
