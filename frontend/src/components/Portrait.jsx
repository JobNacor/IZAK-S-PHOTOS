// src/components/Portrait.jsx
import React from 'react';
import Slider from './Slider';
import '../assets/styles/Slider.css';

const portraitImages = [
  '/src/assets/images/Testimonials/main1.png',
  '/src/assets/images/Testimonials/main2.png',
  '/src/assets/images/Testimonials/main3.png',
  '/src/assets/images/Testimonials/main4.png',
  '/src/assets/images/Testimonials/main5.png',
  '/src/assets/images/Testimonials/main6.png',
];

const Portrait = () => {
  return (
    <div className="carousel-container">
      <h2 className="title"> Portrait</h2>
      <Slider images={portraitImages} />
    </div>
  );
};

export default Portrait;
