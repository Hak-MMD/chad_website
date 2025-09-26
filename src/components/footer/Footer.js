import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a target="_blank" href="mailto:betboost@gmail.com">
            <i>
              <FiMail />
            </i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/_betboost?igsh=OXk0cHVjdTF1d3Jw"
          >
            <i>
              <FaInstagram />
            </i>
          </a>
          <a target="_blank" href="#">
            <i>
              <FaTiktok />
            </i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {/* <li>
              <Link to="/subscriptions">Subscriptions</Link>
            </li> */}
            <li>
              <Link to="/policy">Policy</Link>
            </li>
          </ul>
        </div>

        <div className="row">Copyright © 2024 - 2025 ChadAI.</div>
      </div>
    </footer>
  );
}

export default Footer;
