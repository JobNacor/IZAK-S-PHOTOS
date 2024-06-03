import React, { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/AboutMe2.css';

const AboutMe2 = () => {
  return (
    <div className="about-me-container">
      <div className="title-section">
        <h1>About Me</h1>
        <div className="arrow-down">&#x2193;</div>
      </div>
      <div className="description-section">
        <p>
          Tincidunt Sagittis Mollis Nec Suspendisse Sed Felis Massa Urna Nec. Urna Quisque Blandit Turpis Ultrices Arcu Ut Sed. Ultricies Diam Est Aliquet Porta Fermentum Molestie Morbi Libero. Ultrices Sit In Elit Eget Nullam Sem. Urna Velit Imperdiet Habitant In. Tincidunt Sagittis Mollis Nec Suspendisse Sed Felis Massa Urna Nec. Urna Quisque Blandit Turpis Ultrices Arcu Ut Sed. Ultricies Diam Est Aliquet Porta Fermentum Molestie Morbi Libero. Ultrices Sit In Elit Eget Nullam Sem. Urna Velit Imperdiet Habitant In.
        </p>
      </div>
      <div className="stats-section">
        <div className="stat-item">
          <h2>+3</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h2>+50</h2>
          <p>Customers</p>
        </div>
        <div className="stat-item">
          <h2>+500</h2>
          <p>Portfolio Photos</p>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutMe2);