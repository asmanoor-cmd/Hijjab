import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mission Statement</h3>
          <p>
            At Hijjabian, we craft timeless, high-quality scarves designed with
            love, comfort, and style. Our mission is to celebrate self-expression
            through ethical craftsmanship.
          </p>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Address: Defence, Karachi</p>
          <p>Phone: 0316-2222064</p>
          <p>Email: info@hijjabian.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Hijjabian | Powered by React</p>
      </div>
    </footer>
  );
}
