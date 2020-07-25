import React from "react";

const PortfolioDetailsContent = ({ title, category, description, meta }) => {
  return (
    <div className="portfolio-details-content">
      <a href="/" className="category">
        {category}
      </a>

      <h1 className="title">{title}</h1>

      <p>{description}</p>

      <ul className="project-info">
        {Object.keys(meta).map((metaName) => (
          <li key={metaName}>
            <span>{metaName}</span> {meta[metaName]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioDetailsContent;
