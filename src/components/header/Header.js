import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logoImg from "../../pages/images/icon.png";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src={logoImg} alt="logo" className="logo-img" />
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

          {!user ? (
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
                src={user.avatar || "https://i.pravatar.cc/150"}
                alt="user avatar"
                className="user-avatar"
              />
              <div className="avatar-dropdown">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/subscriptions">Subscriptions</Link>
                <button onClick={handleLogout} className="logout">
                  Log Out
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
