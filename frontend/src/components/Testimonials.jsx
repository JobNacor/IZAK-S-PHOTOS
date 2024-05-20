import React, { memo, lazy, Suspense } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Testimonials.css";
// Import LazyImage component
import LazyImage from './LazyImage';

// Import images main
import main1 from "../assets/images/Testimonials/main1.png";
import main2 from "../assets/images/Testimonials/main2.png";
import main3 from "../assets/images/Testimonials/main3.png";
import main4 from "../assets/images/Testimonials/main4.png";
import main5 from "../assets/images/Testimonials/main5.png";
import main6 from "../assets/images/Testimonials/main6.png";
import main7 from "../assets/images/Testimonials/main7.png";
import main8 from "../assets/images/Testimonials/main8.png";

const testimonialsData = [
  { main: main1, text: "Absolutely impressed with the photography expertise of Isaac. The ability to transform ordinary moments into extraordinary memories is a true talent. Professionalism, creativity, and a seamless process from start to finish." },
  { main: main2, text: "Another testimonial..." },
  { main: main3, text: "Another testimonial..." },
  { main: main4, text: "Another testimonial..." },
  { main: main5, text: "Another testimonial..." },
  { main: main6, text: "Another testimonial..." },
  { main: main7, text: "Another testimonial..." },
  { main: main8, text: "Another testimonial..." },
];

// Lazy load the Slider component
const Slider = lazy(() => import("react-slick"));

const TestimonialSlide = memo(({ item }) => (
  <div className="testimonial-slide">
    <LazyImage src={item.main} alt="Main Image" className="main-image" />
    <div className="testimonial-info">
      <p className="testimonial-text">{item.text}</p>
    </div>
  </div>
));

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: '0px', // Ajustado para centrar las imágenes
    beforeChange: (current, next) => handleChangeSlide(next),
  };

  const handleChangeSlide = (next) => {
    // Handle the slide change animation here if needed
  };

  return (
    <div className="testimonials-section">
      <h2 className='Title'>What Our Clients Say</h2>
      <div className="slider-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Slider {...settings}>
            {testimonialsData.map((item, index) => (
              <TestimonialSlide key={index} item={item} />
            ))}
          </Slider>
        </Suspense>
      </div>
    </div>
  );
};

export default memo(Testimonials);
