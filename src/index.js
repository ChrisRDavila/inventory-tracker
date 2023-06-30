import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import CoffeeControl  from './components/CoffeeControl';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CoffeeControl/>
  </React.StrictMode>
);

