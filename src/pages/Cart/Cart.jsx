import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping">Continue Shopping</button>
        </div>
      ) : (
        <div className="cart-items">
          {/* Cart items will be displayed here */}
        </div>
      )}
    </div>
  );
};

export default Cart;
