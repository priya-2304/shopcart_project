// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useStore } from "../context/StoreContext";
// import { FaShoppingCart, FaSearch, FaUserCircle, FaHeart, FaHome, FaBoxOpen, FaBars, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
// import "../styles/navbar.css";

// export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
//   const { totalQty, wishlist, search, setSearch } = useStore();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setProfileOpen(false);
//     navigate("/login");
//   };

//   const closeAll = () => {
//     setProfileOpen(false);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <Link to="/" className="logo" onClick={closeAll}>
//           <FaShoppingCart className="logo-icon" />
//           <span className="logo-text">Shopcart</span>
//         </Link>
//       </div>

//       {/* DESKTOP LINKS - Ye mobile par hide ho jayenge */}
//       <div className="nav-center desktop-only">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>

//       <div className="nav-right">
//         <div className="search-box">
//           <FaSearch />
//           <input
//             type="text"
//             placeholder="Search products"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
        
//         <Link to="/wishlist" className="icon-btn" onClick={closeAll}>
//           <FaHeart />
//           {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
//         </Link>
        
//         <Link to="/cart" className="icon-btn" onClick={closeAll}>
//           <FaShoppingCart />
//           {totalQty > 0 && <span className="badge">{totalQty}</span>}
//         </Link>

//         {/* DESKTOP PROFILE - Mobile par hide ho jayega */}
//         <div className="profile-wrapper desktop-only">
//           <FaUserCircle
//             className="profile-icon"
//             onClick={() => setProfileOpen(!profileOpen)}
//             style={{ cursor: "pointer", fontSize: "1.5rem" }}
//           />
//           {profileOpen && (
//             <div className="profile-dropdown active">
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

//       {/* --- MOBILE BOTTOM NAVIGATION --- */}
//       <div className="mobile-bottom-nav">
//         <Link to="/" onClick={closeAll} className="mob-nav-item">
//           <FaHome /> <span>Home</span>
//         </Link>
        
//         <Link to="/products" onClick={closeAll} className="mob-nav-item">
//           <FaBoxOpen /> <span>Products</span>
//         </Link>

//         {/* More Menu (About/Contact) */}
//         <div className="mob-nav-item" onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setProfileOpen(false); }}>
//           <FaBars /> <span>More</span>
//           {mobileMenuOpen && (
//             <div className="mob-sub-menu">
//               <Link to="/about" onClick={closeAll}><FaInfoCircle /> About</Link>
//               <Link to="/contact" onClick={closeAll}><FaPhoneAlt /> Contact</Link>
//             </div>
//           )}
//         </div>

//         {/* Mobile Profile Icon */}
//         <div className="mob-nav-item" onClick={() => { setProfileOpen(!profileOpen); setMobileMenuOpen(false); }}>
//           <FaUserCircle /> <span>Profile</span>
//           {profileOpen && (
//             <div className="mob-sub-menu">
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

// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useStore } from "../context/StoreContext";
// import { FaShoppingCart, FaSearch, FaUserCircle, FaHeart, FaHome, FaBoxOpen, FaBars, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
// import "../styles/navbar.css";

// export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
//   const { totalQty, wishlist, search, setSearch } = useStore();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setProfileOpen(false);
//     navigate("/login");
//   };

//   const closeAll = () => {
//     setProfileOpen(false);
//     setMobileMenuOpen(false);
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
//         {/* Search box hamesha upar rahega */}
//         <div className="search-box ">
//           <FaSearch />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <Link to="/wishlist" className="icon-btn wishlist-top" onClick={closeAll}>
//           <FaHeart />
//           {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
//         </Link>

//         {/* Is class 'cart-link-top' ka jaadu CSS mein hai */}
//         <Link to="/cart" className="icon-btn desktop-only cart-link-top" onClick={closeAll}>
//           <FaShoppingCart />
//           {totalQty > 0 && <span className="badge">{totalQty}</span>}
//         </Link>

//         <div className="profile-wrapper desktop-only">
//           <FaUserCircle
//             className="profile-icon"
//             onClick={() => setProfileOpen(!profileOpen)}
//             style={{ cursor: "pointer", fontSize: "1.5rem" }}
//           />
//         </div>
//       </div>

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
//         <div className="mob-nav-item" onClick={() => setProfileOpen(!profileOpen)}>
//           <FaUserCircle /> <span>Profile</span>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { FaShoppingCart, FaSearch, FaUserCircle, FaHeart, FaHome, FaBoxOpen, FaBars, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const { totalQty, wishlist, search, setSearch } = useStore();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setProfileOpen(false);
    navigate("/login");
  };

  const closeAll = () => {
    setProfileOpen(false);
    setMobileMenuOpen(false);
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
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
        
        {/* Responsive Profile Button */}
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