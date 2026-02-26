import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <div className="contact-card">
          <h1>Contact Us</h1>
          <p className="subtitle">
            We'd love to hear from you. Connect with The Art Chronicle.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required />
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <p>📧 artchronicle@gmail.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;