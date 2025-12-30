import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";
import BackToTop from "../pages/BackToTop";
import "../styles/Products.css";
import { FaChevronDown, FaChevronUp, FaSlidersH } from "react-icons/fa"; // Added Icons

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/products.css"; 

export default function Products() {
  const { search } = useStore();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showSort, setShowSort] = useState(false);
  const [sortBy, setSortBy] = useState("Relevant");
  
  // Mobile Filter Toggle State
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) setSelectedCategory(cat);
    window.scrollTo(0, 0); // Scroll to top on load
  }, [location]);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "Low to High") return a.price - b.price;
      if (sortBy === "High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="products-page-container white-background">
      <div className="discover-header">
        <h2 className="main-title">DISCOVER <span className="highlight">COLLECTIONS</span> <span className="orange-line"></span></h2>
        <p className="description">Find your perfect style from our premium selection.</p>
      </div>

      <div className="products-layout-main">
        {/* SIDEBAR WITH MOBILE TOGGLE LOGIC */}
        <aside className="filter-sidebar-white">
          {/* Mobile Header: Click to toggle categories */}
          <div 
            className="sidebar-heading mobile-toggle-header" 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span><FaSlidersH /> FILTERS</span>
            <span className="mobile-chevron-icon">
              {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {/* This content will hide/show on mobile but stay visible on desktop */}
          <div className={`filter-content ${isFilterOpen ? 'mobile-show' : 'mobile-hide'}`}>
            <h4 className="section-label desktop-only-label">CATEGORY</h4>
            {filterTabs.map((tab) => (
              <label key={tab.id} className="filter-checkbox-row">
                <input 
                  type="checkbox" 
                  checked={selectedCategory === tab.id}
                  onChange={() => {
                    setSelectedCategory(tab.id);
                    // Mobile par category select karte hi dropdown band ho jaye (Optional)
                    if(window.innerWidth < 768) setIsFilterOpen(false);
                  }}
                />
                <span className="custom-box"></span>
                <span className="label-text">{tab.label}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* PRODUCTS AREA */}
        <main className="products-list-container">
          <div className="results-header-bar">
            <span className="product-count">Showing <b>{filteredProducts.length}</b> Products</span>
            
            <div className="sort-container">
              <button className="sort-toggle-btn" onClick={() => setShowSort(true)}>
                SORT BY: <b>{sortBy.toUpperCase()}</b> <FaChevronDown />
              </button>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="empty-msg">No products match your selection.</p>
            )}
          </div>
        </main>
      </div>

      {/* SORT MODAL (STAYS SAME) */}
      {showSort && (
        <div className="modal-backdrop" onClick={() => setShowSort(false)}>
          <div className="sort-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">SORT BY</div>
            {[
              {id: "Relevant", label: "Relevant"},
              {id: "Low to High", label: "Price: Low to High"},
              {id: "High to Low", label: "Price: High to Low"}
            ].map((opt) => (
              <div 
                key={opt.id} 
                className="sort-option-item" 
                onClick={() => { setSortBy(opt.id); setShowSort(false); }}
              >
                <span>{opt.label}</span>
                <div className={`custom-radio-circle ${sortBy === opt.id ? "checked" : ""}`}></div>
              </div>
            ))}
          </div>
        </div>
      )}
      <BackToTop />
    </div>
  );
}
