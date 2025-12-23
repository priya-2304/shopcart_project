import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft, FiSend, FiShoppingCart } from 'react-icons/fi';
import "../styles/login.css"; // Same CSS use karenge

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Yahan email bhejne ka logic aayega
      setSubmitted(true);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        
        {/* Left Side: Branded Visual (Consistent with Login) */}
        <div className="login-branding">
          <div className="branding-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop" 
            alt="Security" 
            className="branding-img"
          />
          <div className="branding-content">
            <div className="login-logo">
              <FiShoppingCart className="logo-icon-svg" />
              <span className="logo-name">SHOPCART</span>
            </div>
            <h2 className="branding-title">
              Don't Worry, <br /> <span>We've Got You.</span>
            </h2>
            <p className="branding-text">
              Recover your account in just a few steps and get back to your shopping.
            </p>
          </div>
        </div>

        {/* Right Side: Reset Form */}
        <div className="login-form-container">
          {!submitted ? (
            <>
              <div className="form-header">
                <h3>Reset Password</h3>
                <p>Enter your email to receive a reset link</p>
              </div>

              <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                  <label>Email Address</label>
                  <div className="input-wrapper">
                    <FiMail className="input-icon" />
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="login-btn">
                  SEND RESET LINK <FiSend className="btn-arrow" />
                </button>
              </form>
            </>
          ) : (
            /* Success State after clicking Send */
            <div className="success-state text-center" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '50px', color: 'var(--theme-primary)', marginBottom: '20px' }}>
                <FiSend />
              </div>
              <h3 style={{ color: 'var(--theme-dark)', marginBottom: '10px' }}>Check Your Email</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                We've sent a recovery link to <strong>{email}</strong>. Please check your inbox.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="login-btn" 
                style={{ background: '#f0f0f0', color: 'var(--theme-dark)', boxShadow: 'none' }}
              >
                DIDN'T GET IT? RESEND
              </button>
            </div>
          )}

          <div className="form-footer">
            <Link to="/login" className="back-to-login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', color: 'var(--theme-dark)', fontWeight: 'bold' }}>
              <FiArrowLeft /> Back to Login
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}