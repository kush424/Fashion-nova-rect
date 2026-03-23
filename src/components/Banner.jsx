import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="promo-banner section-space">
      <div className="container">
        <div className="banner-box">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <p className="section-subtitle">Special Offer</p>
                <h2>Summer Sale Up To 50% Off</h2>
                <p>
                  Refresh your wardrobe with premium picks inspired by modern
                  luxury and effortless elegance.
                </p>
                <Link to="/shop" className="btn hero-btn">
                  Discover Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
                alt="Banner"
                className="img-fluid banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;