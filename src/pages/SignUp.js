import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-overlay">
        <div className="signup-card">
          <h1>Create Account</h1>
          <p className="subtitle">Join The Art Chronicle Community</p>

          <form className="signup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Create Password" required />
            <button type="submit">Register</button>
          </form>

          <p className="extra-text">
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;