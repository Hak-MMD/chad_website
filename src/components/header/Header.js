import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header({ isSignedIn = false, userAvatar }) {
  return (
    <nav className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img
            src={require("../../pages/images/icon.png")}
            alt="logo"
            className="logo-img"
          />
          <Link to="/" className="logo-text">
            ChadAI
          </Link>
        </div>

        {/* Mobile toggle */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="hamburger">
          &#9776;
        </label>

        {/* Menu */}
        <ul className="header-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/plans">Pricing</Link>
          </li>

          {!isSignedIn ? (
            <>
              <li className="header-btn sign-in">
                <Link to="/signin">Sign In</Link>
              </li>
              <li className="header-btn try-free">
                <Link to="/signup">Try for Free</Link>
              </li>
            </>
          ) : (
            <li className="user-avatar-wrapper">
              <img
                src={userAvatar || "https://i.pravatar.cc/150"}
                alt="user avatar"
                className="user-avatar"
              />

              {/* Dropdown */}
              <div className="avatar-dropdown">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/logout" className="logout">
                  Log Out
                </Link>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
