import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import initScrollAnimations from './lib/scrollAnimate';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// initialize scroll animations after a tick so DOM is ready
setTimeout(() => {
  try {
    initScrollAnimations();
  } catch (e) {
    // ignore in case of older browsers
    // console.debug('scroll animate init failed', e);
  }
}, 50);
