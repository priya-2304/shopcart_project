import React, { useState } from 'react';
import { LuPhone, LuMail, LuMapPin, LuSend } from "react-icons/lu";
import '../styles/ContactUs.css';

const ContactUs = () => {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // Error State
  const [errors, setErrors] = useState({});
  // Success Message State
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Jaise hi user type kare, purana error hat jaye
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Please enter your message";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSent(false);
    } else {
      setErrors({});
      setIsSent(true);
      // Form Clear
      setFormData({ name: '', email: '', message: '' });
      // 3 second baad success message hatane ke liye
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p className="breadcrumb">We’re here to help! Feel free to get in touch with us anytime</p>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          
          <div className="contact-left">
            <div className="tagline"><span className="line"></span> GET IN TOUCH</div>
            <h2 className="main-title">
              Let's Start a <span className="highlight-text">Conversation</span> with ShopCart.
            </h2>
            <p className="description">
              Have questions about our collections or need help with your order? 
              Our team is here to provide you with the best shopping experience.
            </p>

            <div className="info-boxes-vertical">
              <div className="contact-card">
                <div className="icon-circle"><LuPhone /></div>
                <div><h4>Call Support</h4><p>+91 98765 43210</p></div>
              </div>
              <div className="contact-card">
                <div className="icon-circle"><LuMail /></div>
                <div><h4>Email Query</h4><p>support@shopcart.com</p></div>
              </div>
              <div className="contact-card">
                <div className="icon-circle"><LuMapPin /></div>
                <div><h4>Visit Warehouse</h4><p>Sector 45, Gurgaon, Haryana, India</p></div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="form-wrapper">
              <h3>Send us a Message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="input-group">
                  <label>Message</label>
                  <textarea 
                    name="message"
                    rows="5" 
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "input-error" : ""}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <LuSend />
                </button>

                {isSent && <div className="success-banner">Message sent successfully! ✓</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;