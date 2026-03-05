// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// function Login() {

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Save login status
//     localStorage.setItem("isLoggedIn", "true");

//     // Redirect to Gallery
//     navigate("/gallery");
//   };

//   return (
//     <div className="login-container">
//       <div className="login-overlay">
//         <div className="login-card">
//           <h1>Welcome Back</h1>
//           <p className="subtitle">Login to explore The Art Chronicle</p>

//           <form className="login-form" onSubmit={handleLogin}>
//             <input type="email" placeholder="Enter Email" required />
//             <input type="password" placeholder="Enter Password" required />

//             <button type="submit">Login</button>
//           </form>

//           <p className="extra-text">
//             Don't have an account? <span>Sign Up</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {

      localStorage.setItem("isLoggedIn", "true");

      navigate("/gallery");
    } 
    else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;