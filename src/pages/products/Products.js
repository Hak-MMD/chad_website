import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./products.css";

function Products() {
  return (
    <>
      <Header isSignedIn={true} />

      <section className="pricing-section">
        <div className="pricing-header">
          <h1 className="pricing-title">Pricing Plans</h1>
          <p className="pricing-subtitle">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="pricing-grid">
          {/* Card 1 */}
          <div className="pricing-card">
            <h2 className="plan-name">Starter</h2>
            <p className="plan-price">
              $19<span>/month</span>
            </p>
            <p className="plan-desc">Perfect for individuals</p>

            <ul className="plan-features">
              <li>Basic features</li>
              <li>Email support</li>
              <li>Access to dashboard</li>
            </ul>

            <button className="plan-btn">Choose Plan</button>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="pricing-card featured">
            <div className="badge">Most Popular</div>

            <h2 className="plan-name">Pro</h2>
            <p className="plan-price">
              $49<span>/month</span>
            </p>
            <p className="plan-desc">Best for growing teams</p>

            <ul className="plan-features">
              <li>Everything in Starter</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
              <li>Team collaboration tools</li>
            </ul>

            <button className="plan-btn featured-btn">Choose Plan</button>
          </div>

          {/* Card 3 */}
          <div className="pricing-card">
            <h2 className="plan-name">Enterprise</h2>
            <p className="plan-price">
              $99<span>/month</span>
            </p>
            <p className="plan-desc">For large organizations</p>

            <ul className="plan-features">
              <li>Unlimited access</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
            </ul>

            <button className="plan-btn">Choose Plan</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;
