import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid px-0">
        <div className="hero-banner d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-content">
                  <p className="hero-subtitle">NEW COLLECTION</p>
                  <h1 className="hero-title">
                    Elevate Your <br /> Everyday Style
                  </h1>
                  <p className="hero-text">
                    Discover premium fashion essentials designed for comfort,
                    confidence, and timeless style.
                  </p>
                  <Link to="/shop" className="btn hero-btn">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;