import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = 'parol';
    config.headers.Accept = 'application/json';
    config.headers.MyField = 'foobar';
    return config;
  },
  function (error) {
    console.log('interceptors error');
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    return response;
  },
  function (error) {
    alert('interceptors error in resp');
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
