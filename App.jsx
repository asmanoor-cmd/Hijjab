import React, { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import FrontGallery from "./components/FrontGallery";
import CollectionSection from "./components/CollectionSection";
import CartModal from "./components/CartModal";
import AccountModal from "./components/AccountModal";
import Footer from "./components/Footer";

// Styles (all from src/styles)
import "./styles/Navbar.css";
import "./styles/CartModal.css";
import "./styles/AccountModal.css";
import "./styles/FrontGallery.css";
import "./styles/CollectionSection.css";
import "./styles/Footer.css";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Add to cart function
  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`${item.name} added to cart!`);
  };

  // Section change (for navbar)
  const handleSectionChange = (section) => {
    console.log("Switched to:", section);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        onSectionChange={handleSectionChange}
        onCartOpen={() => setShowCart(true)}
        onAccountOpen={() => setShowAccount(true)}
      />

      {/* Front Section Slider */}
      <FrontGallery />

      {/* All Hijab Collections */}
      <CollectionSection addToCart={handleAddToCart} />

      {/* Modals */}
      {showCart && (
        <CartModal
          onClose={() => setShowCart(false)}
          cartItems={cartItems} // ✅ Pass the cart items here
        />
      )}

      {showAccount && <AccountModal onClose={() => setShowAccount(false)} />}

      {/* Footer */}
      <Footer />
    </>
  );
}
