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
        <img src={art.image} alt={art.name} />
      </div>

      {/* Art Name (Middle) */}
      <div className="art-content">
        <h3>{art.name}</h3>
      </div>

      {/* Description Bottom */}
      <div className="art-description">
        <p>{art.description}</p>
      </div>
    </div>
  );
}

export default ArtCard;