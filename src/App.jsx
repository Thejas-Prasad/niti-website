import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/hero";
import AboutUs from "./pages/AboutUs";
import Documents from "./pages/Documents";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Front from "./pages/front";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Front/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;