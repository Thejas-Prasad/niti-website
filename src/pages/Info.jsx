// Info.jsx
import React from "react";
import "./Info.css";

const infoData = [
  {
    title: "Powerful Performance",
    description: "Equipped with a high-speed processor and advanced connectivity options to support your projects effortlessly.",
  },
  {
    title: "User-Friendly",
    description: "Designed with developers in mind, ensuring easy integration, accessibility, and versatility for a wide range of projects.",
  },
  {
    title: "Comprehensive Support",
    description: "We offer extensive documentation, project examples, and community-driven support to enhance your development journey.",
  },
];

const Info = () => {
  return (
    <section className="info-section">
      <h2 className="section-title">Why Choose Niti?</h2>
      <p className="section-subtitle">
        Discover the unique features and benefits of the Niti Development Board.
      </p>
      <div className="info-cards">
        {infoData.map((info, index) => (
          <div className="info-card" key={index}>
            <h3 className="info-title">{info.title}</h3>
            <p className="info-description">{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;

