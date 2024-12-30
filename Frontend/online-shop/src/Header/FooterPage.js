import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../Static/Styles.css'; 
import logo from '../Images/logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Store Logo" className="logo" />
            <p>Leading the way in electronics with top-notch products and customer service.</p>
          </div>

        
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/shop">Shop Now</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

       
          <div className="footer-support">
            <h4>Customer Support</h4>
            <ul>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/shipping">Shipping Information</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

        
          <div className="footer-social">
          <h4>Connect With Us</h4>
          <div>
            <a href="https://facebook.com" className="social-link">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              Facebook
            </a>
            <a href="https://wa.me/123456789" className="social-link">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              Whatsapp
            </a>
            <a href="https://twitter.com" className="social-link">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              Twitter
            </a>
            <a href="https://instagram.com" className="social-link">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              Instagram
            </a>
          </div>
        </div>
        </div>

       
        <div className="footer-bottom">
          <p>&copy; 2024 Electronics Store. All rights reserved.</p>
          <p>Moi Avenue, Nairobi, Kenya | Phone: +(254) 746-383-683</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
