import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./profile.css";

function Profile() {
  return (
    <>
      <Header isSignedIn={true} />

      <section className="profile-section">
        <div className="profile-container">
          {/* Header */}
          <h1 className="profile-title">Your Profile</h1>
          <p className="profile-subtitle">Manage your account information</p>

          {/* Profile Card */}
          <div className="profile-card">
            {/* Avatar */}
            <div className="profile-avatar-block">
              <img
                src="https://i.pravatar.cc/200"
                alt="avatar"
                className="profile-avatar"
              />
              <button className="avatar-btn">Change Photo</button>
            </div>

            {/* Info */}
            <div className="profile-info">
              <div className="profile-field">
                <label>Full Name</label>
                <input type="text" value="John Doe" readOnly />
              </div>

              <div className="profile-field">
                <label>Email</label>
                <input type="email" value="john@example.com" readOnly />
              </div>

              <div className="profile-field">
                <label>Subscription Plan</label>
                <input type="text" value="Pro Monthly" readOnly />
              </div>

              <div className="profile-field">
                <label>Member Since</label>
                <input type="text" value="January 2025" readOnly />
              </div>

              <button className="profile-save-btn">Edit Profile</button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="profile-danger">
            <h3>Danger Zone</h3>
            <p>Deleting your account is permanent and cannot be undone.</p>
            <button className="delete-btn">Delete Account</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;
