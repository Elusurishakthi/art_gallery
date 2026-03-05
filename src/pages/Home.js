// import React from "react";
// import artData from "../data/ArtData";
// import ArtCard from "../components/ArtCard";
// import "./Home.css";
// import { Link } from "react-router-dom";

// // <Link to="/gallery">
// //   <button>Explore Arts</button>
// // </Link>


// function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="hero">
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1>The Art Chronicle</h1>
//             <p>
//               Celebrating Creativity, Culture, and Expression Across
//               Traditional & Modern Art Forms.
//             </p>
//             <Link to="/gallery">


//             <button
//               onClick={() =>
//                 window.scrollTo({ top: 700, behavior: "smooth" })
//               }
//             >
//               Explore Arts
//             </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       {/* <div className="gallery-section">
//         {artData.map((art) => (
//           <ArtCard key={art.id} art={art} />
//         ))}
//       </div> */}
//     </>
//   );
// }

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">

            <h1>The Art Chronicle</h1>

            <p>
              Discover the beauty of art across cultures and generations.
              The Art Chronicle is a digital platform that showcases
              traditional, classical, and modern art forms from around the world.
            </p>

            <div className="hero-buttons">
              <Link to="/gallery">
                <button className="explore-btn">Explore Arts</button>
              </Link>

              <Link to="/about">
                <button className="about-btn">Learn More</button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT WEBSITE SECTION */}
      <section className="about-site">

        <h2>About The Art Chronicle</h2>

        <p>
          The Art Chronicle is an online platform dedicated to celebrating
          creativity, culture, and artistic expression. Our mission is to
          preserve traditional art forms while also highlighting modern
          and digital creativity.
        </p>

        <p>
          Through this platform, users can explore different art categories
          including paintings, dance forms, music traditions, sculpture,
          performing arts, and modern digital artwork.
        </p>

      </section>

      {/* FEATURES SECTION */}
      <section className="features">

        <h2>What You Can Explore</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🎨 Traditional Paintings</h3>
            <p>
              Discover beautiful traditional paintings such as Madhubani,
              Warli, Kalamkari, and Pattachitra that represent India's
              rich cultural heritage.
            </p>
          </div>

          <div className="feature-card">
            <h3>💃 Classical Dance Forms</h3>
            <p>
              Learn about classical dance styles like Bharatanatyam,
              Kathak, Kuchipudi, and Odissi that combine storytelling
              with expressive movements.
            </p>
          </div>

          <div className="feature-card">
            <h3>🎵 Music Traditions</h3>
            <p>
              Explore classical, folk, and modern music traditions that
              reflect the artistic diversity of cultures around the world.
            </p>
          </div>

          <div className="feature-card">
            <h3>🗿 Sculpture & Crafts</h3>
            <p>
              Experience the beauty of handcrafted sculptures, pottery,
              and artistic crafts that showcase the skills of artisans.
            </p>
          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}
      <section className="cta">

        <h2>Start Exploring the World of Art</h2>

        <p>
          Browse different art categories and discover the beauty of
          artistic expression.
        </p>

        <Link to="/gallery">
          <button className="cta-btn">Go To Gallery</button>
        </Link>

      </section>

    </div>
  );
}

export default Home;