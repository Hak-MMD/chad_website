import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./subscriptions.css";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function Subscription() {
  return (
    <>
      <Header isSignedIn={true} />

      <section className="sub-section">
        <div className="sub-container">
          {/* Page Header */}
          <h1 className="sub-title">Your Subscription</h1>
          <p className="sub-subtitle">Manage your plan and billing settings</p>

          {/* Current Plan Card */}
          <div className="sub-card">
            <h2 className="sub-card-title">Current Plan</h2>

            <div className="sub-plan-info">
              <div>
                <h3 className="plan-name">Pro Monthly</h3>
                <p className="plan-price">$3.75 / month</p>
                <p className="plan-renew">
                  Renews on: <strong>Feb 15, 2026</strong>
                </p>
              </div>

              <button className="sub-btn upgrade-btn">Upgrade Plan</button>
            </div>
          </div>

          {/* Available Plans */}
          <div className="sub-card">
            {/* <h2 className="sub-card-title">Available Plans</h2> */}
            <div className="current-plan-header">
              {" "}
              <h2 className="sub-card-title">Available Plans</h2>{" "}
              <Link to={"/plans"} style={{ cursor: "pointer" }}>
                View all plans
                <FiExternalLink s />
              </Link>{" "}
            </div>
            <div className="plans-grid">
              <div className="plan-option">
                <h3>Starter</h3>
                <p className="option-price">Free</p>
                <p className="option-desc">Best to try the product</p>
                <button className="sub-btn">Choose Plan</button>
              </div>

              <div className="plan-option featured-plan">
                <h3>Pro</h3>
                <p className="option-price">$3.75 / month</p>
                <p className="option-desc">Best for individual users</p>
                <button className="sub-btn featured-btn">Current Plan</button>
              </div>

              <div className="plan-option">
                <h3>Enterprise</h3>
                <p className="option-price">$9.75 / month</p>
                <p className="option-desc">Best for growing teams usage</p>
                <button className="sub-btn">Choose Plan</button>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="sub-card">
            <h2 className="sub-card-title">Billing History</h2>

            <div className="billing-list">
              <div className="billing-item">
                <span>Jan 15, 2026</span>
                <span>$49</span>
              </div>
              <div className="billing-item">
                <span>Dec 15, 2025</span>
                <span>$49</span>
              </div>
              <div className="billing-item">
                <span>Nov 15, 2025</span>
                <span>$49</span>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="sub-danger">
            <h3>Cancel Subscription</h3>
            <p>
              Canceling your subscription will remove access to premium features
              at the end of your billing cycle.
            </p>
            <button className="cancel-btn">Cancel Subscription</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Subscription;
