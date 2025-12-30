import { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaBell,
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";
// Naye icons address functionality ke liye
import { LuPlus, LuTrash2, LuPencil, LuMapPin } from "react-icons/lu"; 
import "../styles/Account.css";
import Profile from "./Profile";
import Cart from "./Cart";

export default function Account() {
  const [active, setActive] = useState("profile");

  return (
    <div className="page">
      <div className="account-container">

        {/* LEFT MENU */}
        <div className="account-sidebar">
          <h3>Account Settings</h3>

          <button onClick={() => setActive("profile")} className={active==="profile" ? "active" : ""}>
           <FaUser /> My Profile
          </button>

          <button onClick={() => setActive("address")} className={active==="address" ? "active" : ""}>
            <FaMapMarkerAlt /> Saved Addresses
          </button>

          <button onClick={() => setActive("orders")} className={active==="orders" ? "active" : ""}>
          <FaShoppingBag />  My Orders
          </button>

          <button onClick={() => setActive("notify")} className={active==="notify" ? "active" : ""}>
          <FaBell />  Notifications
          </button>

          <button onClick={() => setActive("help")} className={active==="help" ? "active" : ""}>
          <FaQuestionCircle />  Help Center
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="account-content">
          {active === "profile" && <MyProfile />}
          {active === "address" && <SavedAddresses />}
          {active === "orders" && <MyOrders />}
          {active === "language" && <Language />}
          {active === "notify" && <Notifications />}
          {active === "help" && <HelpCenter />}
        </div>
      </div>
    </div>
  );
}

/* ===== SUB COMPONENTS ===== */

function MyProfile() {
  return <Profile />;
}

/* YE RAHA ADDRESS WALA PART - MEESHO STYLE */
function SavedAddresses() {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Priya Deswal",
      type: "Home",
      phone: "9876543210",
      details: "H-No 123, Sector 15, Near Central Park, Gurgaon, Haryana - 122001"
    }
  ]);

  const [newAddress, setNewAddress] = useState({ name: '', phone: '', type: 'Home', details: '' });

  const handleSave = (e) => {
    e.preventDefault();
    if (newAddress.name && newAddress.details) {
      setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
      setShowForm(false);
      setNewAddress({ name: '', phone: '', type: 'Home', details: '' });
    }
  };

  return (
    <div className="addresses-section">
      <div className="section-header">
        <h2><LuMapPin /> Saved Addresses</h2>
        {!showForm && (
          <button className="add-btn" onClick={() => setShowForm(true)}>
            <LuPlus /> Add New Address
          </button>
        )}
      </div>

      {showForm ? (
        <form className="address-form" onSubmit={handleSave}>
          <h3>Add New Address</h3>
          <div className="form-grid">
            <input 
              type="text" placeholder="Full Name" required 
              onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
            />
            <input 
              type="text" placeholder="Phone Number" required 
              onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
            />
            <textarea 
              placeholder="Flat, House no., Area, Street, Sector, Village" required rows="3"
              onChange={(e) => setNewAddress({...newAddress, details: e.target.value})}
            />
            <div className="type-selector">
              <label>Address Type: </label>
              <select onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="save-btn">Save Address</button>
            <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="address-list">
          {addresses.map((addr) => (
            <div key={addr.id} className="address-item-card">
              <div className="addr-badge">{addr.type}</div>
              <div className="addr-info">
                <strong>{addr.name}</strong>
                <p>{addr.details}</p>
                <span>📞 {addr.phone}</span>
              </div>
              <div className="addr-actions">
                <button className="edit-icon"><LuPencil /></button>
                <button className="delete-icon" onClick={() => setAddresses(addresses.filter(a => a.id !== addr.id))}>
                  <LuTrash2 />
                </button> </div>  </div> ))} </div> )}   </div>
  );
}

function MyOrders() {
  return <Cart />;
}

function Notifications() {
  const [settings, setSettings] = useState({
    order: false,
    promo: false,
    sms: true,
    email: true,
    whatsapp: true,
  });

  const toggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <>
      <h2><FaBell /> Notification Settings</h2>
      <p className="sub-text">
        Manage how you receive notifications from us
      </p>

      <div className="notify-item">
        <span><FaShoppingBag /> Order Updates</span>
        <input type="checkbox" checked={settings.order} onChange={() => toggle("order")} />
      </div>

      <div className="notify-item">
        <span>🔥 Promotional Offers</span>
        <input type="checkbox" checked={settings.promo} onChange={() => toggle("promo")} />
      </div>

      <div className="notify-item">
        <span>📱 SMS Alerts</span>
        <input type="checkbox" checked={settings.sms} onChange={() => toggle("sms")} />
      </div>

      <div className="notify-item">
        <span>📩 Email Notifications</span>
        <input type="checkbox" checked={settings.email} onChange={() => toggle("email")} />
      </div>

      <div className="notify-item">
        <span><FaWhatsapp style={{ color: "#25D366" }} /> WhatsApp Updates</span>
        <input type="checkbox" checked={settings.whatsapp} onChange={() => toggle("whatsapp")} />
      </div>
    </>
  );
}

function HelpCenter() {
  const faqs = [
    {
      title: "📦 Orders",
      items: [
        {
          question: "How can I track my order?",
          answer: "You can track your order by going to 'My Orders', selecting the order you want to track, and clicking on 'Track Order'. You will see the live status and expected delivery date."
        },
        {
          question: "Can I cancel or return an order?",
          answer: "Yes! You can cancel an order before it is shipped, and return or replace items within 10 days of delivery via the 'My Orders' section."
        }
      ]
    },
    {
      title: "💳 Payments",
      items: [
        {
          question: "Which payment methods do you accept?",
          answer: "We accept multiple payment methods including UPI, Credit/Debit Cards, Net Banking, Wallets, and Cash on Delivery for your convenience."
        },
        {
          question: "How long does a refund take?",
          answer: "Refunds are processed within 7–10 business days after the returned product is received and verified by our team."
        }
      ]
    },
    {
      title: "🚚 Shipping & Delivery",
      items: [
        {
          question: "Do you provide international delivery?",
          answer: "Yes! We deliver to many countries worldwide. Shipping charges and estimated delivery times will vary based on the destination."
        },
        {
          question: "What is the typical delivery timeline?",
          answer: "Domestic deliveries usually take 3-7 business days. International deliveries may take 7-21 business days depending on the country."
        }
      ]
    },
    {
      title: "👤 Account",
      items: [
        {
          question: "How can I update my profile?",
          answer: "You can update your personal details such as name, email, phone number, and password under 'My Profile' in Account Settings."
        },
        {
          question: "How can I delete my account?",
          answer: "If you wish to delete your account, please contact our support team via email or WhatsApp and they will assist you."
        }
      ]
    }
  ];

  return (
    <>
      <h2><FaQuestionCircle /> Help Center</h2>
      <p className="sub-text">Click on a topic to view detailed answers</p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FaqAccordion key={index} faq={faq} />
        ))}
      </div>

      <div className="contact-support">
        <h4>Need more help?</h4>
        <p>📧 Email: <strong>support@shopcart.com</strong></p>
        <p>📞 Call: <strong>+91 98765 43210</strong></p>
        <p><FaWhatsapp style={{ color: "#25D366" }} /> WhatsApp Support Available</p>
      </div>
    </>
  );
}

function FaqAccordion({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{faq.title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="faq-answer">
          {faq.items.map((item, idx) => (
            <div key={idx} className="faq-detail">
              <strong>{item.question}</strong>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



