"use client";

import { FormEvent, useRef } from "react";

const Login = () => {
  const conRef = useRef(null as Element | any);

  const handleSubmitted = async (e: FormEvent) => {
    e.preventDefault();
    const payload: any = {};
    for (const iterator of e.target as Element | any) {
      if (iterator.localName === "input") {
        payload[iterator.name] = iterator.value;
      }
    }
    // const {data,status,m} = await login(payload);
    console.log(payload, "handleSubmitted");
  };

  return (
    <div className="container" id="container" ref={conRef}>
      <div className="form-container sign-up-container">
        <form onSubmit={(e) => handleSubmitted(e)}>
          <h1>Create Account</h1>
          {/* <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your email for registration</span> */}
          <input type="text" placeholder="First Name" name="firstName" />
          <input type="text" placeholder="Last Name" name="lastName" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={(e) => handleSubmitted(e)}>
          <h1>Sign in</h1>
          {/* <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your account</span> */}
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() =>
                conRef.current.classList.remove("right-panel-active")
              }
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost"
              id="signUp"
              onClick={() => conRef.current.classList.add("right-panel-active")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
