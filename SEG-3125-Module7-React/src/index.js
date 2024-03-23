import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; // Default Styles
import './i18n' // Translations

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
