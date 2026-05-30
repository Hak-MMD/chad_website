import { useState } from "react";
import "./signin.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/dashboard";
  const verified = location.state?.verified;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/api/v2/auth/login", { email, password });
      login(res.data.user, res.data.accessToken);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.error || "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/api/v2/auth/google`;
  };

  return (
    <>
      <Header />
      <div className="signin-wrapper">
        <div className="signin-card">
          <h1 className="signin-title">Welcome Back</h1>
          <p className="signin-subtitle">Sign in to continue</p>

          {verified && (
            <p className="auth-success">Email verified! You can now sign in.</p>
          )}

          <button className="google-btn" onClick={handleGoogle} type="button">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="signin-btn" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="signin-footer">
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
