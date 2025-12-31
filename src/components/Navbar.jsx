import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { 
  FaShoppingCart, FaSearch, FaUserCircle, FaHeart, 
  FaHome, FaBoxOpen, FaBars, FaInfoCircle, FaPhoneAlt, FaTimes, FaSignOutAlt 
} from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar({ isAuthenticated, setIsAuthenticated, user }) {
  const { totalQty, wishlist, search, setSearch } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const renderProfileIcon = (className) => {
    if (isAuthenticated && (user?.name || user?.email)) {
      const initial = user?.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase();
      return <div className={`user-avatar-initial ${className}`}>{initial}</div>;
    }
    return <FaUserCircle className={`profile-icon-main ${className}`} />;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMobileMenuOpen(false);
    navigate("/login");
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
    setProfileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`menu-overlay ${mobileMenuOpen ? "active" : ""}`} onClick={closeAll}></div>

      {/* LEFT: Logo & Mobile Hamburger */}
      <div className="nav-left">
        <div className="mobile-menu-trigger" onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </div>
        <Link to="/" className="logo" onClick={closeAll}>
          <FaShoppingCart className="logo-icon" />
          <span className="logo-text">Shopcart</span>
        </Link>
      </div>

      {/* CENTER: Desktop Links Only */}
      <div className="desktop-nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* RIGHT: Search & Icons */}
      <div className="nav-right">
        <div className="desktop-search">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
        </div>

        {/* Mobile Search Trigger */}
        <div className="mobile-search-wrapper">
          <FaSearch className="search-trigger" onClick={() => setIsSearchOpen(true)} />
        </div>

        <div className="nav-right-icons">

          <Link to="/wishlist" className="icon-btn hide-on-mobile">
            <FaHeart />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </Link>
             
             <Link to="/cart" className="icon-btn hide-on-mobile">
            <FaShoppingCart />
            {totalQty > 0 && <span className="badge">{totalQty}</span>}
          </Link>
  
          <div className="profile-wrapper hide-on-mobile" onClick={() => setProfileOpen(!profileOpen)}>
            {renderProfileIcon("small")}
            {profileOpen && (
              <div className="profile-dropdown">
                <Link to="/account" onClick={closeAll}>My Profile</Link>
                {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- MOBILE DRAWER (Stays Exactly Same) --- */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="user-profile-section" onClick={() => { navigate("/account"); setMobileMenuOpen(false); }}>
            <FaUserCircle className="profile-icon-main" />
            <div className="user-info">
              <h3>Shopcart!</h3>
              <span className="manage-acc-link">Manage Account</span>
            </div>
          </div>
          <FaTimes className="close-drawer" onClick={() => setMobileMenuOpen(false)} />
        </div>
        <div className="drawer-links">
          <Link to="/" onClick={closeAll}><FaHome /> Home</Link>
          <Link to="/products" onClick={closeAll}><FaBoxOpen /> Products</Link>
          <Link to="/cart" onClick={closeAll}><FaShoppingCart /> My Cart</Link>
          <Link to="/wishlist" onClick={closeAll}><FaHeart /> Wishlist</Link>
          <div className="drawer-divider"></div>
          <Link to="/about" onClick={closeAll}><FaInfoCircle /> About Us</Link>
          <Link to="/contact" onClick={closeAll}><FaPhoneAlt /> Contact Us</Link>
        </div>
        <div className="drawer-footer">
          <button onClick={handleLogout} className="logout-drawer-btn">
            <FaSignOutAlt /> {isAuthenticated ? "Log out" : "Login / Sign Up"}
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="expanded-search-overlay">
          <div className="search-bar-inner">
            <FaSearch className="search-inner-icon" />
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} autoFocus />
            <FaTimes className="close-search-btn" onClick={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* --- MOBILE BOTTOM NAV (Stays Exactly Same) --- */}
      <div className="mobile-bottom-nav">
        <Link to="/" className="mob-nav-item"><FaHome /><span>Home</span></Link>
        <Link to="/products" className="mob-nav-item"><FaBoxOpen /><span>Products</span></Link>
        <Link to="/cart" className="mob-nav-item">
          <div className="mob-icon-wrapper"><FaShoppingCart />{totalQty > 0 && <span className="badge">{totalQty}</span>}</div>
          <span>Cart</span>
        </Link>
        <Link to="/account" className="mob-nav-item">{renderProfileIcon("tiny")}<span>Profile</span></Link>
      </div>
    </nav>
  );
}
