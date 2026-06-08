import React from 'react';
import '../assets/styles/footer.css'; 
import { ReactSVG } from 'react-svg';
import twitterIcon from '../assets/svgs/twitter.svg';
import instagramIcon from '../assets/svgs/instagram.svg';
import pinterestIcon from '../assets/svgs/pinterest.svg';
import whatsappIcon from '../assets/svgs/whatsapp.svg';
import emailIcon from '../assets/svgs/email.svg';

const Footer = React.memo(() => {
  return (
    <footer className="footer-59391">
      <div className="border-bottom pb-5 mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <form action="#" className="subscribe mb-4 mb-lg-0">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
              </form>
            </div>
            <div className="col-lg-6 text-lg-center">
              <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                <li><a href="#">Features</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled nav-links social nav-right text-lg-right">
                <li>
                  <a href="#">
                    <span className="icon">
                      <ReactSVG src={twitterIcon} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <ReactSVG src={instagramIcon} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <ReactSVG src={whatsappIcon} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center d-flex flex-column flex-lg-row text-center text-lg-left">
          <div className="col-lg-4 order-lg-2 site-logo mb-3 mb-lg-0">
            <a href="#" className="m-0 p-0">Ikaks Photos</a>
          </div>
          <div className="col-lg-4 order-lg-1 nav-left mb-3 mb-lg-0">
            <ul className="list-unstyled nav-links m-0">
              <li><a href="#">Terms</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4 order-lg-3">
            <p className="m-0 text-muted" id='copy'><small>&copy; 2019. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
