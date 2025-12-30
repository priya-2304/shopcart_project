import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../context/StoreContext";
import { products } from "../data/products"; 
import { FaStar, FaRegHeart, FaHeart, FaTruck, FaUndo, FaShieldAlt, FaArrowLeft, FaArrowRight, FaChevronDown, FaQuoteRight } from "react-icons/fa";
import BackToTop from "../pages/BackToTop";
import "../styles/productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation(); // URL path track karne ke liye
  const { addToCart, toggleWishlist, wishlist } = useStore();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImg, setMainImg] = useState("");
  const [userRating, setUserRating] = useState(4);
  const [activeTab, setActiveTab] = useState("description");

  // Jab bhi ID ya pathname badlega, ye effect chalega
  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImg(foundProduct.image);
    }

    // Related product pe click karte hi top pe bhejne ke liye
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Turant upar le jane ke liye
    });
  }, [id, pathname]); 

  if (!product) return <div className="p-loader" style={{padding: "150px", textAlign: "center"}}><h2>Loading...</h2></div>;

  const isLiked = wishlist ? wishlist.some((p) => p.id === product.id) : false;

  return (
    <div className="p-details-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      
      {/* TOP NAVIGATION */}
      <div className="p-top-nav-mobile" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button className="p-back-btn-modern" onClick={() => navigate("/products")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '50px', cursor: 'pointer' }}>
          <FaArrowLeft /> Back
        </button>
        <button onClick={() => navigate("/products")} style={{ color: '#E16C5B', border: 'none', background: 'none', fontWeight: '700', cursor: 'pointer' }}>
          Explore All <FaArrowRight />
        </button>
      </div>

      <div className="p-breadcrumb">Home / {product.category?.toUpperCase()} / {product.name}</div>
      
      {/* MAIN GRID */}
      <div className="p-main-grid">
        <div className="p-gallery-container">
          <div className="p-thumb-stack">
            {product.subImages && product.subImages.map((imgUrl, i) => (
              <div key={i} className="p-thumb-box" onClick={() => setMainImg(imgUrl)} style={{ border: mainImg === imgUrl ? '2px solid #E16C5B' : '1px solid #ddd', cursor: 'pointer' }} >
                <img src={`/${imgUrl}`} alt="thumb" />
              </div>
            ))}
          </div>
          <div className="p-main-display"><img src={`/${mainImg}`} alt={product.name} /></div>
        </div>

        <div className="p-info-container">
          <p style={{color: '#ed5d20ff', fontWeight: '700', fontSize: '12px'}}>SHOPCART EXCLUSIVE</p>
          <h1 className="p-product-title">{product.name}</h1>
          <div className="p-rating-interactive">
             <div className="p-stars-input">
               {[1,2,3,4,5].map(s => <FaStar key={s} className={userRating >= s ? "star-active" : "star-empty"} onClick={() => setUserRating(s)} style={{cursor:'pointer'}}/>)}
             </div>
             <span>({userRating}.0)</span>
          </div>
          <div className="p-price-row"><span className="p-price-val">₹{product.price}.00</span></div>
          
          <div className="p-selection-area">
            <label className="p-label-sm">Select Size</label>
            <div className="p-size-grid">
              {["S", "M", "L", "XL"].map(size => (
                <button key={size} className={`p-size-btn ${selectedSize === size ? 'active' : ''}`} onClick={() => setSelectedSize(size)}>{size}</button>
              ))}
            </div>
          </div>

          <div className="p-action-row">
            <div className="p-btn-group-main">
              <button className="p-btn-cart-custom" onClick={() => addToCart({...product, size: selectedSize})}>ADD TO BAG</button>
              <button className="p-btn-buy-custom" onClick={() => { addToCart({...product, size: selectedSize}); navigate("/cart"); }}>BUY NOW</button>
            </div>
            <button className={`p-btn-wish-round ${isLiked ? 'liked' : ''}`} onClick={() => toggleWishlist(product)}>
              {isLiked ? <FaHeart color="#E16C5B" /> : <FaRegHeart />}
            </button>
          </div>

          <div className="p-desktop-trust-bar">
            <div className="p-trust-item"><FaTruck /> <span>Fast Delivery</span></div>
            <div className="p-trust-item"><FaUndo /> <span>7 Day Returns</span></div>
            <div className="p-trust-item"><FaShieldAlt /> <span>Original Product</span></div>
          </div>

          <div className="p-accordion-section">
            <details open>
              <summary>Quick Overview <FaChevronDown /></summary>
              <div className="p-desc-content">Premium handcrafted quality for lasting comfort. Our commitment to quality ensures longevity.</div>
            </details>
          </div>

          {/* --- MOBILE-ONLY DESCRIPTION & REVIEWS SECTION --- */}
          <div className="p-mobile-only-details">
             <div className="p-mobile-tabs-nav">
                <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Description</button>
                <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews</button>
             </div>
             
             <div className="p-mobile-tab-panel">
                {activeTab === 'description' ? (
                  <p className="p-mobile-desc-text">Elevate your style with this premium piece. Crafted with attention to detail, this product ensures both durability and comfort. It's the perfect addition to your wardrobe.</p>
                ) : (
                  <div className="p-rating-centered-view">
                    <div className="p-rating-card-box">
                      <div className="p-rating-main-info">
                        <h2 className="p-big-num">4.0 <FaStar style={{color: '#3daf46ff'}} /></h2>
                        <p className="p-stats-sub">72 Ratings & 32 Reviews</p>
                      </div>
                      <div className="p-rating-bars-container">
                        {[
                          { l: "Excellent", c: 41, color: "#00b259" },
                          { l: "Very Good", c: 25, color: "#00b259" },
                          { l: "Good", c: 9, color: "#ffb400" },
                          { l: "Average", c: 7, color: "#ff844b" },
                          { l: "Poor", c: 2, color: "#ff3e3e" }
                        ].map((item, i) => (
                          <div className="p-bar-line" key={i}>
                            <span className="p-bar-label-txt">{item.l}</span>
                            <div className="p-bar-bg-track"><div className="p-bar-fill-color" style={{ width: `${(item.c/72)*100}%`, backgroundColor: item.color }}></div></div>
                            <span className="p-bar-count-txt">{item.c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
             </div>

             <div className="p-customer-love-mobile">
                <div className="p-section-header-center">
                  <h2 className="p-section-title">CUSTOMER <span style={{color: '#bd4949ff'}}>LOVE</span></h2>
                  <p className="p-section-sub">See what our customers say ❤️</p>
                </div>
                <div className="p-mobile-testi-list">
                  {[1, 2].map((item) => (
                    <div className="p-testi-card-mobile" key={item}>
                      <div className="p-testi-header">
                        <img src={`https://i.pravatar.cc/100?u=${item+10}`} alt="user" />
                        <div className="p-testi-meta">
                          <strong>{item === 1 ? "Rohan Das" : "Anjali Sharma"}</strong>
                          <span className="p-testi-subtext">{item === 1 ? "SOFTWARE ENGINEER" : "FASHION BLOGGER"}</span>
                        </div>
                        <FaQuoteRight className="p-quote-icon" />
                      </div>
                      <p>"Quality ekdum premium hai! Delivery super fast thi. Highly recommended to everyone!"</p>
                      <div className="p-testi-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* DESKTOP ONLY SECTIONS */}
      <div className="p-desktop-only-sections">
        <div className="p-tabs-container">
          <div className="p-tabs-nav">
            <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Description</button>
            <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews</button>
          </div>
          <div className="p-tab-panel">
            {activeTab === 'description' ? (
              <p>Elevate your style with this premium piece from ShopCart. Crafted with attention to detail, this product ensures both durability and comfort.</p>
            ) : (
              <div className="p-rating-centered-view">
                <div className="p-rating-card-box">
                  <div className="p-rating-main-info">
                    <h2 className="p-big-num">4.0 <FaStar className="p-green-star" /></h2>
                    <p className="p-stats-sub">72 Ratings & 32 Reviews</p>
                  </div>
                  <div className="p-rating-bars-container">
                    {[
                      { l: "Excellent", c: 41, color: "#00b259" },
                      { l: "Very Good", c: 25, color: "#00b259" },
                      { l: "Good", c: 9, color: "#ffb400" },
                      { l: "Average", c: 7, color: "#ff844b" },
                      { l: "Poor", c: 2, color: "#ff3e3e" }
                    ].map((item, i) => (
                      <div className="p-bar-line" key={i}>
                        <span className="p-bar-label-txt">{item.l}</span>
                        <div className="p-bar-bg-track">
                          <div className="p-bar-fill-color" style={{ width: `${(item.c/72)*100}%`, backgroundColor: item.color }}></div>
                        </div>
                        <span className="p-bar-count-txt">{item.c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-customer-love">
          <div className="p-section-header-center">
            <h2 className="p-section-title">CUSTOMER <span className="p-teal-text">LOVE</span> <span className="p-title-line"></span></h2>
            <p className="p-section-sub">See what our customers say ❤️</p>
          </div>
          <div className="p-testi-grid">
            {[1, 2, 3].map((item) => (
              <div className="p-testi-card" key={item}>
                <div className="p-testi-header">
                  <img src={`https://i.pravatar.cc/100?u=${item}`} alt="user" />
                  <div className="p-testi-meta">
                    <strong>Rohan Das</strong>
                    <span className="p-testi-subtext">SOFTWARE ENGINEER</span>
                  </div>
                  <FaQuoteRight className="p-quote-icon" />
                </div>
                <p>"ShopCart se maine jacket order ki thi, quality ekdum premium hai!"</p>
                <div className="p-testi-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
    <div className="p-suggestions-section">
        <div className="p-section-header-center">
          <h2 className="p-section-title">RELATED <span className="p-teal-text">PRODUCTS</span> <span className="p-title-line"></span></h2>
        </div>

        <div className="p-sugg-grid">
          {products?.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6).map(s => (
            <Link to={`/product/${s.id}`} key={s.id} className="sugg-card-anchor">
              <div className="sugg-card-box">
                <div className="sugg-img-holder"><img src={`/${s.image}`} alt={s.name} /></div>
                <div className="sugg-info-box">
                  {/* Title attribute se hover pe full name dikhega, class se truncate hoga */}
                  <h4 className="sugg-product-name" title={s.name}>{s.name}</h4>
                  <div className="sugg-price-flex">
                    <span className="sugg-price-tag">₹{s.price}</span>
                    <button className="sugg-desktop-btn">View Detail</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
     <BackToTop /> 
    </div>
  );
}