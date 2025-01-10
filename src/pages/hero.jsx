import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="image image-1"></div>
        <div className="image image-2"></div>
        <div className="image image-3"></div>
      </div>
      <div className="hero-content">
        <h1>Welcome to Niti Development Board Using Rust</h1>
        <p>Unleashing the power of creativity and innovation.</p>
        <a 
          href="https://github.com/cyberkutti-iedc/Niti-core" 
          className="download-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
    </section>
  );
};

export default Hero;
