import React from "react";
import "./footer.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand-block">
          <div className="footer-logo-wrap">
            <img
              src={require("../../pages/images/icon.png")}
              alt="logo"
              className="footer-logo"
            />
            <span className="footer-brand">ChadAI</span>
          </div>
          <p className="footer-tagline">Smart tools for smarter decisions.</p>
        </div>

        {/* Navigation */}
        <div className="footer-links-block">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/plans">Pricing</Link>
            </li>
            <li>
              <Link to="/policy">Policy</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials-block">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a
              href="mailto:betboost@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail />
            </a>
            <a
              href="https://www.instagram.com/_betboost?igsh=OXk0cHVjdTF1d3Jw"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 – 2026 ChadAI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
