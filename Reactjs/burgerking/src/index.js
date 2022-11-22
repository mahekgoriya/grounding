import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';  
import MakeBurger from './components/MakeBurger.js';
import Checkout from './components/Checkout.js';
import Home from './components/Home.js';
import Burger from './components/Burger.js';

function RouteDom()
{
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home/> >
            <Route path="/burger" element=<Burger/> />
            <Route path="/makeburger" element=<MakeBurger/> />
            <Route path="/checkout" element=<Checkout/> />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouteDom/>
);

