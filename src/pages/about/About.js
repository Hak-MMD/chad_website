import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./about.css";

function About() {
  return (
    <>
      <Header />

      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Learn more about our mission, process, and what makes us different.
          </p>

          <div className="about-divider"></div>

          {/* Section 1 */}
          <div className="about-card">
            <h2>What do we do?</h2>
            <p>
              At BetBoost, we provide affordable and consistently successful
              betting tips. Our experts specialize in Basketball (NBA) and major
              soccer leagues including the Premier League, Bundesliga, LaLiga,
              MLS, and the UEFA Champions League. Every day, we spend 4–6 hours
              analyzing matchups and running simulations across 4,000+ potential
              outcomes to deliver the most accurate predictions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="about-card">
            <h2>How much do our services cost?</h2>
            <p>
              We believe in fair pricing. For 3–7 high‑quality betting tips per
              contest, we charge only <strong>$24.99 weekly</strong> or{" "}
              <strong>$84.99 monthly</strong>
              (Best Value). No hidden fees — just reliable insights.
            </p>
          </div>

          {/* Section 3 */}
          <div className="about-card">
            <h2>How does the betting tips process work?</h2>
            <p>
              About one hour before each contest begins, we send out 3–7 curated
              betting tips for basketball and soccer. These are delivered
              through Instagram Stories to our private channel for subscribed
              members.
            </p>
          </div>

          {/* Section 4 */}
          <div className="about-card">
            <h2>What happens if we lose?</h2>
            <p>
              Losses are rare — BetBoost maintains a{" "}
              <strong>75.3% success rate</strong> on NBA tips and{" "}
              <strong>73.2%</strong> on soccer predictions. In our first five
              months, clients earned a combined profit of <strong>$7.3K</strong>
              . Still, betting always carries risk. We ask for trust in the
              process, as long‑term consistency is where our service truly
              shines.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
