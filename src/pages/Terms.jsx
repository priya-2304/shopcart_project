import React from 'react';
import { FaGavel, FaShoppingCart, FaBan, FaTruck } from 'react-icons/fa';

export default function Terms() {
  const themePrimary = "#E16C5B"; // Tera primary theme color
  const themeDark = "#3d1f1a";    // Tera dark theme color

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0px 20px 60px 20px', fontFamily: 'poppins, sans-serif' }}>
      
      {/* Header Section - Spacing Fixed for Navbar */}
      <header style={{ textAlign: 'center', marginBottom: '30px', paddingTop: '10px' }}>
        <h1 style={{ 
          fontSize: 'clamp(32px, 5vw, 52px)', 
          fontWeight: '900', 
          color: themeDark, 
          margin: '0', 
          lineHeight: '1.1' 
        }}>
          Terms & Conditions
        </h1>
        
        <div style={{ marginTop: '8px' }}>
          <span style={{ 
            color: themePrimary, 
            fontWeight: '700', 
            fontSize: '13px', 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px',
            backgroundColor: '#fff5f4',
            padding: '4px 12px',
            borderRadius: '50px'
          }}>
            Legal Agreement
          </span>
        </div>

        <p style={{ color: '#888', fontSize: '12px', fontWeight: '500', marginTop: '12px' }}>
          Last Updated: <span style={{ color: themePrimary }}>December 30, 2025</span>
        </p>
      </header>

      {/* Intro Box */}
      <div style={{ 
        backgroundColor: '#fdfdfd', 
        borderLeft: `5px solid ${themePrimary}`, 
        padding: '25px', 
        marginBottom: '40px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)' 
      }}>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#5a4a47', margin: 0 }}>
          Welcome to <strong>ShopCart</strong>. By accessing this website, you agree to comply with and be bound by the following terms. Please read them carefully before making any purchases.
        </p>
      </div>

      <main>
        {/* Section 1: Usage of Site */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaGavel size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>1. Usage of Site</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#5a4642', marginBottom: '15px' }}>
            Unauthorized use of this website may give rise to a claim for damages or be a criminal offense. Your use of the site is subject to:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
            <li style={{ padding: '15px', background: '#fff', border: '1px solid #eee', borderRadius: '10px' }}>
              <strong style={{ color: themePrimary, display: 'block', marginBottom: '5px' }}>Eligibility</strong>
              <span style={{ color: '#777', fontSize: '13px' }}>You must be at least 18 years old or under adult supervision to use our services.</span>
            </li>
            <li style={{ padding: '15px', background: '#fff', border: '1px solid #eee', borderRadius: '10px' }}>
              <strong style={{ color: themePrimary, display: 'block', marginBottom: '5px' }}>Content Ownership</strong>
              <span style={{ color: '#777', fontSize: '13px' }}>All designs, graphics, and text are property of ShopCart and protected by law.</span>
            </li>
          </ul>
        </section>

        {/* Section 2: Orders & Payments */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaShoppingCart size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>2. Orders & Payments</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#5a4642' }}>
            By placing an order, you confirm that all payment details provided are valid and yours. 
          </p>
          <div style={{ backgroundColor: '#fff5f4', padding: '20px', borderRadius: '12px', marginTop: '15px' }}>
            <ul style={{ marginLeft: '20px', listStyleType: 'circle', color: '#5a4642', fontSize: '15px' }}>
              <li>We reserve the right to cancel orders for price errors or stock issues.</li>
              <li>Payments are processed securely via encrypted third-party gateways.</li>
              <li>Cancellations are only allowed within 2 hours of placing the order.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Delivery & Shipping */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaTruck size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>3. Shipping & Delivery</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#5a4642' }}>
            Delivery timelines are estimates. ShopCart is not liable for delays caused by courier services or weather conditions. Free delivery applies to eligible products only.
          </p>
        </section>

        {/* Section 4: Prohibited Activities */}
        <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: themeDark, borderRadius: '15px', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <FaBan size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#fff', margin: 0 }}>4. User Conduct</h2>
          </div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', opacity: '0.9' }}>
            Users are prohibited from using the site for any fraudulent purpose, uploading viruses, or scraping content. We reserve the right to block users who violate these policies.
          </p>
        </section>

        {/* Footer Note */}
        <section style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: themeDark, margin: '0 0 10px 0' }}>Need Legal Help?</h2>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>For specific legal inquiries, please contact our support desk.</p>
          <button 
            onClick={() => window.location.href = '/contact'}
            style={{ backgroundColor: themePrimary, color: '#fff', padding: '12px 35px', borderRadius: '50px', border: 'none', fontWeight: '700', cursor: 'pointer', transition: '0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = themeDark}
            onMouseLeave={(e) => e.target.style.backgroundColor = themePrimary}
          >
            Contact Support
          </button>
        </section>
      </main>
    </div>
  );
}