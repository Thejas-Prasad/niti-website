import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/rust-logo.gif"; // replace with your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="navbar-logo-img" />
          <span className="navbar-brand">Niti Development</span>
        </div>

        {/* Navbar Links */}
        <ul className="navbar-links">
          <li>
            <Link to="#hero" className="navbar-link">
              Hero
            </Link>
          </li>
          <li>
            <Link to="#about" className="navbar-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="#documents" className="navbar-link">
              Documents
            </Link>
          </li>
          <li>
            <Link to="#info" className="navbar-link">
              Info
            </Link>
          </li>
          <li>
            <Link to="#contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Download Button */}
        <a
          href="https://github.com/cyberkutti-iedc/Niti-core"
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
