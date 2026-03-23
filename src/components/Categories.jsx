import React from "react";

const categories = [
  {
    id: 1,
    title: "Men",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.DISYvYKBuiWLG4rDK90rAQHaND?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
];

const Categories = () => {
  return (
    <section className="categories-section section-space">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">Shop by Category</p>
          <h2 className="section-title">Featured Collections</h2>
        </div>

        <div className="row g-4">
          {categories.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="category-card">
                <img src={item.image} alt={item.title} />
                <div className="category-overlay">
                  <h3>{item.title}</h3>
                  <button className="btn category-btn">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;  
