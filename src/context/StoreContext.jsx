import { createContext, useContext, useMemo, useState } from "react";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

export default function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  /* ===== CART ===== */
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { id: product.id, qty: 1, product }];
    });
  };

  const removeFromCart = (id, qtyToRemove = 1) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - qtyToRemove } : i))
        .filter((i) => i.qty > 0)
    );
  };

  /* ===== WISHLIST ===== */
  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  /* ===== ORDERS ===== */
  const placeOrder = (method = "cod") => {
    if (cart.length === 0) return;

    const newOrders = cart.map((i) => ({
      ...i.product,
      qty: i.qty,
      date: new Date().toLocaleString(),
      status: method === "cod" ? "Confirmed" : "Processing",
      orderId: Math.floor(Math.random() * 1000000),
    }));

    setOrders((prev) => [...prev, ...newOrders]);
    setCart([]);
  };

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      search,
      setSearch,
      totalQty,
      addToCart,
      removeFromCart,
      toggleWishlist,
      orders,
      setOrders,
      placeOrder,
    }),
    [cart, wishlist, search, orders]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
} 