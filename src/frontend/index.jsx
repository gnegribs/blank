import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App/App';

const landingPageContainer = document.getElementById('app');
hydrate(<App />, landingPageContainer);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
