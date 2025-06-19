// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const translations = {
  pt: {
    translation: {
      // Header
      askToBook: 'Pedir reserva',
      howItWorks: 'Como funciona a reserva?',
      // Property
      propertyTitle: 'Quarto em rua da Garganta de Aísa, 1, Numancia, Madrid',
      // Dates
      checkinDate: 'Data de entrada',
      checkoutDate: 'Data de saída',
      // Costs
      firstMonthRent: 'Primeiro mês de renda:',
      idealistaService: 'Serviço do idealista:',
      payWhenAccepted: 'Pagas quando aceitarem:',
      // Payment Info
      whenToPayDeposit: 'Quando se paga a caução e as restantes mensalidades?',
      paymentExplanation: 'Ao reservar apenas pagas o primeiro mês e o serviço do idealista. A caução (480,00 €), as despesas adicionais do anunciante (150,00 €) e as seguintes mensalidades serão pagas diretamente ao anunciante.',
      viewExpenses: 'Ver despesas e mensalidades',
      // Guarantees
      reservationGuarantees: 'Garantias da reserva',
      verifiedProfessional: 'Anunciante profissional verificado',
      clientSince: 'Cliente do idealista desde 2015',
      trustAndSafety: 'Confiança e segurança',
      trustAndSafetyDetail: 'Não pagamos ao anunciante até 48 horas depois da tua entrada. E se o quarto não corresponde ao anúncio, devolvemos-te o dinheiro.',
      cancellationPolicy: 'Política de cancelamento',
      cancellationPolicyDetail: 'Podes cancelar a reserva até 24 horas após a aprovação recuperando o valor do primeiro mês.',
      assistanceHotline: 'Linha direta de assistência',
      assistanceHotlineDetail: 'Durante cada passo do processo, a nossa equipa ajuda-te para que possas reservar com tranquilidade.',
      assistancePhone: '917012031',
      // Continue Button
      continue: 'Continuar',
      // Help Section
      doubts: 'Tens dúvidas sobre a reserva?',
      doubtsText: 'Convidamos-te a visitar o nosso Centro de Ajuda para inquilinos, onde encontrarás uma variedade de artigos feitos para responder às tuas perguntas e orientar-te em todas as fases do processo.',
      viewArticles: 'Ver os artigos',
    },
  },
  en: {
    translation: {
      // Header
      askToBook: 'Request to book',
      howItWorks: 'How does the reservation work?',
      // Property
      propertyTitle: 'Room on calle de la Garganta de Aísa, 1, Numancia, Madrid',
      // Dates
      checkinDate: 'Check-in date',
      checkoutDate: 'Check-out date',
      // Costs
      firstMonthRent: "First month's rent:",
      idealistaService: 'Idealista service:',
      payWhenAccepted: 'You pay when they accept:',
      // Payment Info
      whenToPayDeposit: 'When are the deposit and remaining monthly payments paid?',
      paymentExplanation: "When booking, you only pay the first month and the idealista service. The deposit (€480.00), the advertiser's additional expenses (€150.00), and the following monthly payments will be paid directly to the advertiser.",
      viewExpenses: 'View expenses and monthly payments',
      // Guarantees
      reservationGuarantees: 'Reservation guarantees',
      verifiedProfessional: 'Verified professional advertiser',
      clientSince: 'Idealista client since 2015',
      trustAndSafety: 'Trust and safety',
      trustAndSafetyDetail: 'We do not pay the advertiser until 48 hours after your arrival. And if the room does not match the ad, we will refund your money.',
      cancellationPolicy: 'Cancellation policy',
      cancellationPolicyDetail: 'You can cancel the reservation up to 24 hours after approval, recovering the value of the first month.',
      assistanceHotline: 'Direct assistance hotline',
      assistanceHotlineDetail: 'Throughout the process, our team is at your disposal so you can book with peace of mind.',
      assistancePhone: '917012031',
      // Continue Button
      continue: 'Continue',
      // Help Section
      doubts: 'Do you have questions about the reservation?',
      doubtsText: 'We invite you to visit our Help Center for tenants, where you will find a variety of articles designed to answer your questions and guide you through all stages of the process.',
      viewArticles: 'View the articles',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ...translations,
      // Você pode adicionar mais línguas aqui, usando 'en' como base
      es: translations.en,
      de: translations.en,
      fr: translations.en,
      it: translations.en,
      nl: translations.en,
      sv: translations.en,
    },
    fallbackLng: 'pt',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;