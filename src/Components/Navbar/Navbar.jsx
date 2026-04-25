import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [showEBooksDropdown, setShowEBooksDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Top Row - Logo and Contact Info */}
        <div className="nav-top">
          <div className="logo-section">
            <h1 className="logo">Islamic Foundation Trsut</h1>
            <p className="tagline">+91-44-26624401</p>
          </div>
          
          <div className="contact-info">
            <div className="whatsapp-contact">
              <span className="whatsapp-icon">💬</span>
              <span className="whatsapp-number">+91 8668057596</span>
              <span className="whatsapp-text">WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Bottom Row - Navigation Links */}
        <div className="nav-bottom">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            
            {/* Books Dropdown */}
            <li 
              className="dropdown"
              onMouseEnter={() => setShowBooksDropdown(true)}
              onMouseLeave={() => setShowBooksDropdown(false)}
            >
              <Link to="/books">Books ▼</Link>
              {showBooksDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/books/tamil">Tamil Books</Link></li>
                  <li><Link to="/books/arabic">Arabic Books</Link></li>
                  <li><Link to="/books/english">English Books</Link></li>
                  <li><Link to="/books/urdu">Urdu Books</Link></li>
                </ul>
              )}
            </li>
            
            <li><Link to="/audio-books">Audio Books</Link></li>
            
            {/* E-Books Dropdown */}
            <li 
              className="dropdown"
              onMouseEnter={() => setShowEBooksDropdown(true)}
              onMouseLeave={() => setShowEBooksDropdown(false)}
            >
              <Link to="/e-book">E-Books ▼</Link>
              {showEBooksDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/e-book/epub">E-Pub</Link></li>
                </ul>
              )}
            </li>
            
            <li><Link to="/news">News</Link></li>
            <li><Link to="/e-quran">E-Qurán</Link></li>
          </ul>
          
          <div className="nav-right">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search books, authors, categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">🔍</button>
            </div>
            
            <div className="user-actions">
              <Link to="/track-order" className="track-order">Track Your Order</Link>
              <Link to="/account" className="my-account">My Account</Link>
              <Link to="/e-library" className="e-library">E Library</Link>
            </div>
            
            <div className="cart-icon">
              <Link to="/cart">🛒</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;        
