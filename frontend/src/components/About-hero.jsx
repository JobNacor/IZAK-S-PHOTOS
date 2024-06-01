import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/About-page.css';
import aboutMeImage from '../assets/images/About-hero/isack-photo.png';

const AboutMe = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-lg-6 d-flex align-items-center justify-content-center text-white text-center p-5 bg-dark">
          <div>
            <h1 className="display-3">I'M</h1>
            <h1 className="display-3">ISAAC</h1>
          </div>
        </div>
        <div className="col-lg-6 position-relative d-flex align-items-center p-0">
          <img src={aboutMeImage} alt="Isaac's photos" className="img-fluid custom-img" />
          <div className="custom-text">
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
