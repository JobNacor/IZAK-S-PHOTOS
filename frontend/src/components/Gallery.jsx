import React, { useState, memo } from 'react';
import '../assets/styles/Gallery.css';
import image1 from "../assets/images/Gallery/gallery1.png";
import image2 from "../assets/images/Gallery/gallery2.png";
import image3 from "../assets/images/Gallery/gallery3.png";
import image4 from "../assets/images/Gallery/gallery4.png";
import image5 from "../assets/images/Gallery/gallery5.png";
import image6 from "../assets/images/Gallery/gallery6.png";
import Instagram from "../assets/images/Gallery/Instagram-logo.png";
import Logo from "../assets/images/Gallery/logo.png";

// Images array
const images = [image1, image2, image3, image4, image5, image6];

// Memoized LazyImage component
const LazyImage = memo(({ src, alt }) => (
  <img src={src} alt={alt} loading="lazy" />
));

// Memoized Gallery component
const Gallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="gallery-container">
      <div className="header">
        <img src={Instagram} alt="Instagram Logo" />
      </div>
      <div className="image-grid">
        {images.map((img, index) => (
          <div
            className="image-container"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            key={index}
          >
            <LazyImage src={img} alt={`Gallery Image ${index + 1}`} />
            {hoverIndex === index && (
              <div className="overlay">
                <img src={Logo} alt="Logo" className="overlay-logo" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Gallery);
