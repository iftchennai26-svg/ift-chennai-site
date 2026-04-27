import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [showEBooksDropdown, setShowEBooksDropdown] = useState(false);
  const [showAuthorsDropdown, setShowAuthorsDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Sample books and authors data for search
  const searchData = {
    books: [
      { id: 1, name: "A Glossary", category: "book", type: "english", price: 200 },
      { id: 2, name: "Al-Fathiha & Juz' Amma – English", category: "book", type: "english", price: 15 },
      { id: 3, name: "Ahadhith Sahleh", category: "book", type: "arabic", price: 80 },
      { id: 4, name: "Al Fathiha and Amma Juz (Urdu)", category: "book", type: "urdu", price: 15 },
      { id: 5, name: "Al-Ajwaliah", category: "book", type: "arabic", price: 50 },
      { id: 6, name: "Tafsir Ibn Kathir", category: "book", type: "english", price: 89.99 },
      { id: 7, name: "Sahih Al-Bukhari", category: "book", type: "english", price: 75.5 },
      { id: 8, name: "The Sealed Nectar", category: "book", type: "english", price: 24.99 },
      { id: 9, name: "Riyadh as-Salheen", category: "book", type: "english", price: 18.99 },
      { id: 10, name: "Fortress of the Muslim", category: "book", type: "english", price: 12.99 },
      { id: 11, name: "தமிழ் புத்தகம்", category: "book", type: "tamil", price: 90 },
      { id: 12, name: "இஸ்லாமிய கல்வி", category: "book", type: "tamil", price: 45 },
      { id: 13, name: "كتاب العربية", category: "book", type: "arabic", price: 60 },
      { id: 14, name: "قرآن مجید", category: "book", type: "urdu", price: 120 },
      { id: 15, name: "Arabic Conversation Drills", category: "book", type: "arabic", price: 150 },
    ],
    authors: [
      { id: 1, name: "Dr. V. Abdur Rahim", category: "author", books: 25 },
      { id: 2, name: "Ibn Kathir", category: "author", books: 8 },
      { id: 3, name: "Imam Nawawi", category: "author", books: 12 },
      { id: 4, name: "Ibn Taymiyyah", category: "author", books: 15 },
      { id: 5, name: "Imam Al-Ghazali", category: "author", books: 10 },
      { id: 6, name: "Yusuf al-Qaradawi", category: "author", books: 24 },
      { id: 7, name: "Tariq Ramadan", category: "author", books: 9 },
      { id: 8, name: "Muhammad Asad", category: "author", books: 7 },
      { id: 9, name: "Sayyid Qutb", category: "author", books: 14 },
      { id: 10, name: "Moulana Syed Abul Ali", category: "author", books: 5 },
      { id: 11, name: "Khurram Murad", category: "author", books: 8 },
      { id: 12, name: "P. Sirajudeen", category: "author", books: 3 },
    ]
  };

  // Combine all searchable items
  const allSearchItems = [...searchData.books, ...searchData.authors];

  // Handle search input change
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = allSearchItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 10)); // Show max 10 suggestions
    setShowSuggestions(true);
  }, [searchQuery]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle suggestion click
  const handleSuggestionClick = (item) => {
    setSearchQuery(item.name);
    setShowSuggestions(false);
    
    if (item.category === 'book') {
      // Navigate to books page with search query
      navigate(`/books?search=${encodeURIComponent(item.name)}`);
    } else if (item.category === 'author') {
      // Navigate to authors page with search query
      const authorSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      navigate(`/authors/${authorSlug}`);
    }
  };

  // Handle search form submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;
    
    setShowSuggestions(false);
    navigate(`/books?search=${encodeURIComponent(searchQuery)}`);
  };

  // Highlight matching text
  const highlightMatch = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={index} className="highlight">{part}</mark> : part
    );
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Top Row - Logo and Contact Info */}
        <div className="nav-top">
          <div className="logo-section">
            <h1 className="logo">Islamic Foundation Trust</h1>
            <p className="tagline">+91-44-26624401</p>
          </div>
          
          <div className="contact-info">
            <div className="whatsapp-contact">
              {/* <span className="whatsapp-icon">💬</span> */}
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
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/e-quran">E-Qurán</Link></li>
          </ul>
          
          <div className="nav-right">
            {/* Search Bar with Suggestions */}
            <div className="search-container" ref={searchRef}>
              <form onSubmit={handleSearch} className="search-bar">
                <input 
                  type="text" 
                  placeholder="Search books, authors, categories..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim() !== '' && setShowSuggestions(true)}
                  autoComplete="off"
                />
                <button type="submit" className="search-btn"></button>
              </form>
              
              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="search-suggestions">
                  {suggestions.map((item, index) => (
                    <div 
                      key={index} 
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(item)}
                    >
                      {/* <div className="suggestion-icon">
                        {item.category === 'book' ? '' : ''}
                      </div> */}
                      <div className="suggestion-content">
                        <div className="suggestion-name">
                          {highlightMatch(item.name, searchQuery)}
                        </div>
                        <div className="suggestion-category">
                          {item.category === 'book' ? `Book • ${item.type.toUpperCase()}` : `Author • ${item.books} books`}
                          {item.category === 'book' && item.price && ` • ₹${item.price}`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
          