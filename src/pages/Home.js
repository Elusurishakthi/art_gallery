import React from "react";
import artData from "../data/ArtData";
import ArtCard from "../components/ArtCard";
import "./Home.css";
import { Link } from "react-router-dom";

// <Link to="/gallery">
//   <button>Explore Arts</button>
// </Link>


function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>The Art Chronicle</h1>
            <p>
              Celebrating Creativity, Culture, and Expression Across
              Traditional & Modern Art Forms.
            </p>
            <Link to="/gallery">
  

            <button
              onClick={() =>
                window.scrollTo({ top: 700, behavior: "smooth" })
              }
            >
              Explore Arts
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {/* <div className="gallery-section">
        {artData.map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div> */}
    </>
  );
}

export default Home;