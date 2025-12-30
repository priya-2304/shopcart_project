import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaUserSecret, FaLock, FaGlobe } from 'react-icons/fa';

export default function PrivacyPolicy() {
  const themePrimary = "#E16C5B"; 
  const navigate = useNavigate(); 
  const themeDark = "#3d1f1a"; 

  return (
    // Pt-0 kiya hai taaki Navbar se gap na rahe
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0px 20px 60px 20px', fontFamily: 'poppins, sans-serif' }}>
      
      {/* Header Section - Spacing Reduced */}
      <header style={{ textAlign: 'center', marginBottom: '30px', paddingTop: '10px' }}>
        <h1 style={{ 
          fontSize: 'clamp(32px, 5vw, 52px)', 
          fontWeight: '900', 
          color: themeDark, 
          margin: '0', // Margin zero taaki gap na aaye
          lineHeight: '1.1' 
        }}>
          Privacy Policy
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
            Trust & Safety
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
          At <strong>ShopCart</strong>, we value your privacy above all. This policy explains how we collect, use, and protect your personal data when you use our platform for your shopping needs.
        </p>
      </div>

      <main>
        {/* Section 1: Information We Collect */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaUserSecret size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>1. Information Collection</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#5a4642', marginBottom: '20px' }}>
            We collect information that you provide directly to us, as well as data gathered automatically:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
            {[
              { title: "Account Details", desc: "Your full name, shipping address, email, and phone number." },
              { title: "Transaction Info", desc: "Secure payment tokens for UPI, Credit/Debit cards, and billing history." },
              { title: "Device Data", desc: "IP address, browser type, and operating system." },
              { title: "Preferences", desc: "Wishlist items, search history, and marketing settings." }
            ].map((item, idx) => (
              <li key={idx} style={{ padding: '15px', background: '#fff', border: '1px solid #eee', borderRadius: '10px' }}>
                <strong style={{ color: themePrimary, display: 'block', marginBottom: '5px', fontSize: '16px' }}>{item.title}</strong>
                <span style={{ color: '#777', fontSize: '13px' }}>{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Use of Information */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaGlobe size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>2. Use of Information</h2>
          </div>
          <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#5a4642' }}>
            <p style={{ marginBottom: '10px' }}>Specifically, we use your data for:</p>
            <ul style={{ marginLeft: '20px', listStyleType: 'circle' }}>
              <li>Fulfilling and tracking your product deliveries efficiently.</li>
              <li>Preventing fraudulent transactions and enhancing account security.</li>
              <li>Sending order updates and personalized recommendations.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Data Protection */}
        <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: themeDark, borderRadius: '15px', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <FaLock size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#fff', margin: 0 }}>3. Security Measures</h2>
          </div>
          <p style={{ fontSize: '15px', lineHeight: '1.7', opacity: '0.9' }}>
            We implement <strong>AES-256 bit encryption</strong> and SSL layers. We never store raw CVV or NetBanking passwords.
          </p>
        </section>

        {/* Section 4: Contact Us */}
        <section style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <FaShieldAlt size={40} color={themePrimary} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: themeDark, margin: '0 0 10px 0' }}>Any Questions?</h2>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>Our privacy team is here to help you with your data concerns.</p>
          <button onClick={() => navigate('/contact')}    style={{ backgroundColor: themePrimary, color: '#fff', padding: '12px 35px', borderRadius: '50px', border: 'none', fontWeight: '700', cursor: 'pointer', transition: '0.3s' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = themeDark}
                  onMouseLeave={(e) => e.target.style.backgroundColor = themePrimary}>
            Contact Privacy Officer
          </button>
        </section>
      </main>
    </div>
  );
}