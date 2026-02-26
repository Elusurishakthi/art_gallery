import React from "react";
import { useParams } from "react-router-dom";
import artData from "../data/ArtData";
import ArtCard from "../components/ArtCard";
import "./CategoryPage.css";

function CategoryPage() {
  const { id } = useParams();   // get category id from URL

  // Filter only related art forms
  const filteredArts = artData.filter(
    (art) => art.categoryId === parseInt(id)
  );

  return (
    <div className="category-container">
      <h1 className="category-title">Related Art Forms</h1>

      <div className="category-grid">
        {filteredArts.length > 0 ? (
          filteredArts.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))
        ) : (
          <p style={{ color: "white" }}>No art forms found.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;