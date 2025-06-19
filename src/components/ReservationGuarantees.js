// src/components/ReservationGuarantees.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ReservationGuarantees.css'; // Precisaremos criar este arquivo CSS

// Ícones como componentes React para facilitar a estilização
const ProfessionalIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
);
const ClientIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2v-1.1c0-.64-3.13-2.1-6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
);
const ClockIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
);
const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
);

const ReservationGuarantees = () => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState(null);

  const guarantees = [
    {
      id: 'professional',
      title: t('verifiedProfessional'),
      icon: <ProfessionalIcon />,
      details: [t('verifiedSince'), t('clientSince')]
    },
    {
      id: 'trust',
      title: t('trustAndSafety'),
      icon: <ClockIcon />,
      details: [t('trustAndSafetyDetail')]
    },
    {
      id: 'cancellation',
      title: t('cancellationPolicy'),
      icon: <ClockIcon />,
      details: [t('cancellationPolicyDetail')]
    },
    {
      id: 'assistance',
      title: t('assistanceHotline'),
      icon: <PhoneIcon />,
      details: [t('assistanceHotlineDetail'), t('assistancePhone')]
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="reservation-guarantees">
      <h4>{t('reservationGuarantees')}</h4>
      <ul className="guarantees-list">
        {guarantees.map((item) => (
          <li key={item.id} className="guarantee-item">
            <div className="guarantee-header" onClick={() => toggleItem(item.id)}>
              <span className="guarantee-icon">{item.icon}</span>
              <span className="guarantee-title">{item.title}</span>
              <span className={`arrow ${openItem === item.id ? 'open' : ''}`}>▼</span>
            </div>
            {openItem === item.id && (
              <div className="guarantee-content">
                {item.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationGuarantees;