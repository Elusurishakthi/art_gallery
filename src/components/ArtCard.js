import React from "react";
import { useNavigate } from "react-router-dom";
// import "./ArtCard.css";

function ArtCard({ art }) {
  const navigate = useNavigate();

  return (
    <div
      className="art-card"
      onClick={() => navigate(`/art/${art.id}`)}
    >
      <img src={art.image} alt={art.title} />
      <h3>{art.title}</h3>
    </div>
  );
}

export default ArtCard;