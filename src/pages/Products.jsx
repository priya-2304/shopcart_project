import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";
import BackToTop from "../pages/BackToTop";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="p-6 py-10 bg-[#EEEEEE] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#462C2F] mb-4 relative">
        {selectedCategory === "all" ? "All Products" : selectedCategory.toUpperCase() + " SECTION"}
        <span className="block w-20 h-1 bg-[#E16C5B] mx-auto mt-2 rounded-full"></span>
      </h2>

      {/* HORIZONTAL FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 mt-6">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            style={{
              padding: "10px 22px",
              borderRadius: "50px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor: selectedCategory === tab.id ? "#E16C5B" : "#FFFFFF",
              color: selectedCategory === tab.id ? "#FFFFFF" : "#462C2F",
              border: "1px solid #ddd",
              boxShadow: selectedCategory === tab.id ? "0 4px 10px rgba(225,108,91,0.3)" : "none"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-[#713C46] text-lg mt-10">No products found in this category.</p>
      )}

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <BackToTop />
    </div>
  );
}