// src/components/Slider.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Slider.css';

const Slider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalIdRef.current);
  }, [slideIndex]);

  const showSlide = (index) => {
    if (index >= images.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  const prevSlide = () => {
    clearInterval(intervalIdRef.current);
    showSlide(slideIndex - 1);
  };

  const nextSlide = () => {
    clearInterval(intervalIdRef.current);
    showSlide(slideIndex + 1);
  };

  return (
    <div className="slider-wrapper">
      <button className="slider-button left" onClick={prevSlide}>&#10094;</button>
      <div className="slider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={index === slideIndex ? 'displaySlide' : ''}
          />
        ))}
      </div>
      <button className="slider-button right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
