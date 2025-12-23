import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { FaShoppingCart, FaSearch, FaUserCircle, FaHeart } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const { totalQty, wishlist, search, setSearch } = useStore();
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setProfileOpen(false);
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo" onClick={() => setProfileOpen(false)}>
          <FaShoppingCart className="logo-icon" />
          <span className="logo-text">Shopcart</span>
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/" onClick={() => setProfileOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setProfileOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setProfileOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setProfileOpen(false)}>Contact</Link>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Link to="/wishlist" className="icon-btn" onClick={() => setProfileOpen(false)}>
          <FaHeart />
          {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
        </Link>
        <Link to="/cart" className="icon-btn" onClick={() => setProfileOpen(false)}>
          <FaShoppingCart />
          {totalQty > 0 && <span className="badge">{totalQty}</span>}
        </Link>
        {/* PROFILE SECTION - Wapas aa gaya! */}
        <div className="profile-wrapper">
          <FaUserCircle
            className="profile-icon"
            onClick={() => setProfileOpen(!profileOpen)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          />
          {profileOpen && (
            <div className="profile-dropdown active">
              {/* My Profile link hamesha dikhega (ya sirf login pe dikhana hai toh condition laga sakte ho) */}
              <Link to="/account" onClick={() => setProfileOpen(false)}>
                My Profile
              </Link>
              {isAuthenticated ? (
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              ) : (
                <Link to="/login" onClick={() => setProfileOpen(false)}>
                  Login / Signup
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}