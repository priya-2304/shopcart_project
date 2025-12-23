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
      
      {/* TOP NAVIGATION - Clean & Balanced */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <button onClick={() => navigate("/products")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '50px', cursor: 'pointer', color: '#462C2F', fontWeight: '600', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.borderColor = '#E16C5B'}>
          <FaArrowLeft /> Back to Shop
        </button>
        <button onClick={() => navigate("/products")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#E16C5B', fontWeight: '700', fontSize: '15px' }}>
          Explore All Collection <FaArrowRight />
        </button>
      </div>

      <div className="p-breadcrumb">Home / {product.category?.toUpperCase()} / {product.name}</div>
      
      {/* MAIN CONTENT AREA (Gallery + Info) */}
      <div className="p-main-grid">
        <div className="p-gallery-container">
          <div className="p-thumb-stack">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-thumb-box" onClick={() => setMainImg(product.image)}>
                <img src={`/${product.image}`} alt="preview" />
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
            <button className="p-btn-cart p-sleek" onClick={() => addToCart({...product, size: selectedSize})}>ADD TO BAG</button>
            <button className="p-btn-buy p-sleek" onClick={() => { addToCart({...product, size: selectedSize}); navigate("/cart"); }}>BUY NOW</button>
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

      {/* --- PREMIUM SUGGESTIONS SECTION (FULLY EXPANDED) --- */}
      <div className="p-suggestions-section" style={{ marginTop: '100px', borderTop: '2px solid #f0f0f0', paddingTop: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <span style={{ color: '#E16C5B', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>More from {product.category}</span>
            <h2 style={{ fontSize: '32px', color: '#462C2F', fontWeight: '800', marginTop: '5px' }}>Recommended For You</h2>
          </div>
          <Link to="/products" style={{ color: '#462C2F', fontWeight: '600', textDecoration: 'underline' }}>View Full Catalog</Link>
        </div>

        <div className="p-sugg-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Bada size cards
          gap: '30px' 
        }}>
          {products
            .filter((item) => item.category === product.category && item.id !== product.id)
            .slice(0, 4) // 4 Items for perfectly balanced grid
            .map((sugg) => (
              <Link to={`/product/${sugg.id}`} key={sugg.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transition: '0.3s' }}>
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                    <img src={`/${sugg.image}`} alt={sugg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '18px', margin: '0 0 5px', color: '#462C2F', fontWeight: '700' }}>{sugg.name}</h4>
                    <p style={{ color: '#888', fontSize: '14px', marginBottom: '15px' }}>Premium Quality {sugg.category}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#E16C5B' }}>₹{sugg.price}</span>
                      <button style={{ background: '#462C2F', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '8px', fontSize: '12px' }}>View Detail</button>
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