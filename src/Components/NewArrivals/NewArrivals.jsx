import React from 'react';
import './NewArrivals.css';

const newArrivals = [
  {
    id: 1,
    title: "சேர சோழ பாண்டிய மன்னர்களின் ஆட்சியில் முஸ்லிம்கள்",
    author: "P. Sirajudeen",
    price: 140,
    isNew: true
  }
];

const NewArrivals = () => {
  const addToCart = (book) => {
    alert(`${book.title} added to cart!`);
  };

  return (
    <section className="new-arrivals-section">
      <div className="section-header">
        <h2>New Arrivals</h2>
      </div>

      <div className="new-arrivals-grid">
        {newArrivals.map(book => (
          <div key={book.id} className="new-arrival-card">
            <div className="new-arrival-content">
              <h3 className="new-arrival-title">{book.title}</h3>
              <p className="new-arrival-author">{book.author}</p>
              <div className="new-arrival-price">₹{book.price}</div>
              <button className="add-to-cart-new" onClick={() => addToCart(book)}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;