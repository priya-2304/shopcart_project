import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 100px (less strict)
      if (window.scrollY > 100) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: visible ? "flex" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#E16C5B", // primary theme color
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "2rem",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#713C46")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E16C5B")}
    >
      ↑
    </button>
  );
}
