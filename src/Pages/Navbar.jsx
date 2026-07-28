import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav__content">
        {/* Logo + Text */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img
              src="/shiftcube_logo.png"
              alt="ShiftsCube Logo"
              className="nav-logo"
            />
            <span className="logo-text">ShiftsCube</span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav__links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <button className="nav__signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
