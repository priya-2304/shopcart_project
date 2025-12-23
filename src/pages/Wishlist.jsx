import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";


export default function Wishlist() {
const { wishlist } = useStore();


return (
<div className="p-6">
<h2 className="text-3xl font-bold text-center text-[#462C2F] mb-8 relative">Wishlist</h2>
<div className="products-grid">
{wishlist.map(p => <ProductCard key={p.id} product={p} />)}
</div>
</div>
);
}