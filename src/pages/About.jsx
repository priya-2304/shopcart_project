import React from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye import
import '../styles/About.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/products'); // Yahan apne product page ka path daal dena
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="text-3xl font-bold text-center text-[#462C2F] mb-8 relative">About Us</h1>
        <p className="breadcrumb">Our Story</p>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="content-grid">
          
          {/* Left Column */}
          <div className="content-left">
            <div className="our-story-tag">
              <span className="line"></span> SINCE 2025
            </div>
            <h2 className="main-title">
              Redefining Your Shopping Experience with 
              <span className="highlight-text"> Quality & Style.</span>
            </h2>
            <div className="large-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000" 
                alt="ShopCart Warehouse" 
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

            <p className="description-text">
              At <strong>ShopCart</strong>, we believe that shopping should be more than just a transaction. 
              Our mission is to bring you the latest trends and high-quality products right to your doorstep.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>50k+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Premium Brands</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Expert Support</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Cities Covered</p>
              </div>
            </div>

            {/* Link to Product Page */}
            <div className="shop-now-cta">
               <button className="explore-btn" onClick={handleExplore}>
                  Explore Collections
               </button>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default AboutUs;