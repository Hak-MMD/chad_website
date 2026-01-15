import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./policy.css";

function Policy() {
  return (
    <>
      <Header />

      <section className="policy-section">
        <div className="policy-container">
          <h1 className="policy-title">Privacy & Policy</h1>
          <p className="policy-updated">
            Last updated: <strong>Sep. 25, 2025</strong>
          </p>

          <p className="policy-intro">
            Welcome to <strong>ChadAI</strong>. We value your trust and are
            committed to protecting your privacy and ensuring transparency in
            how we handle your data. This page outlines our policies regarding
            data collection, usage, security, and your rights.
          </p>

          <div className="policy-divider"></div>

          <h2>1. Data We Collect</h2>
          <p>When you use our Chrome extension and website, we may collect:</p>
          <ul>
            <li>
              <strong>Account Information</strong> – name, email, login
              credentials.
            </li>
            <li>
              <strong>Usage Data</strong> – chats, feature usage, page visits.
            </li>
            <li>
              <strong>Technical Data</strong> – browser type, OS, extension
              version.
            </li>
            <li>
              <strong>AI Requests</strong> – text or images you send to our AI.
            </li>
          </ul>

          <h2>2. How We Use Your Data</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our AI services.</li>
            <li>Respond to support requests.</li>
            <li>Monitor system performance and prevent abuse.</li>
            <li>Send important updates or security alerts.</li>
            <li>Analyze anonymized usage trends.</li>
          </ul>
          <p>
            <strong>We do not sell</strong> your data to third parties.
          </p>

          <h2>3. Data Sharing</h2>
          <p>We may share limited information with:</p>
          <ul>
            <li>
              <strong>Service Providers</strong> (e.g., OpenAI API).
            </li>
            <li>
              <strong>Legal Authorities</strong> when required.
            </li>
            <li>
              <strong>Analytics & Hosting Partners</strong> for performance.
            </li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement security measures including:</p>
          <ul>
            <li>Encrypted storage of sensitive data.</li>
            <li>Restricted access to authorized personnel.</li>
            <li>Continuous monitoring for vulnerabilities.</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>You may:</p>
          <ul>
            <li>Access or update your information.</li>
            <li>Request account deletion.</li>
            <li>Opt out of marketing emails.</li>
            <li>Contact us with privacy concerns.</li>
          </ul>
          <p>
            Email us at <strong>chadai.support@gmail.com</strong>.
          </p>

          <h2>6. Cookies & Tracking</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Improve browsing experience.</li>
            <li>Analyze traffic patterns.</li>
            <li>Remember preferences and sessions.</li>
          </ul>
          <p>You may disable cookies in your browser settings.</p>

          <h2>7. Third‑Party Services</h2>
          <p>
            Our extension uses third‑party services such as{" "}
            <strong>OpenAI API</strong>. These providers may have their own
            privacy policies.
          </p>

          <h2>8. Updates to This Policy</h2>
          <p>
            We may update this page periodically. Changes will be reflected with
            an updated date.
          </p>

          <h2>9. Contact Us</h2>
          <p>For questions or concerns:</p>
          <p>
            <strong>chadai.app@gmail.com</strong>
            <br />
            <strong>https://chad-ai-nd2k.onrender.com</strong>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Policy;
