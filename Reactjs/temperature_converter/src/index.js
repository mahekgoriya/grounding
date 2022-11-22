import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bg.jpg';
import Converter from './Converter.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <div className="bg-text">
      <Converter/>
    </div>
  </div>
);

