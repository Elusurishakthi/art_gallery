import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArtCard.css";

function ArtCard({ art }) {
  const navigate = useNavigate();

  return (
    <div
      className="art-card"
      onClick={() => navigate(`/art/${art.id}`)}
    >
      {/* Image Top */}
      <div className="art-image">
        <img src={art.image} alt={art.title} />
      </div>

      {/* Middle Content */}
      <div className="art-content">
        <h3>{art.title}</h3>
      </div>

      {/* Bottom Description */}
      <div className="art-description">
        <p>{art.description}</p>
      </div>
    </div>
  );
}

export default ArtCard;