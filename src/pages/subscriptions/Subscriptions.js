import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./subscriptions.css";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

const PLANS = [
  {
    key: "free",
    name: "Starter",
    price: "Free",
    desc: "Best to try the product",
  },
  {
    key: "basic",
    name: "Basic",
    price: "$4.25 / month",
    desc: "Best for light daily usage",
  },
  {
    key: "pro",
    name: "Pro",
    price: "$6.75 / month",
    desc: "Best for individual users",
  },
  {
    key: "unlimited",
    name: "Unlimited",
    price: "$17.76 / month",
    desc: "Best for power users",
  },
];

const PLAN_LABELS = {
  free: "Starter (Free)",
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

function Subscriptions() {
  const { user } = useAuth();
  const [upgrading, setUpgrading] = useState(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const [error, setError] = useState("");

  const currentPlan = user?.plan || "free";

  const handleUpgrade = async (planKey) => {
    if (planKey === "free" || planKey === currentPlan) return;
    setError("");
    setUpgrading(planKey);
    try {
      const res = await api.post("/api/v2/billing/create-checkout-session", {
        plan: planKey,
        interval: "monthly",
      });
      window.location.href = res.data.url;
    } catch (err) {
      setError(
        err.response?.data?.error || "Failed to start checkout. Try again."
      );
      setUpgrading(null);
    }
  };

  const handleManageBilling = async () => {
    setError("");
    setPortalLoading(true);
    try {
      const res = await api.post("/api/v2/billing/create-portal-session");
      window.location.href = res.data.url;
    } catch (err) {
      setError(
        err.response?.data?.error || "Failed to open billing portal. Try again."
      );
      setPortalLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="sub-section">
        <div className="sub-container">
          <h1 className="sub-title">Your Subscription</h1>
          <p className="sub-subtitle">Manage your plan and billing settings</p>

          {error && <p className="auth-error">{error}</p>}

          {/* Current Plan Card */}
          <div className="sub-card">
            <h2 className="sub-card-title">Current Plan</h2>
            <div className="sub-plan-info">
              <div>
                <h3 className="plan-name">{PLAN_LABELS[currentPlan]}</h3>
                <p className="plan-price">{PLAN_PRICES[currentPlan]}</p>
              </div>
              {currentPlan !== "free" && (
                <button
                  className="sub-btn upgrade-btn"
                  onClick={handleManageBilling}
                  disabled={portalLoading}
                >
                  {portalLoading ? "Loading..." : "Manage Billing"}
                </button>
              )}
            </div>
          </div>

          {/* Available Plans */}
          <div className="sub-card">
            <div className="current-plan-header">
              <h2 className="sub-card-title">Available Plans</h2>
              <Link to="/plans" style={{ cursor: "pointer" }}>
                View all plans <FiExternalLink />
              </Link>
            </div>
            <div className="plans-grid">
              {PLANS.map((plan) => {
                const isCurrent = plan.key === currentPlan;
                const isDowngrade =
                  ["free", "basic"].includes(plan.key) &&
                  ["pro", "unlimited"].includes(currentPlan);
                return (
                  <div
                    key={plan.key}
                    className={`plan-option${isCurrent ? " featured-plan" : ""}`}
                  >
                    <h3>{plan.name}</h3>
                    <p className="option-price">{plan.price}</p>
                    <p className="option-desc">{plan.desc}</p>
                    <button
                      className={`sub-btn${isCurrent ? " featured-btn" : ""}`}
                      onClick={() => handleUpgrade(plan.key)}
                      disabled={
                        isCurrent ||
                        isDowngrade ||
                        upgrading === plan.key ||
                        plan.key === "free"
                      }
                    >
                      {isCurrent
                        ? "Current Plan"
                        : isDowngrade
                        ? "Downgrade via Portal"
                        : upgrading === plan.key
                        ? "Loading..."
                        : "Upgrade"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="sub-danger">
            <h3>Cancel Subscription</h3>
            <p>
              Canceling will remove access to premium features at the end of
              your billing cycle.
            </p>
            <button
              className="cancel-btn"
              onClick={handleManageBilling}
              disabled={portalLoading || currentPlan === "free"}
            >
              {portalLoading ? "Loading..." : "Cancel Subscription"}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Subscriptions;
