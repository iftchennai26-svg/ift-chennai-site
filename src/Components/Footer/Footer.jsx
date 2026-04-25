import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <h3>Join Our Newsletter</h3>
          <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter email for weekly newsletter." 
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/islamic-foundation-trust">Islamic Foundation Trust</Link></li>
            <li><Link to="/publishers-exporter">Publishers & Exporter</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-information">Contact Information</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/e-quran">E-Quran-Arabic,Tamil</Link></li>
            <li><Link to="/customer-login">Customer Login</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/news-events">News & Events</Link></li>
            <li><Link to="/delivery-shipping">Delivery & Shipping</Link></li>
            <li><Link to="/profile-dr-abdur-rahim">Profile of Dr.V.Abdur Rahim</Link></li>
            <li><Link to="/authors-list">Authors List</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/terms-of-use">Terms Of Use</Link></li>
            <li><Link to="/my-account">My Account</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policy</h3>
          <ul>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/refund-cancellation">Refund & Cancellation</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/e-library">E Library</Link></li>
            <li><Link to="/ios-privacy-policy">IOS Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Islamic Foundation Trust. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;