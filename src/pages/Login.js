import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-overlay">
        <div className="login-card">
          <h1>Welcome Back</h1>
          <p className="subtitle">Login to explore The Art Chronicle</p>

          <form className="login-form">
            <input type="email" placeholder="Enter Email" required />
            <input type="password" placeholder="Enter Password" required />
            <button type="submit">Login</button>
          </form>

          <p className="extra-text">
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;