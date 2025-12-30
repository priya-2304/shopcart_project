import { useState } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Priya Deswal",
    email: "priya123@gmail.com",
    phone: "+91 9876543210",
    gender: "Female",
    address: "New Delhi, India",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // 🔥 future me yahin API call jayegi
    console.log("Updated Profile:", user);
  };

  return (
    <div className="page">
      <div className="profile-card">
        <h2 className="profile-heading">My Profile</h2>

        {/* NAME */}
        <div className="profile-row">
          <label>Name</label>
          {isEditing ? (
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          ) : (
            <span>{user.name}</span>
          )}
        </div>

        {/* EMAIL */}
        <div className="profile-row">
          <label>Email</label>
          {isEditing ? (
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>

        {/* PHONE */}
        <div className="profile-row">
          <label>Phone</label>
          {isEditing ? (
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          ) : (
            <span>{user.phone}</span>
          )}
        </div>

        {/* GENDER */}
        <div className="profile-row">
          <label>Gender</label>
          {isEditing ? (
            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          ) : (
            <span>{user.gender}</span>
          )}
        </div>

        {/* ADDRESS */}
        <div className="profile-row">
          <label>Address</label>
          {isEditing ? (
            <textarea
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          ) : (
            <span>{user.address}</span>
          )}
        </div>

        {/* BUTTON */}
        {isEditing ? (
          <button className="profile-btn save" onClick={handleSave}>
            Save Changes
          </button>
        ) : (
          <button
            className="profile-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
