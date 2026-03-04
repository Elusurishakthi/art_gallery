import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArtCard.css";

function ArtCard({ art }) {

  const navigate = useNavigate();

  const handleClick = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      navigate(`/art/${art.id}`);
    } else {
      alert("Please login to view art details");
      navigate("/login");
    }

  };

  return (
    <div className="art-card" onClick={handleClick}>

      <div className="art-image">
        <img src={art.image} alt={art.title} />
      </div>

      <div className="art-content">
        <h3>{art.title}</h3>
      </div>

      <div className="art-description">
        <p>{art.description}</p>
      </div>

    </div>
  );
}

export default ArtCard;