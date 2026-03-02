import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

/* Import your own images from assets */
import painting from "../assets/painting form .jpg";
import dance from "../assets/classical fom.jpg";
import music from "../assets/music form.jpg";
import sculpture from "../assets/sculptureart.jpg";
import performing from "../assets/performance art.jpg";
import digital from "../assets/modren art.jpg";

function Gallery() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Traditional Painting Art Forms", image: painting },
    { id: 2, name: "Classical Dance Forms (India)", image: dance },
    { id: 3, name: "Music Forms", image: music },
    { id: 4, name: "Sculpture & Craft Arts", image: sculpture },
    { id: 5, name: "Performing Arts", image: performing },
    { id: 6, name: "Modern & Digital Arts", image: digital },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-overlay">
        <h1 className="gallery-title">Art Categories</h1>

        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              
              {/* Image Top */}
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>

              {/* Content Below Image */}
              <div className="category-content">
                <h2>{category.name}</h2>

                <button
                  onClick={() => navigate(`/category/${category.id}`)}
                  className="explore-btn"
                >
                  Explore
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;