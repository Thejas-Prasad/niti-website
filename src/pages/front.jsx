import React from "react";
import Hero from "./hero";
import AboutUs from "./AboutUs";
import Documents from "./Documents";
import Info from "./Info";
import Contact from "./Contact";

function Front() {
    return (
        <>
          <section id="hero">
            <Hero />
          </section>
          <section id="about-us">
            <AboutUs />
          </section>
          <section id="documents">
            <Documents />
          </section>
          <section id="info">
            <Info />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </>
      );
}

export default Front;