import React from 'react';
import './LatestBooks.css';

const latestBooks = [
  {
    id: 1,
    title: "தப்பூர்வமும் குர்ஆன் – அத்தியாயம் 12...",
    originalPrice: 180,
    discountedPrice: 90,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  },
  {
    id: 2,
    title: "எதிர்காலம் நோக்கி_EPUB",
    originalPrice: 30,
    discountedPrice: 15,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  },
  {
    id: 3,
    title: "இல்லாம் உங்களுடையதே_EP…",
    originalPrice: 30,
    discountedPrice: 15,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  },
  {
    id: 4,
    title: "மனித குலத்தை ஒருங்கிணைக்க_E PUB",
    originalPrice: 35,
    discountedPrice: 20,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  },
  {
    id: 5,
    title: "தீர்க்குர்ஆனின் உள்ளடக்கம் என்ன?",
    originalPrice: 80,
    discountedPrice: 40,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  },
  {
    id: 6,
    title: "இஸ்லாமிய பொருளாதாரம்",
    originalPrice: 120,
    discountedPrice: 60,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  },
  {
    id: 7,
    title: "தவ்ஹீத்தின் அடிப்படைகள்",
    originalPrice: 90,
    discountedPrice: 45,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  },
  {
    id: 8,
    title: "நபி வழி நெறிகள்",
    originalPrice: 150,
    discountedPrice: 75,
    hasEPUB: true,
    epubLink: "www.iftchennai.in",
    whatsappNumber: "86680 57596"
  }
];

const LatestBooks = () => {
  const addToCart = (book) => {
    alert(`${book.title} added to cart!`);
  };

  const viewAllBooks = () => {
    alert("View all latest books");
  };

  return (
    <section className="latest-books-section">
      <div className="latest-books-header">
        <h2>Latest Books</h2>
      </div>

      <div className="latest-books-grid">
        {latestBooks.slice(0, 6).map(book => (
          <div key={book.id} className="latest-book-card">
            {book.hasEPUB && (
              <div className="epub-badge">
                <span className="epub-text">E-PUB</span>
              </div>
            )}
            
            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>
              
              <div className="book-prices">
                <span className="discounted-price">₹{book.discountedPrice}</span>
                <span className="original-price">₹{book.originalPrice}</span>
              </div>
              
              <div className="book-footer">
                <div className="book-meta">
                  <span className="website-link">{book.epubLink}</span>
                  <span className="whatsapp-number">{book.whatsappNumber}</span>
                </div>
                
                <button className="add-to-cart-btn" onClick={() => addToCart(book)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-more-container">
        <button className="view-more-btn" onClick={viewAllBooks}>
          View More →
        </button>
      </div>
    </section>
  );
};

export default LatestBooks;