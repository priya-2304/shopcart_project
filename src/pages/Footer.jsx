import {
  FaShoppingCart,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* BRAND / LOGO */}
        <div className="footer-col">
          <h2 className="footer-logo">
            <FaShoppingCart /> ShopCart
          </h2>
          <p>
            ShopCart is your trusted online shopping destination.
            Quality products, best prices, fast delivery.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* POLICIES */}
        <div className="footer-col">
          <h3>Policies</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/delivery-info">Delivery Info</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@shopcart.com</p>
          <p><FaMapMarkerAlt /> Sector 45, Gurgaon, Haryana, India</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2025 ShopCart — All Rights Reserved
      </div>
    </footer>
  );
}
