import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';  
import App from './App';
import Category from './Category.jsx';
import Product from './Product.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import MyCommonParts from './MyCommonParts';

function RouteDom()
{
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<MyCommonParts/> >
            <Route path="/category" element=<Category/> />
            <Route path="/cart" element=<Cart/> />
            <Route path="/checkout" element=<Checkout/> />
            <Route path="/login" element=<Login/> />
            <Route path="/register" element=<Register/> />
            <Route path="/product" element=<Product/> />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouteDom/>
);

