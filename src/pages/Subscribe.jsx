import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaCopy, FaTicketAlt } from 'react-icons/fa';

export default function Subscribe() {
  useEffect(() => {
    window.scrollTo(0, 0); // Page load hote hi upar le jayega
  }, []);
  
  const [copied, setCopied] = useState(false);
  const couponCode = "WELCOME10"; // Tera discount code

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#fff' }}>
      <FaCheckCircle size={70} color="#E16C5B" />
      <h1 style={{ color: '#462C2F', margin: '20px 0' }}>You're on the list!</h1>
      <p style={{ color: '#666', fontSize: '18px' }}>
        As promised, here is your <b>10% OFF</b> discount for your first order.
      </p>

      {/* Coupon Box */}
      <div style={{
        border: '2px dashed #E16C5B',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '15px 30px',
        margin: '30px 0',
        borderRadius: '10px',
        backgroundColor: '#FFF5F4'
      }}>
        <FaTicketAlt color="#E16C5B" style={{ marginRight: '10px' }} />
        <span style={{ fontSize: '24px', fontWeight: '800', color: '#462C2F', letterSpacing: '2px' }}>
          {couponCode}
        </span>
        <button 
          onClick={copyToClipboard}
          style={{
            marginLeft: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: copied ? 'green' : '#E16C5B'
          }}
        >
          {copied ? "COPIED!" : <FaCopy size={20} />}
        </button>
      </div>

      <br />
      <Link to="/products" 
        style={{ 
          display: 'inline-block', 
          backgroundColor: '#462C2F', 
          color: '#fff', 
          padding: '15px 40px', 
          borderRadius: '50px', 
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: '0.3s'
        }}>
        SHOP NOW WITH 10% OFF
      </Link>
    </div>
  );
}