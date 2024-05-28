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

const Sports = () => {
  return (
    <div className="carousel-container">
      <h2 className='title'> Sports</h2>
      <Slider images={sportsImages} />
    </div>
  );
};

export default Sports;
