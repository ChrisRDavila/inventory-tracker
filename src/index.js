import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import CoffeeControl  from './components/CoffeeControl';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container">
      <div class="row gx-5">
        <div class="col">
          <div class="p-3 border bg-light">  
            <App />
            <CoffeeControl/>
            </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

