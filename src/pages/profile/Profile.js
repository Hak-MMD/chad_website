import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./profile.css";
import api from "../../api/axios";

const PLAN_LABELS = {
  free: "Free",
  basic: "Basic",
  pro: "Pro",
  unlimited: "Unlimited",
};

function ProfileSkeleton() {
  return (
    <div className="profile-card">
      <div className="profile-avatar-block">
        <div
          className="skeleton-box profile-avatar"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="profile-info">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="profile-field">
            <div
              className="skeleton-box"
              style={{ height: "0.75rem", width: "30%", marginBottom: "8px" }}
            />
            <div
              className="skeleton-box"
              style={{ height: "2.5rem", width: "100%", borderRadius: "6px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/api/v2/auth/me")
      .then((res) => setProfile(res.data.user))
      .catch(() => setError("Failed to load profile."))
      .finally(() => setLoading(false));
  }, []);

  const memberSince = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "—";

  return (
    <>
      <Header />

      <section className="profile-section">
        <div className="profile-container">
          <h1 className="profile-title">Your Profile</h1>
          <p className="profile-subtitle">Manage your account information</p>

          {error && <p className="auth-error">{error}</p>}

          {loading ? (
            <ProfileSkeleton />
          ) : (
            !error &&
            profile && (
              <div className="profile-card">
                <div className="profile-avatar-block">
                  <img
                    src={`https://i.pravatar.cc/200?u=${profile._id}`}
                    alt="avatar"
                    className="profile-avatar"
                  />
                </div>

                <div className="profile-info">
                  <div className="profile-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={profile.name || "—"}
                      readOnly
                    />
                  </div>

                  <div className="profile-field">
                    <label>Email</label>
                    <input type="email" value={profile.email} readOnly />
                  </div>

                  <div className="profile-field">
                    <label>Subscription Plan</label>
                    <input
                      type="text"
                      value={PLAN_LABELS[profile.plan] || "Free"}
                      readOnly
                    />
                  </div>

                  <div className="profile-field">
                    <label>Member Since</label>
                    <input type="text" value={memberSince} readOnly />
                  </div>
                </div>
              </div>
            )
          )}

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
