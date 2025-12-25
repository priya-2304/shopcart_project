import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";
import "../styles/cart.css";

export default function Wishlist() {
const { wishlist } = useStore();


return (
<div className="p-6">
<h2 className="wishlist-title">Wishlist</h2>
<div className="products-grid">
{wishlist.map(p => <ProductCard key={p.id} product={p} />)}
</div>
</div>
);
}