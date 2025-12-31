import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
const scrollToTop = () => {
     window.scrollTo({ top: 0,left:0, behavior: "smooth" });
     document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
  return (
    <button
      onClick={scrollToTop}
     style={{
      display: visible ? "flex" : "none",
      position: "fixed",
      bottom: "30px",         
      right: "30px",         
      width: "50px",
      height: "50px",
      backgroundColor: "#713C46", 
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      fontSize: "24px",
      cursor: "pointer",
      zIndex: 9999999,       
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#713C46")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E16C5B")}
    >
      ↑
    </button>
  );
}
