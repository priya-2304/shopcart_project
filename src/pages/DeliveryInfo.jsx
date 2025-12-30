import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTruck, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

export default function DeliveryInfo() {
  const themePrimary = "#E16C5B"; //
  const themeDark = "#3d1f1a";    //
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0px 20px 60px 20px', fontFamily: 'poppins, sans-serif' }}>
      
      {/* Header Section - Spacing Fixed */}
      <header style={{ textAlign: 'center', marginBottom: '30px', paddingTop: '10px' }}>
        <h1 style={{ 
          fontSize: 'clamp(32px, 5vw, 52px)', 
          fontWeight: '900', 
          color: themeDark, 
          margin: '0', 
          lineHeight: '1.1' 
        }}>
          Delivery Info
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
            Fast & Reliable Shipping
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
          At <strong>ShopCart</strong>, we ensure your orders reach you safely and on time. We partner with top-tier courier services to provide real-time tracking and secure handling.
        </p>
      </div>

      <main>
        {/* Section 1: Shipping Timelines */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
            <FaClock size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>1. Shipping Timelines</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {/* Standard Shipping */}
            <div style={{ padding: '25px', border: '1px solid #eee', borderRadius: '15px', background: '#fff' }}>
              <h3 style={{ color: themeDark, fontSize: '20px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaTruck color={themePrimary} /> Standard Shipping
              </h3>
              <p style={{ color: '#5a4a47', fontSize: '15px', lineHeight: '1.6' }}>
                Takes <strong>3-7 business days</strong>. Ideal for non-urgent orders with tracking updates via SMS and Email.
              </p>
            </div>

            {/* Express Shipping */}
            <div style={{ padding: '25px', border: `1px solid ${themePrimary}`, borderRadius: '15px', background: '#fff5f4' }}>
              <h3 style={{ color: themeDark, fontSize: '20px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaCheckCircle color={themePrimary} /> Express Delivery
              </h3>
              <p style={{ color: '#5a4a47', fontSize: '15px', lineHeight: '1.6' }}>
                Takes <strong>1-2 business days</strong>. Available in select metro cities for a small additional fee.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Order Tracking */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaMapMarkerAlt size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>2. Real-Time Tracking</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#5a4642' }}>
            Once your order is dispatched, you will receive a <strong>Tracking ID</strong>. You can monitor your package status through:
          </p>
          <ul style={{ marginTop: '15px', color: '#666', fontSize: '15px', lineHeight: '2', listStyleType: 'square', marginLeft: '20px' }}>
            <li>The 'My Orders' section on our website.</li>
            <li>Tracking links sent to your registered WhatsApp/Email.</li>
            <li>Directly on our courier partner's portal.</li>
          </ul>
        </section>

        {/* Shipping Policy Note */}
        <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: themeDark, borderRadius: '15px', color: '#fff' }}>
          <h3 style={{ fontSize: '20px', color: themePrimary, marginBottom: '10px' }}>Important Shipping Notes</h3>
          <ul style={{ fontSize: '14px', lineHeight: '1.7', opacity: '0.9', paddingLeft: '20px' }}>
            <li>Deliveries are not processed on Sundays or Public Holidays.</li>
            <li>Free delivery is applicable on orders above ₹499.</li>
            <li>Address changes are only possible before the order is dispatched.</li>
          </ul>
        </section>

        {/* Contact Support */}
        <section style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: themeDark, margin: '0 0 10px 0' }}>Where is my order?</h2>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>If your order is delayed beyond the estimated time, please reach out.</p>
          <button 
            onClick={() => navigate('/contact')}
            style={{ backgroundColor: themePrimary, color: '#fff', padding: '12px 35px', borderRadius: '50px', border: 'none', fontWeight: '700', cursor: 'pointer', transition: '0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = themeDark}
            onMouseLeave={(e) => e.target.style.backgroundColor = themePrimary}
          >
            Track with Support
          </button>
        </section>
      </main>
    </div>
  );
}