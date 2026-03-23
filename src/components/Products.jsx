import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Classic Beige Coat",
    category: "Women Fashion",
    price: 89.0,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Minimal Black Outfit",
    category: "Modern Wear",
    price: 72.0,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Elegant Street Look",
    category: "Trending",
    price: 65.0,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Premium Jacket Set",
    category: "Men Fashion",
    price: 95.0,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
];

const Products = () => {
  return (
    <section className="products-section section-space">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">Best Seller</p>
          <h2 className="section-title">Trending Products</h2>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div className="col-sm-6 col-lg-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;