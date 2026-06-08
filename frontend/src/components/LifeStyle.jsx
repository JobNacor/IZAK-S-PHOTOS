// src/components/Sports.jsx
import React from 'react';
import Slider from './Slider';
import '../assets/styles/Slider.css';

const sportsImages = [
  '/src/assets/images/Testimonials/main1.png',
  '/src/assets/images/Testimonials/main2.png',
  '/src/assets/images/Testimonials/main3.png',
  '/src/assets/images/Testimonials/main4.png',
  '/src/assets/images/Testimonials/main5.png',
  '/src/assets/images/Testimonials/main6.png',
];

const LifeStyle = () => {
  return (
    <div className="carousel-container">
      <h2 className='title'> LifeStyle</h2>
      <Slider images={sportsImages} />
    </div>
  );
};

export default LifeStyle;
