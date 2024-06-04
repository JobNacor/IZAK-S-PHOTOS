// src/components/Portfolio.jsx
import React from 'react';
import Weddings from '../src/components/Weddings';
import Drone from '../src/components/Drone';
import Portrait from '../src/components/Portrait';
import Products from '../src/components/Products';
import Sports from '../src/components/Sports';
import Instagram from '../src/components/Instagram';
import '../src/assets/styles/Slider.css';
import Banner from './components/Banner';
import Footer from './components/footer';
import '../src/assets/styles/footer.css';


const Portfolio = () => {
  return (
    <div>
      <Weddings />
      <Drone />
      <Portrait />
      <Products />
      <Sports />
      <Instagram />
      <Banner />
      <Footer />
      

    </div>
  );
};

export default Portfolio;
