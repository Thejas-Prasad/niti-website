import React from "react";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import Documents from "./pages/Documents";
import Info from "./pages/Info";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Documents />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
