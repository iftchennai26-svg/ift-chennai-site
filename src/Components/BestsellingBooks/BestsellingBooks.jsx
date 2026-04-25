import React from 'react';
import './BestsellingBooks.css';

const bestsellingPackages = [
  {
    id: 1,
    title: "E-BOOK (Package – 1)",
    description: "4 E-Books @",
    price: 299,
    originalPrice: 600,
    discount: 66
  },
  {
    id: 2,
    title: "E-BOOK (Package – 2)",
    description: "13 E-Books @",
    price: 666,
    originalPrice: 800,
    discount: 66
  },
  {
    id: 3,
    title: "E-BOOK (Package – 3)",
    description: "20 E-Books @",
    price: 999,
    originalPrice: 1200,
    discount: 66
  }
];

const BestsellingBooks = () => {
  const addToCart = (pkg) => {
    alert(`${pkg.title} added to cart!`);
  };

  return (
    <section className="bestselling-section">
      <div className="section-header">
        <h2>Bestselling Books</h2>
      </div>

      <div className="bestselling-grid">
        {bestsellingPackages.map(pkg => (
          <div key={pkg.id} className="bestselling-card">
            <div className="bestselling-content">
              <h3 className="bestselling-title">{pkg.title}</h3>
              <p className="bestselling-description">
                {pkg.description} {pkg.price} (₱1000 ₱{pkg.originalPrice})
              </p>
              <div className="bestselling-price">
                ₱{pkg.price} ₱{pkg.discount}
              </div>
              <button className="add-to-cart-best" onClick={() => addToCart(pkg)}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestsellingBooks;