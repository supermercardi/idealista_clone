import React from 'react';
import './PropertyInfo.css';

// Recebe 'title' e 'photoUrl' como props
const PropertyInfo = ({ title, photoUrl }) => { 
  return (
    <div className="property-info">
      {/* Usa a URL da foto vinda da API */}
      <img src={photoUrl} alt={title} className="property-image" />
      <div className="property-details">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PropertyInfo;