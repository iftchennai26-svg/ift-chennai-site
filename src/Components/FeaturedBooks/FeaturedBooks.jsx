import React from 'react';
import './FeaturedBooks.css';

const books = [
  {
    id: 1,
    title: "Tafsir Ibn Kathir (Complete 10 Volumes)",
    rating: 4.9,
    originalPrice: 23.4,
    discountedPrice: 4.9,
    paperback: 89.99,
    formats: ["E-Pub", "PDF"]
  },
  {
    id: 2,
    title: "Sahih Al-Bukhari (Complete Collection)",
    rating: 4.9,
    originalPrice: 45.6,
    discountedPrice: 4.9,
    paperback: 75.5,
    formats: ["E-Pub", "PDF"]
  },
  {
    id: 3,
    title: "The Sealed Nectar (Al-Raheeq Al-Makhtum)",
    rating: 4.8,
    originalPrice: 97.2,
    discountedPrice: 4.8,
    paperback: 24.99,
    formats: ["E-Pub", "PDF"]
  },
  {
    id: 4,
    title: "Riyadh as-Salheen (Gardens of the Righteous)",
    rating: 4.9,
    originalPrice: 57.7,
    discountedPrice: 4.9,
    paperback: 18.99,
    formats: ["E-Pub"]
  },
  {
    id: 5,
    title: "Fortress of the Muslim (Hisnul Muslim)",
    rating: 4.8,
    originalPrice: 123.4,
    discountedPrice: 4.8,
    paperback: 12.99,
    formats: ["E-Pub", "PDF"]
  },
  {
    id: 6,
    title: "Fiqh us-Sunnah (5 Volume Set)",
    rating: 4.7,
    originalPrice: 14.5,
    discountedPrice: 4.7,
    paperback: 85,
    formats: ["E-Pub", "PDF"]
  },
  {
    id: 7,
    title: "The Study Quran: A New Translation and Commentary",
    rating: 4.8,
    originalPrice: 78.0,
    discountedPrice: 4.8,
    paperback: 45,
    formats: ["E-Pub", "PDF"]
  },
  {
    id: 8,
    title: "Al-Aqeedah Al-Wasitiyyah",
    rating: 4.7,
    originalPrice: 28.9,
    discountedPrice: 4.7,
    paperback: 15.99,
    formats: ["E-Pub"]
  }
];

const FeaturedBooks = () => {
  const addToCart = (book) => {
    alert(`${book.title} added to cart!`);
  };

  return (
    <section className="featured-books">
      <div className="section-header">
        <h2>Featured Books</h2>
      </div>
      
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-badge">⭐ {book.rating}</div>
            <h3 className="book-title">{book.title}</h3>
            
            <div className="book-price">
              <span className="discounted-price">₹{book.discountedPrice}</span>
              <span className="original-price">₹{book.originalPrice}</span>
            </div>
            
            <div className="book-paperback">
              Paperback: ${book.paperback}
            </div>
            
            <div className="book-formats">
              {book.formats.map((format, idx) => (
                <span key={idx} className="format-badge">{format}</span>
              ))}
            </div>
            
            <button className="add-to-cart" onClick={() => addToCart(book)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;