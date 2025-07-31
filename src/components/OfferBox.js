import React from 'react';
import '../styles/OfferBox.css';

function OfferBox({ title, description, isNew }) {
  return (
    <div className={`offer-box ${isNew ? 'new' : ''}`}>
      {isNew && (
        <div className="new-badge">
          <span className="dot"></span> 
          <span>nowość</span>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default OfferBox;
