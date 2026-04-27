import React from 'react';
import './CategoriesSection.css';

const categories = [
  { name: "Quran & Tafsir", books: "45 books", icon: "" },
  { name: "Hadith", books: "38 books", icon: "" },
  { name: "Fiqh (Islamic Jurisprudence)", books: "52 books", icon: "" },
  { name: "Seerah", books: "28 books", icon: "" }
];

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <div className="section-header">
        <h2>Popular Categories</h2>
        <a href="#" className="view-all">View All →</a>
      </div>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <p>{category.books}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;