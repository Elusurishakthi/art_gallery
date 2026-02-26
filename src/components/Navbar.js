import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Logo />
     


      <div style={styles.navLinks}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/gallery">Gallery</Link>
        <Link style={styles.link} to="/contact">Contact</Link>

        {/* Buttons */}
        <Link to="/login" style={styles.loginBtn}>Login</Link>
        <Link to="/signup" style={styles.signupBtn}>Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    backgroundColor: "#111",
    alignItems: "center",
  },

  logo: {
    color: "white",
    letterSpacing: "1px"
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },

  loginBtn: {
    padding: "8px 18px",
    border: "1px solid #ff9800",
    borderRadius: "6px",
    color: "#ff9800",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s",
  },

  signupBtn: {
    padding: "8px 18px",
    backgroundColor: "#ff9800",
    borderRadius: "6px",
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s",
  }
};

export default Navbar;