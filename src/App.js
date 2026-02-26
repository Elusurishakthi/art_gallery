import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ArtDetails from "./pages/ArtDetails";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/art/:id" element={<ArtDetails />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}




export default App;