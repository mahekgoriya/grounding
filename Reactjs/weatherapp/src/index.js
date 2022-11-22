import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weathercard from './components/Weathercard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="row text-center">
      <div className="col-6 offset-xl-3 mt-5">
        <Weathercard/>
      </div>
    </div>
  </div>
);

