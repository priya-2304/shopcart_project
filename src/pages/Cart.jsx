import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
  const { cart, addToCart, removeFromCart, placeOrder } = useStore();
  const navigate = useNavigate();
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
    placeOrder("online");
    setStep("confirmed");
  };

  // 1. ORDER CONFIRMED STEP
  if (step === "confirmed") {
    return (
      <div className="order-confirmed-full">
        <h2>✅ Order Confirmed!</h2>
        <p>Thank you for shopping with us.</p>
        <button className="back-home-btn" onClick={() => navigate('/products')}>Back to Home</button>
      </div>
    );
  }

  // 2. PAYMENT OPTIONS STEP
  if (step === "options") {
    return (
      <div className="checkout-options">
        <h2 className="step-heading">Select Payment Method</h2>
        <div className="payment-buttons">
          <button onClick={() => handlePaymentSelection("online")}>Online Payment</button>
          <button onClick={() => handlePaymentSelection("cod")}>Cash on Delivery</button>
        </div>
      </div>
    );
  }

  // 3. ONLINE PAYMENT DETAILS STEP
  if (step === "payment") {
    return (
      <div className="online-payment">
        <h2 className="step-heading">Choose Online Method</h2>
        <div className="payment-buttons">
          <button onClick={() => handleOnlinePayment("UPI")}>UPI</button>
          <button onClick={() => handleOnlinePayment("Card")}>Credit/Debit Card</button>
          <button onClick={() => handleOnlinePayment("Net Banking")}>Net Banking</button>
        </div>
      </div>
    );
  }

  // 4. EMPTY CART UI (As per image_c22ac8.png)
  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-card">
          <h2 className="empty-title">
            YOUR <span className="highlight-text">CART</span> 
            <span className="title-line"></span>
          </h2>
          <div className="empty-content">
            <p>Your collection starts here.</p>
            <button className="start-shopping-btn" onClick={() => navigate('/products')}>
              Explore Now...
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 5. MAIN CART PAGE (Header styled like image_c1416f.png)
  return (
    <div className="cart-page">
      <div className="section-header-premium" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '32px', fontWeight: '300', letterSpacing: '1px', 
          color: '#E16C5B', textTransform: 'uppercase' 
        }}>
          Your Cart
        </h2> 
        <div style={{ width: '40px', height: '1.5px', background: '#E16C5B', margin: '15px auto' }}></div>
      </div>

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
            <button onClick={() => removeAll(item)} className="remove-btn">Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="total">Total: ₹ {totalPrice}</div>
        <button className="checkout-btn" onClick={handleCheckoutClick}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}