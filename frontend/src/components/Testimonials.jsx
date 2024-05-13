import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'; 

// Import images main
import main1 from "../images/main1.png"
import main2 from "../images/main2.png"
import main3 from "../images/main3.png"
import main4 from "../images/main4.png"
import main5 from "../images/main5.png"
import main6 from "../images/main6.png"
import main7 from "../images/main7.png"
import main8 from "../images/main8.png"

// Import images client
import client1 from "../images/client1.png"
import client2 from "../images/client2.png"
import client3 from "../images/client3.png"
import client4 from "../images/client4.png"
import client5 from "../images/client5.jpg"
import client6 from "../images/client6.jpg"
import client7 from "../images/client7.jpg"
import client8 from "../images/client8.png"

const testimonialsData = [
  {
    main: main1,
    client: client1,
    text: "Absolutely impressed with the photography expertise of Isaac. The ability to transform ordinary moments into extraordinary memories is a true talent. Professionalism, creativity, and a seamless process from start to finish.",
    
  },
  {
    main: main2,
    client: client2,
    text: "Another testimonial...",
    
  },

  {
    main: main3,
    client: client3,
    text: "Another testimonial...",
    
  },

  {
    main: main4,
    client: client4,
    text: "Another testimonial...",
    
  },
  {
    main: main5,
    client: client5,
    text: "Another testimonial...",
    
  },
  {
    main: main6,
    client: client6,
    text: "Another testimonial...",
    
  },
  
  {
    main: main7,
    client: client7,
    text: "Another testimonial...",
    
  },
  {
    main: main8,
    client: client8,
    text: "Another testimonial...",
    
  },
];

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
      centerPadding: '60px',
      beforeChange: (current, next) => handleChangeSlide(next),
    };
  
    const handleChangeSlide = (next) => {
      // Handle the slide change animation here if needed
    };
  
    return (
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial-slide">
              <img src={item.main} alt="Main Image" className="main-image"/>
              <div className="testimonial-info">
                
                <p className="testimonial-text">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Testimonials;