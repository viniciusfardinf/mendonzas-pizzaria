import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/GlobalStyles.css'; // Importa os estilos globais
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);