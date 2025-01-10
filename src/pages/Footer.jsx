// Footer.jsx
import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>Niti Development Board</h3>
          <p>
            Niti empowers developers with cutting-edge hardware solutions to 
            fuel creativity and innovation worldwide.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#documents">Documents</a></li>
            <li><a href="#info">Information</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/cyberkutti-iedc/Niti-core" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Niti Development Board. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

