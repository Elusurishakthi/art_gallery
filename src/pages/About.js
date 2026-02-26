import React from "react";
import "./About.css";

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
          <button className="explore-btn">Explore Gallery</button>
        </div>
      </div>
    </div>
  );
}

export default About;