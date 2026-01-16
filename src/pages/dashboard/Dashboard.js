import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./dashboard.css";

function Dashboard() {
  // Example data (replace with real API data)
  const usage = {
    dailyUsed: 42,
    dailyLimit: 100,
    monthlyUsed: 320,
    monthlyLimit: 1000,
    costUSD: 12.84,
    breakdown: {
      chat: 210,
      image: 60,
      analysis: 50,
    },
    source: {
      extension: 240,
      website: 80,
    },
  };

  return (
    <>
      <Header isSignedIn={true} />

      <section className="dash-section">
        <div className="dash-container">
          {/* Page Header */}
          <h1 className="dash-title">Dashboard</h1>
          <p className="dash-subtitle">Your usage, limits, and cost overview</p>

          {/* Stats Grid */}
          <div className="dash-grid">
            {/* Daily Usage */}
            <div className="dash-card">
              <h3>Daily Usage</h3>
              <p className="dash-number">
                {usage.dailyUsed} / {usage.dailyLimit}
              </p>
              <p className="dash-label">
                {usage.dailyLimit - usage.dailyUsed} requests left today
              </p>
            </div>

            {/* Monthly Usage */}
            <div className="dash-card">
              <h3>Monthly Usage</h3>
              <p className="dash-number">
                {usage.monthlyUsed} / {usage.monthlyLimit}
              </p>
              <p className="dash-label">
                {usage.monthlyLimit - usage.monthlyUsed} requests left this
                month
              </p>
            </div>

            {/* Cost */}
            <div className="dash-card">
              <h3>Total Cost</h3>
              <p className="dash-number">${usage.costUSD.toFixed(2)}</p>
              <p className="dash-label">USD spent on API usage</p>
            </div>
          </div>
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

              <button className="sub-btn upgrade-btn">Upgrade</button>
            </div>
          </div>

          {/* Breakdown Section */}
          <div className="dash-card wide">
            <h3>Usage Breakdown</h3>

            <div className="breakdown-grid">
              <div className="breakdown-item">
                <span>Chat Requests</span>
                <strong>{usage.breakdown.chat}</strong>
              </div>
              <div className="breakdown-item">
                <span>Image Requests</span>
                <strong>{usage.breakdown.image}</strong>
              </div>
              <div className="breakdown-item">
                <span>Analysis Requests</span>
                <strong>{usage.breakdown.analysis}</strong>
              </div>
            </div>
          </div>

          {/* Source Breakdown */}
          <div className="dash-card wide">
            <h3>Source Breakdown</h3>

            <div className="breakdown-grid">
              <div className="breakdown-item">
                <span>Chrome Extension</span>
                <strong>{usage.source.extension}</strong>
              </div>
              <div className="breakdown-item">
                <span>Website</span>
                <strong>{usage.source.website}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;
