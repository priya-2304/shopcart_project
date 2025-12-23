import { useStore } from "../context/StoreContext";
import { Link } from "react-router-dom"; // Link import karna mat bhulna bhai
import { FaHeart, FaRegHeart , FaEye, FaShoppingBag, FaBolt } from "react-icons/fa"; // Thoda sundar icons ke liye

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const liked = wishlist?.some((p) => p.id === product.id);

  return (
    <div className="product-card">
      {/* IMAGE SECTION - Ab ye seedha detail page pe le jayega */}
      <div className="product-img-wrapper" style={{ position: 'relative' }}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || product.img}
            alt={product.name}
            className="card-img"
          />
        </Link>

        {/* Wishlist Button */}
        <button
          className={liked ? "wish active" : "wish"}
          style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      zIndex: 10,
      background: 'rgba(255,255,255,0.8)',
      border: 'none',
      borderRadius: '50%',
      padding: '5px',
      cursor: 'pointer'
    }}
          onClick={(e) => {
            e.preventDefault(); // Click handle karne ke liye
            toggleWishlist(product);
          }}
        >
          {liked ? <FaHeart color="#E16C5B" /> : <FaRegHeart />}
        </button>
      </div>

      {/* Product Info - Title par bhi Link laga diya */}
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 className="product-title-home">{product.name}</h3>
      </Link>
      
      <p className="price">₹ {product.price}</p>

      <div className="card-actions">
        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}