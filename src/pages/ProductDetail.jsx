import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <section className="product-detail-page section-space">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="product-detail-image">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Product"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-detail-content">
              <p className="section-subtitle">Product ID: {id}</p>
              <h1>Classic Beige Coat</h1>
              <h3 className="detail-price">$89.00</h3>
              <p>
                A refined wardrobe essential crafted for timeless elegance and
                all-day comfort. This page is only for UI preview.
              </p>

              <div className="detail-meta">
                <p><strong>Category:</strong> Women Fashion</p>
                <p><strong>Availability:</strong> In Stock</p>
                <p><strong>Material:</strong> Premium Fabric</p>
              </div>

              <button className="btn hero-btn mt-3">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;