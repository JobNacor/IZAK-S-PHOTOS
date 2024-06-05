// src/components/Portfolio.jsx
import React from 'react';
import Weddings from '../components/Weddings';
import '../assets/styles/Slider.css';
import '../assets/styles/Gallery.css';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import '../assets/styles/footer.css';
import Gallery2 from '../components/Gallery2';


const Portfolio = () => {
  return (
    <div>
      <Weddings />
      <Gallery2 />
      <Banner />
      <Footer />
      

    </div>
  );
};

export default Portfolio;
