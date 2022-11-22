import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetAge from './GetAge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className='row'>
      <div className='col-6 offset-xl-3'>
        <GetAge/>
      </div>
    </div>
  </div>
);

