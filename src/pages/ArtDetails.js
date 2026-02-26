import React from "react";
import { useParams } from "react-router-dom";
import artData from "../data/ArtData";
// import "./ArtDetails.css";

function ArtDetails() {
  const { id } = useParams();
  const art = artData.find(
    (item) => item.id === parseInt(id)
  );

  if (!art) return <h2>Art Not Found</h2>;

  return (
    <div className="details-container">
      <img src={art.image} alt={art.title} />
      <div className="details-content">
        <h1>{art.title}</h1>
        <p>{art.description}</p>
      </div>
    </div>
  );
}

export default ArtDetails;