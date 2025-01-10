import React, { useEffect, useState } from "react";
import { Button, Typography, Box, Container, Stack } from "@mui/material";
import "./Hero.css";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.jpg";
import RustLogo from "../assets/rust-logo.gif";

const Hero = () => {
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const x = Math.random() * (window.innerWidth - 120); // Account for logo size
      const y = Math.random() * (window.innerHeight - 120); // Account for logo size
      setLogoPosition({ x, y });
    };

    const interval = setInterval(updatePosition, 3000); // Update position every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <Container maxWidth="lg" className="hero-content">
        {/* Left Side Content */}
        <Box className="hero-left">
          <Typography variant="h2" className="hero-title">
            Niti Development Framework
          </Typography>
          <Typography variant="body1" className="hero-description">
            A lightweight, high-performance framework built on Rust to empower
            developers with unparalleled speed and creativity.
          </Typography>
          <Stack spacing={2} direction="row" className="button-group">
            <Button
              variant="contained"
              color="primary"
              href="#info"
              className="primary-button"
            >
              Learn More
            </Button>
            <Button
              variant="outlined"
              href="/contact"
              className="secondary-button"
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              color="success"
              href="https://github.com/cyberkutti-iedc/Niti-core"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Download
            </Button>
          </Stack>
        </Box>

        {/* Right Side Content */}
        <Box className="hero-right">
          <div className="image-stack">
            <img src={Image1} alt="Framework Overview" className="image" />
            <img src={Image2} alt="IDE Integration" className="image overlay" />
          </div>
        </Box>
      </Container>

      {/* Randomly Moving Rust Logo */}
      <img
        src={RustLogo}
        alt="Rust Logo"
        className="rust-logo"
        style={{
          left: `${logoPosition.x}px`,
          top: `${logoPosition.y}px`,
        }}
      />
    </section>
  );
};

export default Hero;
