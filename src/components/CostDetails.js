import React from 'react';
import './CostDetails.css';

// Formata o número para o estilo monetário europeu (ex: 950,00 €)
const formatPrice = (value) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
};

// Recebe os valores como props
const CostDetails = ({ rentLabel, serviceLabel, totalLabel, price, serviceFee, total }) => {
  return (
    <div className="cost-details">
      <div className="cost-item">
        <span>{rentLabel}</span>
        {/* Exibe o preço vindo da API */}
        <span>{formatPrice(price)}</span>
      </div>
      <div className="cost-item">
        <span>{serviceLabel} <span className="info-icon">ⓘ</span></span>
        <span>{formatPrice(serviceFee)}</span>
      </div>
      <div className="total-cost">
        <strong>{totalLabel}</strong>
        {/* Exibe o total calculado */}
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

export default CostDetails;