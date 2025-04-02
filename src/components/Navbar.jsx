import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Navbar.css";
import Logo from "../assets/rust-logo.gif"; // Replace with your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="navbar-logo-img" />
          <span className="navbar-brand">Niti Framework</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li>
            <a href="#hero" className="navbar-link" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="navbar-link" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#documents" className="navbar-link" onClick={toggleMenu}>
              Documents
            </a>
          </li>
          <li>
            <a href="#info" className="navbar-link" onClick={toggleMenu}>
              Info
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* Download Button */}
        <a
          href="https://github.com/cyberkutti-iedc/Prawns-Installer/releases/download/v1.1.0/prawn.exe"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          Download
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
