import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Policy from "./pages/policy/Policy";
import Products from "./pages/products/Products";
import Error from "./pages/error/Error";
import SignIn from "./pages/login/Signin";
import SignUp from "./pages/register/Signup";
import VerifyEmail from "./pages/verify/verifyEmail";
import Profile from "./pages/profile/Profile";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Dashboard from "./pages/dashboard/Dashboard";
import OAuthSuccess from "./pages/oauth/OAuthSuccess";
import BillingSuccess from "./pages/billing/Success";
import BillingCancel from "./pages/billing/Cancel";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Products />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />

          {/* Auth routes — redirect to dashboard if already logged in */}
          <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/subscriptions" element={<ProtectedRoute><Subscriptions /></ProtectedRoute>} />

          {/* Billing result pages (protected — user should be logged in after checkout) */}
          <Route path="/billing/success" element={<ProtectedRoute><BillingSuccess /></ProtectedRoute>} />
          <Route path="/billing/cancel" element={<ProtectedRoute><BillingCancel /></ProtectedRoute>} />

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
