import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h2>Niti</h2>
        </div>
        <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/documents">Documents</Link>
          </li>
        </ul>
        <div
          className="hamburger-menu"
          onClick={() => setIsMobile(!isMobile)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
