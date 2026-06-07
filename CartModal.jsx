import React from "react";
import "../styles/CartModal.css";

export default function CartModal({ onClose, cartItems = [] }) {
  const hasItems = cartItems.length > 0;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Your Cart</h2>

        {hasItems ? (
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: Rs. {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-cart">No items added yet!</p>
        )}
      </div>
    </div>
  );
}
