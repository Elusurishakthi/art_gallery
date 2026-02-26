import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Traditional Painting Art Forms" },
    { id: 2, name: "Classical Dance Forms (India)" },
    { id: 3, name: "Music Forms" },
    { id: 4, name: "Sculpture & Craft Arts" },
    { id: 5, name: "Performing Arts" },
    { id: 6, name: "Modern & Digital Arts" },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-overlay">
        <h1 className="gallery-title">Art Categories</h1>

        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <h2>{category.name}</h2>
              <button
                onClick={() => navigate(`/category/${category.id}`)}
                className="explore-btn"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

