import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <p className="about-description">
          At Niti, we provide innovative hardware solutions to empower developers and creators worldwide. Our goal is to unlock creativity and drive innovation with high-quality development boards.
        </p>
        <div className="core-values">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We thrive on pushing boundaries and exploring new ideas to bring value to developers.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>Our community of developers is at the heart of everything we do, driving collaboration and support.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>We deliver high-quality hardware and support, ensuring a seamless development experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
