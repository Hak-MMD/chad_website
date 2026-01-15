import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function SignUp() {
  return (
    <>
      <Header />
      <div className="signup-wrapper">
        <div className="signup-card">
          <h1 className="signup-title">Create an Account</h1>
          <p className="signup-subtitle">Join ChadAI today</p>

          {/* Google Button */}
          <button className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          {/* Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          {/* Confirm Password
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="••••••••" />
          </div> */}

          <button className="signup-btn">Create Account</button>

          <p className="signup-footer">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
