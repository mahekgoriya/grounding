import React, { Component, useState } from 'react';

import Header from './Components/Header/Header.js';
import KeyPad from './Components/KeyPad/KeyPad.js';

import moonIcon from './assets/half-moon.png'
import sunIcon from './assets/sun.png'

import './App.css';

// import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className='app' data-theme={isDarkMode?"dark":""}>
      <div className='app_calculator'>
        <div className='app_calculator_navbar'>
          <div className='app_calculator_navbar_toggle' onClick={() => setIsDarkMode(!isDarkMode)}>
            <div className={`app_calculator_navbar_toggle_circle ${isDarkMode?"app_calculator_navbar_toggle_circle_active":""}`} />
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt='mode' />
       
        </div>
          <Header/>
          <KeyPad/>
      </div>
    </div>
  );
}

export default App;
