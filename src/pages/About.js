import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="overlay">
        <div className="about-card">
          <h1>The Art Chronicle</h1>
          <p>
            The Art Chronicle is a digital platform dedicated to exploring,
            preserving, and celebrating diverse art forms from around the world.
          </p>
          <p>
            From classical traditions to modern digital expressions, we aim to
            connect people with the rich cultural heritage of humanity.
          </p>
           <Link to="/gallery">
          <button className="explore-btn">Explore Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;