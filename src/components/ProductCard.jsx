import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.title} className="product-img" />
        <span className="product-badge">{product.badge}</span>
      </div>
      <div className="product-info">
        <h5 className="product-title">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h5>
        <p className="product-category">{product.category}</p>
        <div className="product-price-wrap">
          <span className="product-price">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;