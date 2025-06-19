import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css'; // Criaremos este arquivo CSS

const languages = [
  { code: 'pt', lang: 'Português', country_code: 'pt' },
  { code: 'en', lang: 'English', country_code: 'gb' },
  { code: 'es', lang: 'Español', country_code: 'es' },
  { code: 'de', lang: 'Deutsch', country_code: 'de' },
  { code: 'fr', lang: 'Français', country_code: 'fr' },
  { code: 'it', lang: 'Italiano', country_code: 'it' },
  { code: 'nl', lang: 'Nederlands', country_code: 'nl' },
  { code: 'sv', lang: 'Svenska', country_code: 'se' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  // Encontra o idioma atualmente selecionado para exibir a bandeira correta
  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="language-selector-wrapper">
      <img 
        src={`https://flagcdn.com/w20/${currentLanguage.country_code}.png`} 
        alt={currentLanguage.lang} 
        className="current-flag"
      />
      <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)} className="language-select">
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;