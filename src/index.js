import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n'; // Importe o arquivo de configuração

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envolva o App com Suspense para lidar com o carregamento das traduções */}
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>
);



