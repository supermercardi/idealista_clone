// src/components/Header.js
import React from 'react';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="https://www.idealista.com" target="_blank" rel="noopener noreferrer">
        <img src="https://st3.idealista.com/static/common/img/idealista.svg" alt="Idealista logo" className="logo" />
      </a>
      {/* A <nav> agora contém apenas o seletor de idioma */}
      <nav>
        <LanguageSelector />
      </nav>
    </header>
  );
};

export default Header;