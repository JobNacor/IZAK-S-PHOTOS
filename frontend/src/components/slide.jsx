import React, { memo, lazy, Suspense } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/slide.css';
import fondo1 from '../assets/images/Slide/Fondo-1.png';
import slide1 from '../assets/images/Slide/slide1.png';
import slide2 from '../assets/images/Slide/slide2.png';
import slide3 from '../assets/images/Slide/slide3.png';
import slide4 from '../assets/images/Slide/slide4.png';
import slide5 from '../assets/images/Slide/slide5.png';
import slide6 from '../assets/images/Slide/slide6.png';

const LazyImage = lazy(() => import('./LazyImage'));

const slideImages = [
  { src: slide1, alt: 'Slide 1' },
  { src: slide2, alt: 'Slide 2' },
  { src: slide3, alt: 'Slide 3' },
  { src: slide4, alt: 'Slide 4' },
  { src: slide5, alt: 'Slide 5' },
  { src: slide6, alt: 'Slide 6' },
];

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="my-work-section" style={{ backgroundImage: `url(${fondo1})` }}>
      <h2>My Work</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Slider {...settings}>
        {slideImages.map((slide, index) => (
          <div key={index} className="slide-item">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={slide.src} alt={slide.alt} />
            </Suspense>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default memo(Slide);
