import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/products');
  };

  return (
    <div className="about-container" style={{ paddingTop: '0px' }}>
      
      <section className="about-hero" style={{ marginBottom: '40px' }}>
        <h1 className="text-3xl font-bold text-center text-[#462C2F] mb-2 relative">About Us</h1>
        <p className="breadcrumb text-center" style={{ color: '#E16C5B', fontWeight: '600' }}>Our Story</p>
      </section>

      <section className="about-content">
        <div className="content-grid">
          
          {/* Left Column - Magazine Typography Fix */}
          <div className="content-left">
            <div className="our-story-tag" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <span className="line" style={{ width: '35px', height: '2px', background: '#E16C5B' }}></span> 
              <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px' }}>SINCE 2025</span>
            </div>
       <h2 className="main-title" style={{ 
  fontSize: 'clamp(20px, 4vw,20px)',
  lineHeight: '1.1', 
  color: '#3d1f1a', 
  fontWeight: '850', 
  letterSpacing: '-1.5px', 
  margin: '0 0 30px 0',
  whiteSpace: 'nowrap', 
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'flex-start',
  width: '100%'
}}>
  Redefining Your Shopping Experience with 
  <span style={{ color: '#E16C5B', marginLeft: '12px' }}>Quality & Style.</span>
</h2>
<p className="description-text" style={{ 
  fontSize: '17px', 
  lineHeight: '1.4', 
  color: '#5a4a47', 
  maxWidth: '500px',
  marginBottom: '20px',
  fontWeight: '400'
}}>
  <strong>ShopCart</strong> is where premium quality meets modern aesthetics. 
  Launched in 2025, we curate high-end collections for those who don't just shop, 
  but invest in style. Experience a world where every product tells a story 
  of craftsmanship and elegance.
</p>
            <div className="large-image-wrapper" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000" 
                alt="ShopCart Warehouse" 
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="content-right">
            <div className="small-images-grid">
              <div className="img-box">
                 <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=500" alt="Fashion" />
                 <div className="tags"><span>New Arrivals</span></div>
              </div>
              <div className="img-box">
                 <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=500" alt="Store" />
                 <div className="tags"><span>Our Store</span></div>
              </div>
            </div>

            <p className="description-text" style={{ fontSize: '17px', lineHeight: '1.8', color: '#5a4a47', marginTop: '20px' }}>
              At <strong>ShopCart</strong>, we believe that shopping should be more than just a transaction. 
              Our mission is to bring you the latest trends and high-quality products right to your doorstep.
            </p>

            <div className="stats-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '15px', 
              marginTop: '30px' 
            }}>
              {[
                { label: "Happy Customers", val: "50k+" },
                { label: "Premium Brands", val: "100+" },
                { label: "Expert Support", val: "24/7" },
                { label: "Cities Covered", val: "15+" }
              ].map((stat, index) => (
                <div key={index} className="stat-box" style={{
                  padding: '20px',
                  border: '1px solid #eee',
                  borderRadius: '12px',
                  textAlign: 'center',
                  background: '#fff',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                }}>
                  <h3 style={{ color: '#E16C5B', fontSize: '24px', fontWeight: '800', margin: '0' }}>{stat.val}</h3>
                  <p style={{ color: '#666', fontSize: '12px', margin: '5px 0 0 0', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="shop-now-cta" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '60px',
          width: '100%' 
        }}>
           <button 
             className="explore-btn" 
             onClick={handleExplore}
             style={{
               backgroundColor: '#462C2F',
               color: 'white',
               padding: '15px 45px',
               borderRadius: '50px',
               fontSize: '16px',
               fontWeight: '700',
               border: 'none',
               cursor: 'pointer',
               transition: 'all 0.3s ease',
               boxShadow: '0 10px 20px rgba(70, 44, 47, 0.2)'
             }}
             onMouseEnter={(e) => e.target.style.backgroundColor = '#E16C5B'}
             onMouseLeave={(e) => e.target.style.backgroundColor = '#462C2F'}
           >
             Explore Collections
           </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;