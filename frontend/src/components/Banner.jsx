// Asegúrate de que los imports están correctos
import React, { memo } from 'react';
import '../assets/styles/Banner.css';
import backgroundImage from '../assets/images/Banner/banner.png';

const Banner = () => {
  const handleMouseOver = (e) => {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
  };

  const handleMouseOut = (e) => {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
  };

  const handleClick = () => {
    alert('Appointment booked!');
  };

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Capturing The Best Moments For You</h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
        <button 
          className="appointment-button" 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut} 
          onClick={handleClick}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default memo(Banner);
