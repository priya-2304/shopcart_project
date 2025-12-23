import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ReturnPolicy from "./pages/ReturnPolicy";
import DeliveryInfo from "./pages/DeliveryInfo";
import Account from "./pages/Account";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Subscribe from "./pages/Subscribe";
import ProductDetails from "./pages/ProductDetails";

function AppLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isAuthenticated);
  }, [isAuthenticated]);

  const authPages = ["/login", "/signup", "/forgot-password"];
  const isAuthPage = authPages.includes(location.pathname);

  // --- YE RHA TERA GUARD ---
  // Agar user login nahi hai aur kisi auth page pe bhi nahi hai, toh seedha Login bhejo
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {!isAuthPage && <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}

      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Protected Routes (Login ke baad hi dikhenge) */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscribe-success" element={<Subscribe />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />

        {/* Galat URL pe Login ya Home pe redirect */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}