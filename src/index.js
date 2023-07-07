import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import CoffeeControl  from './components/CoffeeControl';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">  
            <App />
            <CoffeeControl/>
            </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

