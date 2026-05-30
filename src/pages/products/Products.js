import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./products.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PLANS = [
  {
    key: "free",
    name: "Starter",
    price: "Free",
    priceSpan: "",
    desc: "Best to try the product",
    features: [
      "10 requests per day",
      "40 requests per month",
      "Basic AI model",
      "Average response times",
      "Email support",
      "Access to dashboard",
    ],
    featured: false,
  },
  {
    key: "basic",
    name: "Basic",
    price: "$4.25",
    priceSpan: "/month",
    desc: "Best for light daily usage",
    features: [
      "50 requests per day",
      "150 requests per month",
      "Standard AI models",
      "Fast response times",
      "Priority support",
      "Access to dashboard",
    ],
    featured: false,
  },
  {
    key: "pro",
    name: "Pro",
    price: "$6.75",
    priceSpan: "/month",
    desc: "Perfect for individuals",
    features: [
      "100 requests per day",
      "300 requests per month",
      "Advanced AI models",
      "Fast response times",
      "Priority support",
      "Advanced analytics",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    key: "unlimited",
    name: "Unlimited",
    price: "$17.76",
    priceSpan: "/month",
    desc: "Best for power users",
    features: [
      "300 requests per day",
      "1000 requests per month",
      "All AI models",
      "Fastest response times",
      "Dedicated support",
      "Advanced analytics",
    ],
    featured: false,
  },
];

function Products() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChoosePlan = (planKey) => {
    if (planKey === "free") {
      navigate(user ? "/dashboard" : "/signup");
      return;
    }
    if (!user) {
      navigate("/signup");
      return;
    }
    navigate("/subscriptions");
  };

  return (
    <>
      <Header />

      <section className="pricing-section">
        <div className="pricing-header">
          <h1 className="pricing-title">Pricing Plans</h1>
          <p className="pricing-subtitle">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              className={`pricing-card${plan.featured ? " featured" : ""}`}
            >
              {plan.badge && <div className="badge">{plan.badge}</div>}
              <h2 className="plan-name">{plan.name}</h2>
              <p className="plan-price">
                {plan.price}
                <span>{plan.priceSpan}</span>
              </p>
              <p className="plan-desc">{plan.desc}</p>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>- {f}</li>
                ))}
              </ul>
              <button
                className={`plan-btn${plan.featured ? " featured-btn" : ""}`}
                onClick={() => handleChoosePlan(plan.key)}
              >
                {user?.plan === plan.key ? "Current Plan" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;
