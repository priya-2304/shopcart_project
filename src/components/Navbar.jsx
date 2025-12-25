// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useStore } from "../context/StoreContext";
// import { FaShoppingCart, FaSearch, FaUserCircle, FaHeart, FaHome, FaBoxOpen, FaBars, FaInfoCircle,isSearchOpen, setIsSearchOpen, FaPhoneAlt } from "react-icons/fa";
// import "../styles/navbar.css";

// export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
//   const { totalQty, wishlist, search, setSearch } = useStore();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setProfileOpen(false);
//     navigate("/login");
//   };

//   const closeAll = () => {
//     setProfileOpen(false);
//     setMobileMenuOpen(false);
//     setIsSearchOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <div className="mobile-menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//           <FaBars />
//           {mobileMenuOpen && (
//             <div className="mob-sub-menu left-align">
//               <Link to="/about" onClick={closeAll}><FaInfoCircle /> About</Link>
//               <Link to="/contact" onClick={closeAll}><FaPhoneAlt /> Contact</Link>
//             </div>
//           )}
//         </div>

//         <Link to="/" className="logo" onClick={closeAll}>
//           <FaShoppingCart className="logo-icon" />
//           <span className="logo-text">Shopcart</span>
//         </Link>
//       </div>

//       <div className="nav-center desktop-only">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>

//       <div className="nav-right">
//         <div className= {`search-box ${isSearchOpen ? "open" : ""}`}>
//           <FaSearch onClick={() => setIsSearchOpen(!isSearchOpen)} style={{ cursor: "pointer" }} />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={{ display: isSearchOpen ? "block" : "none" }}
//           />
//         </div>

//         <Link to="/wishlist" className="icon-btn wishlist-top" onClick={closeAll}>
//           <FaHeart />
//           {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
//         </Link>

//         <Link to="/cart" className="icon-btn desktop-only cart-link-top top-cart-icon" onClick={closeAll}>
//           <FaShoppingCart />
//           {totalQty > 0 && <span className="badge">{totalQty}</span>}
//         </Link>

//         <div className="profile-wrapper desktop-only">
//           <FaUserCircle
//             className="profile-icon"
//             onClick={() => setProfileOpen(!profileOpen)}
//             style={{ cursor: "pointer", fontSize: "1.5rem" }}
//           />
//           {profileOpen && (
//             <div className="profile-dropdown">
//               <Link to="/account" onClick={closeAll}>My Profile</Link>
//               {isAuthenticated ? (
//                 <button onClick={handleLogout} className="logout-btn">Logout</button>
//               ) : (
//                 <Link to="/login" onClick={closeAll}>Login / Signup</Link>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* MOBILE BOTTOM NAVIGATION */}
//       <div className="mobile-bottom-nav">
//         <Link to="/" onClick={closeAll} className="mob-nav-item"><FaHome /> <span>Home</span></Link>
//         <Link to="/products" onClick={closeAll} className="mob-nav-item"><FaBoxOpen /> <span>Products</span></Link>
//         <Link to="/cart" onClick={closeAll} className="mob-nav-item">
//           <div className="mob-icon-wrapper">
//             <FaShoppingCart />
//             {totalQty > 0 && <span className="badge">{totalQty}</span>}
//           </div>
//           <span>Cart</span>
//         </Link>
        
//         {/* Responsive Profile Button */}
//         <div className="mob-nav-item" onClick={() => { setProfileOpen(!profileOpen); setMobileMenuOpen(false); }}>
//           <FaUserCircle /> <span>Profile</span>
//           {profileOpen && (
//             <div className="mob-sub-menu right-align active">
//               <Link to="/account" onClick={closeAll}>My Profile</Link>
//               {isAuthenticated ? (
//                 <button onClick={handleLogout} className="logout-btn">Logout</button>
//               ) : (
//                 <Link to="/login" onClick={closeAll}>Login / Signup</Link>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { FaShoppingCart, FaSearch, FaUserCircle, FaHeart, FaHome, FaBoxOpen, FaBars, FaInfoCircle, FaPhoneAlt, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const { totalQty, wishlist, search, setSearch } = useStore();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Yeh missing tha
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setProfileOpen(false);
    navigate("/login");
  };

  const closeAll = () => {
    setProfileOpen(false);
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="mobile-menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FaBars />
          {mobileMenuOpen && (
            <div className="mob-sub-menu left-align">
              <Link to="/about" onClick={closeAll}><FaInfoCircle /> About</Link>
              <Link to="/contact" onClick={closeAll}><FaPhoneAlt /> Contact</Link>
            </div>
          )}
        </div>

        <Link to="/" className="logo" onClick={closeAll}>
          <FaShoppingCart className="logo-icon" />
          <span className="logo-text">Shopcart</span>
        </Link>
      </div>

      <div className="nav-center desktop-only">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        {/* 1. Desktop Search (Sirf Desktop pe dikhega) */}
  <div className="search-box desktop-only">
    <FaSearch />
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* 2. Mobile Search (Sirf Mobile pe dikhega) */}
  <div className="mobile-search-wrapper">
    <FaSearch className="search-trigger" onClick={() => setIsSearchOpen(!isSearchOpen)} />
    {isSearchOpen && (
      <div className="expanded-search">
        <FaSearch className="inner-search-icon" />
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
        <FaTimes className="close-search" onClick={() => setIsSearchOpen(false)} />
      </div>
    )}
  </div>
        <Link to="/wishlist" className="icon-btn wishlist-top" onClick={closeAll}>
          <FaHeart />
          {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
        </Link>

        <Link to="/cart" className="icon-btn desktop-only cart-link-top top-cart-icon" onClick={closeAll}>
          <FaShoppingCart />
          {totalQty > 0 && <span className="badge">{totalQty}</span>}
        </Link>

        <div className="profile-wrapper desktop-only">
          <FaUserCircle
            className="profile-icon"
            onClick={() => setProfileOpen(!profileOpen)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          />
          {profileOpen && (
            <div className="profile-dropdown">
              <Link to="/account" onClick={closeAll}>My Profile</Link>
              {isAuthenticated ? (
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              ) : (
                <Link to="/login" onClick={closeAll}>Login / Signup</Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="mobile-bottom-nav">
        <Link to="/" onClick={closeAll} className="mob-nav-item"><FaHome /> <span>Home</span></Link>
        <Link to="/products" onClick={closeAll} className="mob-nav-item"><FaBoxOpen /> <span>Products</span></Link>
        <Link to="/cart" onClick={closeAll} className="mob-nav-item">
          <div className="mob-icon-wrapper">
            <FaShoppingCart />
            {totalQty > 0 && <span className="badge">{totalQty}</span>}
          </div>
          <span>Cart</span>
        </Link>
        
        <div className="mob-nav-item" onClick={() => { setProfileOpen(!profileOpen); setMobileMenuOpen(false); }}>
          <FaUserCircle /> <span>Profile</span>
          {profileOpen && (
            <div className="mob-sub-menu right-align active">
              <Link to="/account" onClick={closeAll}>My Profile</Link>
              {isAuthenticated ? (
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              ) : (
                <Link to="/login" onClick={closeAll}>Login / Signup</Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}