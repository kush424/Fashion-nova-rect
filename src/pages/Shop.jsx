import React from "react";
import ProductCard from "../components/ProductCard";

const shopProducts = [
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
  {
    id: 5,
    title: "Urban White Shirt",
    category: "Casual",
    price: 55.0,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Luxury Brown Jacket",
    category: "Premium",
    price: 110.0,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
  },
];

const Shop = () => {
  return (
    <section className="shop-page section-space">
      <div className="container">
        <div className="page-header text-center">
          <p className="section-subtitle">Collections</p>
          <h1 className="section-title">Shop</h1>
        </div>

        <div className="row g-4">
          {shopProducts.map((product) => (
            <div className="col-sm-6 col-lg-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
