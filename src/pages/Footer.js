import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>The Art Chronicle</h3>
        <p>Exploring Culture • Preserving Heritage • Celebrating Creativity</p>
        <p>© {new Date().getFullYear()} The Art Chronicle. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;