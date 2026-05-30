import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./billing.css";

function BillingCancel() {
  return (
    <>
      <Header />
      <div className="billing-result-wrapper">
        <div className="billing-result-card">
          <div className="billing-result-icon cancel-icon">✕</div>
          <h1>Checkout Cancelled</h1>
          <p>
            Your subscription has not changed. You can try again whenever
            you&apos;re ready.
          </p>
          <Link to="/subscriptions" className="billing-btn">
            Back to Plans
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BillingCancel;
