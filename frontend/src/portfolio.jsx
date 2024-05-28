// src/components/Portfolio.jsx
import React from 'react';
import Weddings from '../src/components/Weddings';
import Drone from '../src/components/Drone';
import Portrait from '../src/components/Portrait';
import Products from '../src/components/Products';
import Sports from '../src/components/Sports';
import Gallery from '../src/components/Gallery';
import '../src/assets/styles/Slider.css';
import '../src/assets/styles/Gallery.css';
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
      <Gallery />
      <Banner />
      <Footer />
      

    </div>
  );
};

export default Portfolio;
