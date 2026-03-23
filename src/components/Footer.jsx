import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h3 className="footer-logo">RN TEST</h3>
            <p>
              Modern fashion inspired by elegance, quality, and timeless design.
            </p>
          </div>

          <div className="col-lg-2 col-md-4">
            <h5>Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h5>Support</h5>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-pinterest"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>© 2025 RN TEST. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;