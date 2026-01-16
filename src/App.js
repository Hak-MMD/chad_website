import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/plans" element={<Products />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscriptions" element={<Subscriptions />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
