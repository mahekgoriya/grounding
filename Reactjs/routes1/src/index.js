import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutUs from './AboutUs';
import Blog from './Blog.js';
import Home from './Home.js';
import PageNotFound from './PageNotFound';
import ContactUs from './ContactUs';
import Menu from './Menu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function RouteDom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Menu />>
          <Route index element=<Home /> />
          <Route path='aboutus' element=<AboutUs /> />
          <Route path='contactus/:mobile/:email' element=<ContactUs /> />
          <Route path='contactus/:mobile/:email' element=<ContactUs /> />
          <Route path='blog' element=<Blog /> />
          <Route path='*' element=<PageNotFound /> />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteDom />);

