// Documents.jsx
import React from "react";
import "./Documents.css";

const documentsData = [
  {
    title: "Getting Started Guide",
    description: "A comprehensive guide to getting started with the Niti Development Board.",
    link: "#",
  },
  {
    title: "Technical Specifications",
    description: "Detailed technical specifications for hardware and software integrations.",
    link: "#",
  },
  {
    title: "Project Examples",
    description: "Explore sample projects and applications using Niti.",
    link: "#",
  },
];

const Documents = () => {
  return (
    <section className="documents-section">
      <h2 className="section-title">Documents</h2>
      <p className="section-subtitle">
        Browse through our comprehensive guides and technical documentation.
      </p>
      <div className="document-cards">
        {documentsData.map((doc, index) => (
          <div className="document-card" key={index}>
            <h3 className="document-title">{doc.title}</h3>
            <p className="document-description">{doc.description}</p>
            <a
              href={doc.link}
              className="document-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documents;

