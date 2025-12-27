import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../context/StoreContext";
import { products } from "../data/products"; 
import { FaStar, FaRegHeart, FaHeart, FaTruck, FaUndo, FaShieldAlt, FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import "../styles/productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImg, setMainImg] = useState("");
  const [userRating, setUserRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImg(foundProduct.image);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return (
    <div className="p-loader" style={{padding: "150px", textAlign: "center", color: "#462C2F"}}>
       <h2>Product Loading...</h2>
    </div>
  );

  const isLiked = wishlist ? wishlist.some((p) => p.id === product.id) : false;

  return (
    <div className="p-details-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      
      {/* TOP NAVIGATION */}
      <div className="p-top-nav-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <button className="p-back-btn-modern" onClick={() => navigate("/products")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '50px', cursor: 'pointer', color: '#462C2F', fontWeight: '600', transition: '0.3s' }}>
          <FaArrowLeft /> Back to Shop
        </button>
        <button onClick={() => navigate("/products")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#E16C5B', fontWeight: '700', fontSize: '15px' }}>
          Explore All <FaArrowRight />
        </button>
      </div>

      <div className="p-breadcrumb">Home / {product.category?.toUpperCase()} / {product.name}</div>
      
      {/* MAIN CONTENT AREA */}
      <div className="p-main-grid">
        <div className="p-gallery-container">
          <div className="p-thumb-stack">
            {product.subImages && product.subImages.map((imgUrl, i) => (
              <div key={i} className="p-thumb-box" onClick={() => setMainImg(imgUrl)} 
                style={{ cursor: 'pointer', border: mainImg === imgUrl ? '2px solid #E16C5B' : '1px solid #ddd' }} >
                <img src={`/${imgUrl}`} alt={`preview-${i}`} />
              </div>
            ))}
          </div>
          <div className="p-main-display">
            <img src={`/${mainImg}`} alt={product.name} />
          </div>
        </div>

        <div className="p-info-container">
          <p className="p-brand-label">SHOPCART EXCLUSIVE</p>
          <h1 className="p-product-title">{product.name}</h1>
          <div className="p-rating-interactive">
            <div className="p-stars-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className={(hoverRating || userRating) >= star ? "star-active" : "star-empty"} onClick={() => setUserRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} />
              ))}
            </div>
            <span className="p-rev-text">({userRating}.0)</span>
          </div>
          <div className="p-price-row">
            <span className="p-price-val">₹{product.price}.00</span>
          </div>
          <div className="p-selection-area">
            <label className="p-label-sm">Select Size</label>
            <div className="p-size-grid">
              {["S", "M", "L", "XL"].map(size => (
                <button key={size} className={`p-size-btn ${selectedSize === size ? 'active' : ''}`} onClick={() => setSelectedSize(size)}>{size}</button>
              ))}
            </div>
          </div>
          <div className="p-action-row">
            <div className="p-btn-group-mobile">
              <button className="p-btn-cart p-sleek" onClick={() => addToCart({...product, size: selectedSize})}>ADD TO BAG</button>
              <button className="p-btn-buy p-sleek" onClick={() => { addToCart({...product, size: selectedSize}); navigate("/cart"); }}>BUY NOW</button>
            </div>
            <button className={`p-btn-wish-round ${isLiked ? 'liked' : ''}`} onClick={() => toggleWishlist(product)}>
              {isLiked ? <FaHeart color="#E16C5B" /> : <FaRegHeart />}
            </button>
          </div>
          <div className="p-trust-grid">
            <div className="p-trust-item"><FaTruck /> <span>Free Shipping</span></div>
            <div className="p-trust-item"><FaUndo /> <span>7 Day Returns</span></div>
            <div className="p-trust-item"><FaShieldAlt /> <span>Secure</span></div>
          </div>
          <div className="p-accordion-section">
            <details open>
              <summary>Description <FaChevronDown /></summary>
              <div className="p-desc-content">Handcrafted with premium fabrics. This {product.name} is a top choice.</div>
            </details>
          </div>
        </div>
      </div>

      {/* --- RECOMMENDATIONS SECTION (6 ITEMS) --- */}
      <div className="p-suggestions-section">
        <div className="sugg-header-container">
          <div className="sugg-titles">
            <span className="sugg-badge">More from {product.category}</span>
            <h2 className="sugg-main-heading">Recommended For You</h2>
          </div>
          <Link to="/products" className="sugg-view-link">View Full Catalog</Link>
        </div>

        <div className="p-sugg-grid">
          {products
            .filter((item) => item.category === product.category && item.id !== product.id)
            .slice(0, 6) // Updated to 6 products
            .map((sugg) => (
              <Link to={`/product/${sugg.id}`} key={sugg.id} className="sugg-card-anchor">
                <div className="sugg-card-box">
                  <div className="sugg-img-holder">
                    <img src={`/${sugg.image}`} alt={sugg.name} />
                  </div>
                  <div className="sugg-info-box">
                    <h4>{sugg.name}</h4>
                    <p>Premium Quality {sugg.category}</p>
                    <div className="sugg-price-flex">
                      <span className="sugg-price-tag">₹{sugg.price}</span>
                      <button className="sugg-desktop-btn">View Detail</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
