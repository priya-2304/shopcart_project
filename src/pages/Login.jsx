import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link add kiya
import { FiMail, FiLock, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import "../styles/login.css";

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-branding">
          <div className="branding-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
            alt="Fashion" 
            className="branding-img"
          />
          <div className="branding-content">
            <div className="login-logo">
              <FiShoppingCart className="logo-icon-svg" />
              <span className="logo-name">SHOPCART</span>
            </div>
            <h2 className="branding-title">Premium Collections <br /> <span>Now Accessible.</span></h2>
          </div>
        </div>

        <div className="login-form-container">
          <div className="form-header">
            <h3>Welcome Back</h3>
            <p>Sign in to continue shopping</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <FiLock className="input-icon" />
                <input type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              {/* Forgot Password Link */}
              <Link to="/forgot-password" size="sm" className="forgot-pass">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-btn">
              SIGN IN <FiArrowRight className="btn-arrow" />
            </button>
          </form>

          <div className="form-footer">
            <p>New to Shopcart? 
              {/* Create Account Link */}
              <Link to="/signup" className="create-acc">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}