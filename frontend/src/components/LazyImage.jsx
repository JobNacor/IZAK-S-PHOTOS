// src/components/LazyImage.jsx
import React from 'react';

const LazyImage = ({ src, alt }) => (
  <img src={src} alt={alt} loading="lazy" className="img-fluid" />
);

export default LazyImage;
