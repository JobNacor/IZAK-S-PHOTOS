import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slide.css';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import slide5 from '../images/slide5.png';
import slide6 from '../images/slide6.png';
import fondo1 from '../images/Fondo-1.png';

const Slide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, // Velocidad de la transición
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Tiempo de espera entre transiciones
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="my-work-section" style={{ backgroundImage: `url(${fondo1})` }}>
            <h2>My Work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Slider {...settings}>
                <img src={slide1} alt="Slide 1" />
                <img src={slide2} alt="Slide 2" />
                <img src={slide3} alt="Slide 3" />
                <img src={slide4} alt="Slide 4" />
                <img src={slide5} alt="Slide 5" />
                <img src={slide6} alt="Slide 6" />
            </Slider>
        </div>
    );
};

export default Slide;
