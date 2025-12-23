import { useState } from "react";
import { useStore } from "../context/StoreContext";
import "../styles/cart.css";

export default function Cart() {
  const { cart, addToCart, removeFromCart, placeOrder } = useStore();
  const [step, setStep] = useState("cart"); // cart, options, payment, confirmed
  const [paymentMethod, setPaymentMethod] = useState("");

  const increment = (product) => addToCart(product);
  const decrement = (product) => removeFromCart(product.id);
  const removeAll = (product) => removeFromCart(product.id, product.qty);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );

  const handleCheckoutClick = () => setStep("options");

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
    if (method === "cod") {
      placeOrder("cod");
      setStep("confirmed");
    } else {
      setStep("payment");
    }
  };

  const handleOnlinePayment = (method) => {
    console.log("Paying with:", method);
    placeOrder("online");
    setStep("confirmed");
  };

  // ✅ Step rendering BEFORE empty cart check
  if (step === "confirmed") {
    return (
      <div className="order-confirmed-full">
        <h2>✅ Order Confirmed!</h2>
        <p>Thank you for shopping with us.</p>
      </div>
    );
  }

  if (step === "options") {
    return (
      <div className="checkout-options">
        <h2>Select Payment Method</h2>
        <div className="payment-buttons">
          <button onClick={() => handlePaymentSelection("online")}>
            Online Payment
          </button>
          <button onClick={() => handlePaymentSelection("cod")}>
            Cash on Delivery
          </button>
        </div>
      </div>
    );
  }

  if (step === "payment") {
    return (
      <div className="online-payment">
        <h2>Choose Online Payment Method</h2>
        <div className="payment-buttons">
          <button onClick={() => handleOnlinePayment("UPI")}>UPI</button>
          <button onClick={() => handleOnlinePayment("Credit Card")}>
            Credit Card
          </button>
          <button onClick={() => handleOnlinePayment("Debit Card")}>
            Debit Card
          </button>
          <button onClick={() => handleOnlinePayment("Net Banking")}>
            Net Banking
          </button>
        </div>
      </div>
    );
  }

  // ✅ Only show empty cart message if step is "cart"
  if (cart.length === 0) {
    return <p className="empty-cart">Your cart is empty!</p>;
  }

  // Default: Cart page
  return (
    <div className="cart-page">
      <h2 className="text-3xl font-bold text-center text-[#462C2F] mb-8 relative">Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.product.image || item.product.img}
              alt={item.product.name}
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <h3>{item.product.name}</h3>
              <p className="price">₹ {item.product.price}</p>
            </div>
            <div className="cart-qty">
              <button onClick={() => decrement(item)} className="qty-btn">-</button>
              <span className="qty-num">{item.qty}</span>
              <button onClick={() => increment(item.product)} className="qty-btn">+</button>
            </div>
            <button onClick={() => removeAll(item)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="total">Total: ₹ {totalPrice}</div>
        <button className="checkout-btn" onClick={handleCheckoutClick}>
          Checkout
        </button>
      </div>
    </div>
  );
}
