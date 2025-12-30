import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUndo, FaCheckCircle, FaExclamationTriangle, FaMoneyBillWave } from 'react-icons/fa';

export default function ReturnPolicy() {
  const themePrimary = "#E16C5B"; //
  const themeDark = "#3d1f1a";    //
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0px 20px 60px 20px', fontFamily: 'poppins, sans-serif' }}>
      
      {/* Header Section - Zero Gap Fix */}
      <header style={{ textAlign: 'center', marginBottom: '30px', paddingTop: '10px' }}>
        <h1 style={{ 
          fontSize: 'clamp(32px, 5vw, 52px)', 
          fontWeight: '900', 
          color: themeDark, 
          margin: '0', 
          lineHeight: '1.1' 
        }}>
          Return & Refund
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
            Easy Returns
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
          At <strong>ShopCart</strong>, we want you to be 100% satisfied. If your purchase isn't quite right, our return process is designed to be simple and transparent.
        </p>
      </div>

      <main>
        {/* Section 1: Return Eligibility */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaUndo size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>1. Return Eligibility</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#5a4642', marginBottom: '15px' }}>
            Items must be returned within <strong>7 days</strong> of delivery. To be eligible, items must be:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {['Unused & Unwashed', 'Original Packaging', 'All Tags Attached', 'No Perfume/Stains'].map((item, idx) => (
              <li key={idx} style={{ padding: '12px', background: '#fff', border: '1px solid #eee', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaCheckCircle color="#038d63" /> 
                <span style={{ color: '#5a4642', fontSize: '14px', fontWeight: '500' }}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Non-Returnable Alert Box */}
        <div style={{ 
          backgroundColor: themeDark, 
          padding: '25px', 
          borderRadius: '15px', 
          marginBottom: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          color: '#fff'
        }}>
          <FaExclamationTriangle size={40} color={themePrimary} />
          <div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', color: themePrimary }}>Strictly Non-Returnable</h4>
            <p style={{ margin: 0, opacity: '0.8', fontSize: '14px' }}>
              For hygiene reasons, <strong>Innerwear, Masks, and Jewelry</strong> cannot be returned or exchanged.
            </p>
          </div>
        </div>

        {/* Section 2: Refund Process */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <FaMoneyBillWave size={24} color={themePrimary} />
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: themeDark, margin: 0 }}>2. Refund Process</h2>
          </div>
          <div style={{ background: '#f9f9f9', padding: '25px', borderRadius: '12px', border: '1px solid #eee' }}>
            <p style={{ color: '#5a4642', lineHeight: '1.8', margin: 0 }}>
              Once we receive your item, it undergoes a <strong>48-hour quality check</strong>. After approval:
            </p>
            <ul style={{ marginTop: '15px', color: '#666', fontSize: '15px', lineHeight: '2' }}>
              <li><strong>Prepaid Orders:</strong> Refund credited to original payment mode (5-7 days).</li>
              <li><strong>COD Orders:</strong> Refund as ShopCart Wallet credits or Bank Transfer.</li>
              <li>Shipping charges are non-refundable.</li>
            </ul>
          </div>
        </section>

        {/* Contact Support */}
        <section style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: themeDark, margin: '0 0 10px 0' }}>Initiate a Return?</h2>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>Go to 'My Orders' section or contact our support team.</p>
          <button 
            onClick={() => navigate('/contact')}
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