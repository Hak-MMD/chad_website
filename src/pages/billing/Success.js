import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./billing.css";

const PLAN_LABELS = {
  free: "Free",
  basic: "Basic",
  pro: "Pro",
  unlimited: "Unlimited",
};

function BillingSuccess() {
  const { user, refresh } = useAuth();
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    // Give the Stripe webhook ~2s to process then re-fetch the updated plan
    const timer = setTimeout(async () => {
      await refresh();
      setRefreshed(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="billing-result-wrapper">
        <div className="billing-result-card">
          <div className="billing-result-icon success-icon">✓</div>
          <h1>You&apos;re all set!</h1>
          <p>Your subscription is now active.</p>

          {!refreshed ? (
            <p style={{ fontSize: "0.875rem" }}>Confirming your plan...</p>
          ) : (
            user?.plan && user.plan !== "free" && (
              <p className="plan-badge">
                Plan: <strong>{PLAN_LABELS[user.plan]}</strong>
              </p>
            )
          )}

          <Link to="/dashboard" className="billing-btn">
            Go to Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BillingSuccess;
