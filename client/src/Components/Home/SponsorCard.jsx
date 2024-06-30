import React from "react";

import './SponsorCard.css';

function SponsorCard({ name, logo, link }) {
  return (
    <div className="sponsor-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={`${name} logo`} className="sponsor-logo" />
        {/* <p className="sponsor-name">{name}</p> */}
      </a>
    </div>
  );
}

export default SponsorCard;
