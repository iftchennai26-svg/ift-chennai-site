import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover Authentic Islamic Literature</h1>
        <p className="hero-description">
          Explore our vast collection of Quran translations, Hadith, Fiqh, Seerah, and more. 
          Enhance your knowledge with authentic Islamic books from renowned scholars.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Browse Categories</button>
          <button className="btn-secondary">Read Quran</button>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat">
          <h3>1000+</h3>
          <p>Books</p>
        </div>
        <div className="stat">
          <h3>Top Rated</h3>
          <p>⭐ 4.8/5</p>
        </div>
        <div className="stat">
          <h3>25% OFF</h3>
          <p>Selected Items</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Authors</p>
        </div>
        <div className="stat">
          <h3>E-Pub</h3>
          <p>Available</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;