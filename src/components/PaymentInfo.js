// src/components/PaymentInfo.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './PaymentInfo.css';

const PaymentInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="payment-info">
      <h4>{t('whenToPayDeposit')}</h4>
      <p>{t('paymentExplanation')}</p>
      <a href="#view-expenses" className="info-link">{t('viewExpenses')}</a>
    </div>
  );
};

export default PaymentInfo;