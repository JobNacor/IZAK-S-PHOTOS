import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Slider.css';
import { Link } from 'react-router-dom';

const weddingImages = [
  '/src/assets/images/Testimonials/main1.png',
  '/src/assets/images/Testimonials/main2.png',
  '/src/assets/images/Testimonials/main3.png',
  '/src/assets/images/Testimonials/main4.png',
  '/src/assets/images/Testimonials/main5.png',
  '/src/assets/images/Testimonials/main6.png',
];

const Weddings = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const slideRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setTransition(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % weddingImages.length);
  };

  const prevImage = () => {
    setTransition(true);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + weddingImages.length) % weddingImages.length);
  };

  const handleTransitionEnd = () => {
    setTransition(false);
    if (currentImageIndex === weddingImages.length) {
      slideRef.current.style.transition = 'none';
      setCurrentImageIndex(0);
    }
    if (currentImageIndex === -1) {
      slideRef.current.style.transition = 'none';
      setCurrentImageIndex(weddingImages.length - 1);
    }
  };

  return (
    <div className="portfolio">
      <div className="slider">
        <div
          className={`slide ${transition ? 'transition' : ''}`}
          ref={slideRef}
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {weddingImages.map((image, index) => (
            <img src={image} alt={`Slide ${index}`} key={index} />
          ))}
        </div>
      </div>
      <div className="navigation">
        <button className="nav-arrow left-arrow" onClick={prevImage}>
          <span className="arrow-left"></span>
        </button>
        <div className="page-indicator">
          {currentImageIndex + 1} / {weddingImages.length}
        </div>
        <button className="nav-arrow right-arrow" onClick={nextImage}>
          <span className="arrow-right"></span>
        </button>
      </div>
      <Info />
      <Gallery />
    </div>
  );
};

const Info = () => (
  <div className="info">
    <h2 className="left">Wedding photography, wedding videography, and travel and lifestyle portfolio</h2>
    <p className="right">We document weddings all over the world from small and intimate 
      to lavish and luxurious. Our aim is always to be present and true to the event, 
      capturing the essence of it, focusing on people, and using our creative vision to 
      capture imagery that inspires and engages. Make sure to visit our journal to read 
      some of our full stories.</p>
  </div>
);

const Gallery = () => (
  <div className="portfolio-section">
    <h2>PORTFOLIO</h2>
    <div className="portfolio-grid">
      <div className="portfolio-item">
        <Link to="/wedding-photography">
          <img src="/src/assets/images/Gallery/gallery5.png" alt="Wedding Photography" />
          <p>PORTRAIT</p>
        </Link>
      </div>
      <div className="portfolio-item">
        <Link to="/wedding-videography">
          <img src="/src/assets/images/Gallery/gallery5.png" alt="Wedding Videography" />
          <p>DRON</p>
        </Link>
      </div>
      <div className="portfolio-item">
        <Link to="/travel-lifestyle">
          <img src="/src/assets/images/Gallery/gallery3.png" alt="Travel & Lifestyle" />
          <p>TRAVEL & LIFESTYLE</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Weddings;
