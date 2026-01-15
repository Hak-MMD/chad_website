import React from "react";
import "./verify.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function VerifyEmail() {
  return (
    <>
      <Header />
      <div className="verify-wrapper">
        <div className="verify-card">
          <h1 className="verify-title">Verify Your Email</h1>
          <p className="verify-subtitle">
            Enter the 6‑digit code we sent to your email
          </p>

          {/* Code Inputs */}
          <div className="code-inputs">
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
          </div>

          <button className="verify-btn">Verify Email</button>

          <p className="verify-footer">
            Didn’t receive a code? <Link to="#">Resend</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VerifyEmail;
