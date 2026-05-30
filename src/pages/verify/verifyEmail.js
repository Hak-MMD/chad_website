import { useState, useRef } from "react";
import "./verify.css";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import api from "../../api/axios";

function VerifyEmail() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);
  const navigate = useNavigate();

  const noEmailInState = !location.state?.email;

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...digits];
    updated[index] = value;
    setDigits(updated);
    if (value && index < 5) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted.length === 6) {
      setDigits(pasted.split(""));
      inputs.current[5]?.focus();
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    const code = digits.join("");
    if (code.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await api.post("/api/v2/auth/verify-email", { email, code });
      navigate("/signin", { state: { verified: true } });
    } catch (err) {
      setError(
        err.response?.data?.error || "Verification failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    setError("");
    setMessage("");
    try {
      await api.post("/api/v2/auth/resend-verification", { email });
      setMessage("New code sent! Check your inbox.");
    } catch (err) {
      setError(
        err.response?.data?.error || "Failed to resend. Try again later."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="verify-wrapper">
        <div className="verify-card">
          <h1 className="verify-title">Verify Your Email</h1>
          <p className="verify-subtitle">
            Enter the 6-digit code we sent to{" "}
            <strong>{email || "your email"}</strong>
          </p>

          {error && <p className="auth-error">{error}</p>}
          {message && <p className="auth-success">{message}</p>}

          <form onSubmit={handleSubmit}>
            {/* Show email input only if user arrived here directly (not from signup) */}
            {noEmailInState && (
              <div className="input-group" style={{ marginBottom: "20px" }}>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="code-inputs" onPaste={handlePaste}>
              {digits.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  value={digit}
                  ref={(el) => (inputs.current[i] = el)}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                />
              ))}
            </div>

            <button className="verify-btn" type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <p className="verify-footer">
            Didn&apos;t receive a code?{" "}
            <button className="link-btn" onClick={handleResend} type="button">
              Resend
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VerifyEmail;
