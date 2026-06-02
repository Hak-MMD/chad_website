import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./dashboard.css";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import api from "../../api/axios";
import { Link } from "react-router-dom";

const PLAN_LABELS = {
  free: "Free",
  basic: "Basic",
  pro: "Pro",
  unlimited: "Unlimited",
};

const PLAN_PRICES = {
  free: "Free",
  basic: "$4.25 / month",
  pro: "$6.75 / month",
  unlimited: "$17.76 / month",
};

function DashboardSkeleton() {
  return (
    <>
      <div className="dash-grid">
        {[1, 2].map((i) => (
          <div key={i} className="dash-card">
            <div className="skeleton-box" style={{ height: "1rem", width: "55%", marginBottom: "14px" }} />
            <div className="skeleton-box" style={{ height: "2rem", width: "40%", marginBottom: "10px" }} />
            <div className="skeleton-box" style={{ height: "0.75rem", width: "75%" }} />
          </div>
        ))}
      </div>
      <div className="sub-card">
        <div className="skeleton-box" style={{ height: "1.25rem", width: "35%", marginBottom: "20px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="skeleton-box" style={{ height: "1.5rem", width: "120px", marginBottom: "10px" }} />
            <div className="skeleton-box" style={{ height: "1rem", width: "90px" }} />
          </div>
          <div className="skeleton-box" style={{ height: "38px", width: "110px", borderRadius: "8px" }} />
        </div>
      </div>
    </>
  );
}

function Dashboard() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get("/api/v2/auth/me")
      .then((res) => setData(res.data))
      .catch(() => {
        setError(true);
        showToast("Failed to load dashboard data. Please refresh.", "error");
      })
      .finally(() => setLoading(false));
  }, [showToast]);

  const planKey = user?.plan || "free";
  const planName = PLAN_LABELS[planKey];
  const planPrice = PLAN_PRICES[planKey];
  const usage = data?.usage;

  return (
    <>
      <Header />

      <section className="dash-section">
        <div className="dash-container">
          <h1 className="dash-title">Dashboard</h1>
          <p className="dash-subtitle">Your usage and plan overview</p>

          {loading ? (
            <DashboardSkeleton />
          ) : (
            !error &&
            usage && (
              <>
                <div className="dash-grid">
                  <div className="dash-card">
                    <h3>Daily Usage</h3>
                    <p className="dash-number">
                      {usage.dailyUsed} / {usage.dailyLimit}
                    </p>
                    <p className="dash-label">
                      {usage.dailyLimit - usage.dailyUsed} requests left today
                    </p>
                  </div>

                  <div className="dash-card">
                    <h3>Monthly Usage</h3>
                    <p className="dash-number">
                      {usage.monthlyUsed} / {usage.monthlyLimit}
                    </p>
                    <p className="dash-label">
                      {usage.monthlyLimit - usage.monthlyUsed} requests left
                      this month
                    </p>
                  </div>
                </div>

                <div className="sub-card">
                  <h2 className="sub-card-title">Current Plan</h2>
                  <div className="sub-plan-info">
                    <div>
                      <h3 className="plan-name">{planName}</h3>
                      <p className="plan-price">{planPrice}</p>
                    </div>
                    <Link to="/subscriptions">
                      <button className="sub-btn upgrade-btn">
                        Manage Plan
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;
