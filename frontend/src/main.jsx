import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';

import store from './store';
import { Provider } from 'react-redux';

import App from './App.jsx';

import './index.css';

const updateSW = registerSW({
  onOfflineReady() {},
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
