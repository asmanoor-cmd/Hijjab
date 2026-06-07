import React, { useState } from "react";
import "../styles/Navbar.css";

import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar({ onSectionChange, onCartOpen, onAccountOpen }) {
  const [active, setActive] = useState("New");

  const handleClick = (section) => {
    setActive(section);
    onSectionChange(section);
  };

  return (
    <nav className="navbar">
      {/* Left side: Brand name */}
      <div className="brand-name">Hijjabian n Hijjab</div>

      {/* Center: Navigation links */}
      <div className="nav-links">
        <a
          href="#new"
          className={`nav-link ${active === "New" ? "active" : ""}`}
          onClick={() => handleClick("New")}
        >
          New Arrivals
        </a>
        <a
          href="#summer"
          className={`nav-link ${active === "Summer" ? "active" : ""}`}
          onClick={() => handleClick("Summer")}
        >
          Summer
        </a>
        <a
          href="#winter"
          className={`nav-link ${active === "Winter" ? "active" : ""}`}
          onClick={() => handleClick("Winter")}
        >
          Winter
        </a>
        <a
          href="#chiffon"
          className={`nav-link ${active === "Chiffon" ? "active" : ""}`}
          onClick={() => handleClick("Chiffon")}
        >
          Chiffon
        </a>
        <a
          href="#georgette"
          className={`nav-link ${active === "Georgette" ? "active" : ""}`}
          onClick={() => handleClick("Georgette")}
        >
          Georgette
        </a>
      </div>

      {/* Right side: Icons */}
      <div className="nav-icons">
        <FaShoppingCart className="icon" onClick={onCartOpen} />
        <FaUser className="icon" onClick={onAccountOpen} />
      </div>
    </nav>
  );
}
