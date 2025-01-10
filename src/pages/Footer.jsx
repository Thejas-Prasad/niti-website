import React from "react";
import "./Footer.css";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-about">
          <h3 className="footer-title">Niti Development Board</h3>
          <p className="footer-description">
            Niti empowers developers with cutting-edge hardware solutions to
            fuel creativity and innovation worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul>
            <li>
              <a href="#about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#documents" className="footer-link">
                Documents
              </a>
            </li>
            <li>
              <a href="#info" className="footer-link">
                Information
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4 className="footer-subtitle">Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Twitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/cyberkutti-iedc/Niti-core"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Niti Development Board. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
