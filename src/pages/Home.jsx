import { useState, useEffect } from "react";
import { useStore } from "../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../pages/BackToTop";
import "../styles/Home.css";

// Icons
import { 
  FaMale, FaFemale, FaChild, FaTv, FaMagic, FaHome, 
  FaSyncAlt, FaCheckCircle, FaHeadset 
} from "react-icons/fa";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";

const heroSlidesData = [
  { tag: "CASUAL VIBES", title: "Comfort Meets Style", desc: "Up to 40% Off on Premium Shirts & Hoodies.", img: slide1, btnText: "Check Offer 🏷️", bgColor: "#f4f7ff" },
  { tag: "ETHNIC WEAR", title: "Bridal & Party Lehengas", desc: "Exquisite designs for your special occasions. Flat 30% OFF.", img: slide5, btnText: "Explore Collection", bgColor: "#FAF3F0" },
  { tag: "DAILY ESSENTIALS", title: "Freshness Delivered", desc: "Stock up your kitchen with the best groceries and daily needs.", img: slide2, btnText: "Shop Groceries", bgColor: "#e8f5e9" },
  { tag: "SELF CARE", title: "Glow Like Before", desc: "Premium skincare products for your natural radiance.", img: slide4, btnText: "View Beauty Deals", bgColor: "#fce4ec" },
  { tag: "SNEAKER HEAD", title: "Step Into Style", desc: "Trending sneakers and footwear to elevate your look.", img: slide3, btnText: "Grab Your Pair", bgColor: "#f5f5f5" }
];

const categories = [
  { name: "Mens", slug: "men", Icon: FaMale },
  { name: "Womens", slug: "women", Icon: FaFemale },
  { name: "Kids", slug: "kids", Icon: FaChild },
  { name: "Electronics", slug: "electronics", Icon: FaTv },
  { name: "Beauty", slug: "beauty", Icon: FaMagic },
  { name: "Home & Life", slug: "home", Icon: FaHome },
];

export default function Home() {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const navigate = useNavigate();
  const [bestSellerIndex, setBestSellerIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [flashIndex, setFlashIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlidesData.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlashIndex((prev) => (prev + 1) % 3); 
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  const flashProducts = [
    { id: 101, label: "DAILY COMFORT", name: "Fashion Dress", image: "image.png" },
    { id: 102, label: "SMART WATCH", name: "Luxury Watch", image: "watch.png" },
    { id: 103, label: "PREMIUM BRANDS", name: "Beauty Combo", image: "shoes.png" },
    { id: 104, label: "LUXURY PICKS", name: "Smart Phone", image: "iphone.png" },
    { id: 105, label: "HOME TECH", name: "Luxury Fridge", image: "fridge.png" },
    { id: 106, label: "WEDDING", name: "Lehanga", image: "Lehanga.png" },
  ];

  const featuredProducts = [
     { id: 2, name: "Crop Tops", price: 699, image: "croptop.png" },
      { id: 3, name: "Men's Fashion", price: 899, image: "image.png" },
    { id: 4, name: "Lehangas", price: 2999, image: "Lehanga.png" },
    { id: 5, name: "Footwear", price: 2599, image: "shoes.png" },
    { id: 1, name: "Formal Shirt", price: 1799, image: "shirt1.png" },
    { id: 6, name: "Sandals", price: 599, image: "Sandals.png" },
  ];

  return (
    <div className="home-main-wrapper">
      <div className="top-theme-promo-banner">
        <p>Elevate Your Wardrobe with Our Exclusive Season Sale — <b>UP TO 50% OFF</b> 
          <Link to="/products" className="banner-cta-link"> EXPLORE COLLECTION </Link>
        </p>
      </div>

      <div className="home-welcome-header compact-header">
        <div className="header-content">
          <span className="premium-tag">PREMIUM SHOPPING DESTINATION</span>
          <h2>Discover Your Own Style</h2>
          <div className="header-line"></div>
        </div>
      </div>

      <section className="hero-modern-slider" style={{ backgroundColor: heroSlidesData[slideIndex].bgColor }}>
        <div className="slider-container">
          <div className="slider-left-content">
            <span className="casual-badge">🏷️ {heroSlidesData[slideIndex].tag}</span>
            <h1 className="hero-title">{heroSlidesData[slideIndex].title}</h1>
            <p className="hero-subtitle">{heroSlidesData[slideIndex].desc}</p>
            <button className="hero-cta-btn" onClick={() => navigate("/products")}>
              {heroSlidesData[slideIndex].btnText}
            </button>
          </div>
          <div className="slider-right-image">
            <img key={slideIndex} src={heroSlidesData[slideIndex].img} alt="Hero" className="fade-in-image" />
          </div>
          <div className="modern-dots">
            {heroSlidesData.map((_, i) => (
              <span key={i} className={`m-dot ${i === slideIndex ? "active" : ""}`}></span>
            ))}
          </div>
        </div>
      </section>

      <div className="popular-categories-container compact-categories" style={{ textAlign: 'center', padding: '60px 20px 20px' }}>
        <div className="section-header-premium">
          <h2 style={{ 
      fontSize: '25px', 
      fontWeight: '300', 
      letterSpacing: '1px', 
      color: '#E16C5B', 
      textTransform: 'uppercase', 
      marginBottom: '5px' 
    }}>Explore Popular Categories</h2>

      <p style={{ color: '#999', fontSize: '14px', maxWidth: '500px', margin: '0 auto', fontWeight: '400' }}>
      Handpicked collections just for you.
    </p>
    {/* Wo orange line jo screenshot mein hai */}
    <div style={{ width: '40px', height: '1.5px', background: '#E16C5B', margin: '15px auto 35px' }}></div>
          <Link to="/products" className="view-all-link">View All &gt;</Link>
        </div>
        <div className="categories-flex">
          {categories.map((cat, index) => (
            <Link to={`/products?category=${cat.slug}`} key={index} className="category-card-link">
              <div className="category-card">
                <div className="circle-img-box"><cat.Icon size={32} color="#E16C5B" /></div>
                <p>{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
       {/* --- FLASH SALE SECTION --- */}
<section className="theme-flash-sale-section compact-flash">
  <div className="flash-header">
    <div className="flash-title-box">
      <h2 style={{ 
        fontSize: '30px', 
        fontWeight: '700', 
        letterSpacing: '1px', 
        color: '#E16C5B', 
        textTransform: 'uppercase', 
        marginBottom: '5px' 
      }}>
        🔥 Exclusive Flash Sale
      </h2>
      <p style={{ color: '#999', fontSize: '14px', fontWeight: '200' }}>
        Grab your favorites before the time runs out!
      </p><div className="orange-separator"></div>
     </div>

    {/* Timer Unit */}
    <div className="flash-timer-wrapper">
      <div className="timer-unit-box"><span>{h.toString().padStart(2, '0')}</span><small>HRS</small></div>
      <div className="timer-unit-box"><span>{m.toString().padStart(2, '0')}</span><small>MIN</small></div>
      <div className="timer-unit-box"><span>{s.toString().padStart(2, '0')}</span><small>SEC</small></div>
    </div>
  </div>

        <div className="flash-slider-container" style={{ overflow: 'hidden' }}>
          <div className="flash-track" style={{ 
            transform: `translateX(-${flashIndex * 100}%)`,
            display: 'flex',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' 
          }}>
            {[0, 1, 2].map((slide) => (
              <div key={slide} className="flash-slide-group" style={{ 
                minWidth: '100%', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(6, 1fr)', 
                gap: '12px', 
                padding: '0 10px' 
              }}>
                {flashProducts.map((item) => (
                  <div key={`${slide}-${item.id}`} style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    aspectRatio: '1/1.2',
                    background: '#f0f0f0'
                  }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      padding: '12px 5px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-end'
                    }}>
                      <span style={{ color: 'white', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {item.label}
                      </span>
                      <button onClick={() => navigate(`/products`)} style={{ background: 'transparent', color: '#E16C5B', border: 'none', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}>
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flash-nav-dots">
          <span className={`f-dot ${flashIndex === 0 ? "active" : ""}`} onClick={() => setFlashIndex(0)}></span>
          <span className={`f-dot ${flashIndex === 1 ? "active" : ""}`} onClick={() => setFlashIndex(1)}></span>
          <span className={`f-dot ${flashIndex === 2 ? "active" : ""}`} onClick={() => setFlashIndex(2)}></span>
        </div>
      </section>
      
      {/* --- NEW: EXCLUSIVE BEST SELLERS SLIDER --- */}
      <section className="exclusive-best-sellers" style={{ 
        padding: "60px 20px", 
        backgroundColor: "#FFFFFF",
        position: "relative" 
      }}>
        <div className="section-header-premium" style={{ marginBottom: "40px",textAlign:'center', paddingLeft: "5%" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "700", color: '#E16C5B',letterSpacing: '1px',textTransform: 'uppercase', 
      marginBottom: '5px' }}>
            Best Sellers 
          </h2>
          <p style={{ color: '#999', fontSize: '14px', maxWidth: '600px', margin: '0 auto', fontWeight: '400' }}>
      Top-rated clothing & accessories picked by our customers.
    </p>
    {/* Wo signature orange line */}
    <div style={{ width: '40px', height: '1.5px', background: '#E16C5B', margin: '10px auto 0' }}></div>
        </div>

        <div className="best-seller-container" style={{ 
          position: "relative", 
          maxWidth: "95%", 
          margin: "0 auto",
          display: "flex",
          alignItems: "center"
        }}>
          {/* Left Arrow */}
          <button 
            onClick={() => setBestSellerIndex(prev => Math.max(prev - 1, 0))}
            style={{
              position: "absolute", left: "-20px", zIndex: 10,
              background: "#fff", border: "1px solid #ddd", borderRadius: "50%",
              width: "40px", height: "40px", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}> ❮ </button>

          <div className="best-seller-track" style={{ 
            display: "flex", 
            gap: "20px", 
            overflowX: "hidden", 
            scrollBehavior: "smooth",
            padding: "10px 0"
          }}>
            {featuredProducts.concat(featuredProducts).map((product, idx) => (
              <div key={idx} className="best-seller-card" style={{ 
                minWidth: "220px", 
                transform: `translateX(-${bestSellerIndex * 240}px)`,
                transition: "transform 0.5s ease",
                textAlign: "center"
              }}>
                <div style={{ 
                  height: "280px", overflow: "hidden", borderRadius: "15px", 
                  background: "#f9f9f9", marginBottom: "12px", position: "relative" 
                }}>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Link>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    style={{ position: "absolute", top: "10px", right: "10px", background: "white", border: "none", borderRadius: "50%", width: "30px", height: "30px", color: "#E16C5B", cursor: "pointer" }}
                  >♥</button>
                </div>
                <h4 style={{ fontSize: "15px", color: "#462C2F", fontWeight: "600", marginBottom: "5px" }}>{product.name}</h4>
                <p style={{ color: "#E16C5B", fontWeight: "800" }}>₹{product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  style={{ 
                    marginTop: "10px", width: "100%", padding: "8px", 
                    background: "#462C2F", color: "white", border: "none", borderRadius: "8px", fontWeight: "600", cursor: "pointer" 
                  }}>Add to Cart</button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => setBestSellerIndex(prev => prev + 1)}
            style={{
              position: "absolute", right: "-20px", zIndex: 10,
              background: "#fff", border: "1px solid #ddd", borderRadius: "50%",
              width: "40px", height: "40px", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}> ❯ </button>
        </div>
      </section>

      {/* --- FEATURED SECTION --- */}
      <div className="featured-section" style={{ textAlign: 'center', padding: '40px 20px 0px 20px' }}>
        <div className="section-header-premium" style={{ marginBottom: '-15px', paddingBottom :'0px'}}>
          <h2 style={{ fontSize: '32px', fontWeight: '300', letterSpacing: '1px', color: '#E16C5B', textTransform: 'uppercase', marginBottom: '5px' }}>
            All-Time Favourites
          </h2> 
          <p style={{ color: '#999', fontSize: '14px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.4', fontWeight: '400' }}>
            Your daily essentials. Our highest-rated designs.
          </p>
        </div>
        <div style={{ width: '40px', height: '1.5px', background: '#E16C5B', margin: '25px auto 0' }}></div>
        
        <div className="products-grid" style={{ justifyContent: 'center', marginTop: '30px' }}>
          {featuredProducts.map((product) => {
            const liked = wishlist.some((p) => p.id === product.id);
            return (
              <div key={product.id} className="product-card">
                <div className="product-img-wrapper relative">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <button className={liked ? "wish active" : "wish"} onClick={() => toggleWishlist(product)}>♥</button>
                </div>
                <h3>{product.name}</h3>
                <p className="price">₹ {product.price}</p>
                <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to="/products" className="view-all-btn">View All Products</Link>
      </div>

      <div className="home-policies-section">
        <div className="policy-item"><div className="policy-icon-circle"><FaSyncAlt /></div><h4>Easy Exchange</h4><p>We offer instant exchange policy</p></div>
        <div className="policy-item"><div className="policy-icon-circle"><FaCheckCircle /></div><h4>7 Days Return</h4><p>We provide 7 days free return</p></div>
        <div className="policy-item"><div className="policy-icon-circle"><FaHeadset /></div><h4>Best Support</h4><p>we provide 24/7 customer support</p></div>
      </div>

      <div className="home-subscribe-bar">
        <h3>Subscribe now & get <span>10% off</span></h3>
        <p>Join our community for the latest updates.</p>
        <form onSubmit={(e) => { e.preventDefault(); if(email) navigate("/subscribe-success"); }} className="sub-input-group">
          <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="sub-button-theme">GET MY DISCOUNT</button>
        </form>
      </div>
      <BackToTop /> 
    </div>
  );
}
