// src/components/HelpSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './HelpSection.css';

const HelpSection = () => {
  const { t } = useTranslation();
  return (
    <div className="help-section">
      <h4>{t('doubts')}</h4>
      <p>{t('doubtsText')}</p>
      <a href="#view-articles" className="info-link">{t('viewArticles')}</a>
    </div>
  );
};

export default HelpSection;