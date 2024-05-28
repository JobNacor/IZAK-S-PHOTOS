import React from 'react';
import '../assets/styles/footer.css';
import backgroundImage from '../assets/images/footer/camera4.png';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-container">
        <div className="footer-section">
          <h2>WE MAKE NON-ANNOYING EMAILS!</h2>
          <p>Pop Your Email & we’ll Prove It</p>
          <div className="email-form">
            <input type="email" placeholder="Isaacphotos@Gmail.com" />
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className="footer-section">
          <h2>QUICK LINKS</h2>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>OTHER LINKS</h2>
          <ul>
            <li>Lorem Ipsum Dolor</li>
            <li>Lorem Ipsum Dolor</li>
            <li>Lorem Ipsum Dolor</li>
            <li>Lorem Ipsum Dolor</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>CONTACT INFO 🤙🏽</h2>
          <p>1234, Isaac Address</p>
          <p>1548 USA</p>
          <p>123 456 7890</p>
          <p>isaac.photos@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyrights © 2024 ISAAC PHOTOS.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
