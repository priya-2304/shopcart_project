import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";
import BackToTop from "../pages/BackToTop";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/products.css"; // Is file mein neeche wali CSS daal dena

export default function Products() {
  const { search } = useStore();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) setSelectedCategory(cat);
  }, [location]);

  const filterTabs = [
    { id: "all", label: "All Products" },
    { id: "men", label: "Mens" },
    { id: "women", label: "Womens" },
    { id: "kids", label: "Kids" },
    { id: "electronics", label: "Electronics" },
    { id: "beauty", label: "Beauty" },
    { id: "home", label: "Home" },
    { id: "sports", label: "Sports" },
    { id: "pets", label: "Pets" }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-container">
      <h2 className="products-title">
        {selectedCategory === "all" ? "All Products" : selectedCategory.toUpperCase() + " SECTION"}
        <span className="title-underline"></span>
      </h2>

      {/* HORIZONTAL SCROLLABLE CATEGORIES */}
      <div className="category-scroll-wrapper">
        <div className="category-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`filter-btn ${selectedCategory === tab.id ? "active-tab" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products-text">No products found in this category.</p>
      )}

      {/* SPACING FIXED GRID */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <BackToTop />
    </div>
  );
}
