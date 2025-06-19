// src/App.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from './components/Header';
import PropertyInfo from './components/PropertyInfo';
import DatePickers from './components/DatePickers';
import CostDetails from './components/CostDetails';
import PaymentInfo from './components/PaymentInfo';
import ReservationGuarantees from './components/ReservationGuarantees';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();

  const [property, setProperty] = useState({
    title: '', // Inicia vazio
    photoUrl: 'https://via.placeholder.com/110x82',
    price: 950.00,
  });

  // Simulação de API
  useEffect(() => {
    const apiData = {
      title: t('propertyTitle'), // Usando a tradução como título
      photoUrl: "https://img3.idealista.com/blur/1300x975/static/common/rooms/105377358_1.jpg",
      price: 950.00,
    };
    setProperty(apiData);
  }, [t]); // Atualiza quando o idioma muda

  const serviceFee = 75.00;
  const total = property.price + serviceFee;

  return (
    <div className="app-container">
      <Header />
      <div className="page-content">
        <div className="main-title-wrapper">
          <h1>{t('askToBook')}</h1>
          <a href="#how-it-works" className="info-link">{t('howItWorks')} ⓘ</a>
        </div>
        <main className="main-content">
          <div className="reservation-form">
            <PropertyInfo title={property.title} photoUrl={property.photoUrl} />
            <DatePickers />
            <CostDetails price={property.price} serviceFee={serviceFee} total={total} />
            <div className="continue-button-container">
              <button className="continue-button">{t('continue')}</button>
            </div>
          </div>
          <div className="additional-info">
            <PaymentInfo />
            <ReservationGuarantees />
          </div>
        </main>
        <HelpSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;