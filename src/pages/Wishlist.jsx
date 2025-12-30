import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";
import Footer from "./Footer"; // Footer add karne ke liye
import "../styles/Cart.css";

export default function Wishlist() {
  const { wishlist } = useStore();

  return (
      <div className="wishlist-page-wrapper" style={{ minHeight: '70vh', padding: '40px 20px' }}>
        {/* Centered Header like YOUR CART */}
        <div className="empty-cart-container" style={{ minHeight: 'auto', padding: '0 0 40px 0' }}>
            <h2 className="empty-title">
              YOUR <span className="highlight-text">WISHLIST</span> 
              <span className="title-line"></span>
            </h2>
        </div>

        {wishlist.length > 0 ? (
          <div className="products-grid">
            {wishlist.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="empty-cart-card" style={{ margin: '0 auto' }}>
             <p className="empty-content-p" style={{letterSpacing: '2px', textTransform: 'uppercase', opacity: '0.6'}}>
             Add items to Your Wishlist..
             </p>
          </div>
        )}
      </div>
  );
}