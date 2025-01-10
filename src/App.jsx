import React from "react";
import Navbar from "./pages/Navbar"; // Import Navbar
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import Documents from "./pages/Documents";
import Info from "./pages/Info";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Documents Section */}
      <Documents />
      
      {/* Info Section */}
      <Info />
      
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
