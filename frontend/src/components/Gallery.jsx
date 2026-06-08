import React from 'react';
import { useSpring, animated } from 'react-spring';
import gallery1 from '../assets/images/Testimonials/main1.png';
import gallery2 from '../assets/images/Testimonials/main2.png';
import gallery3 from '../assets/images/Testimonials/main3.png';
import gallery4 from '../assets/images/Testimonials/main4.png';
import '../assets/styles/Gallery.css';

const images = [
  { src: gallery1, title: 'Lorem Ipsum 1' },
  { src: gallery2, title: 'Lorem Ipsum 2' },
  { src: gallery3, title: 'Lorem Ipsum 3' },
  { src: gallery4, title: 'Lorem Ipsum 4' }
];

const Gallery = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">My Portfolio</h1>
      <p className="gallery-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <animated.div style={props} className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className={`gallery-item item-${index + 1}`}>
            <img src={image.src} alt={`Gallery ${index + 1}`} />
            <div className="overlay">
              <div className="overlay-text">{image.title}</div>
            </div>
          </div>
        ))}
      </animated.div>
      <button className="view-portfolio-button">View Portfolio</button>
    </div>
  );
};

export default Gallery;
