import { useStore } from "../context/StoreContext";
import { Link } from "react-router-dom"; 
import { FaHeart, FaRegHeart , FaEye, FaShoppingBag, FaBolt } from "react-icons/fa"; 

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const liked = wishlist?.some((p) => p.id === product.id);

  return (
    <div className="product-card">
    
      <div className="product-img-wrapper" style={{ position: 'relative' }}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || product.img}
            alt={product.name}
            className="card-img"
          />
        </Link>

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
            e.preventDefault(); 
            toggleWishlist(product);
          }}
        >
          {liked ? <FaHeart color="#E16C5B" /> : <FaRegHeart />}
        </button>
      </div>
 <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
  <h3 className="product-title-home truncate-name" title={product.name}>
    {product.name}
  </h3>
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