import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./policy.css";

function Policy() {
  return (
    <>
      <Header />
      {/* <div className="responsive-container-block bigContainer">
        <div className="policy-responsive-container-block policy-Container">
          <p className="policy-text-blk policy-heading">
            Privacy Policy
          </p>
          <p className="policy-text-blk policy-subHeading"> */}
      {/* Information Collection:

We collect personal information, such as email addresses, for the purpose of providing betting tips and services.

[Your Company Name] explicitly does not collect or store user bank information.

Data Usage:

Collected data is used to deliver personalized betting tips, enhance user experience, and improve our services.

Third-Party Sharing:

We do not sell or share personal information, including bank details, with third parties. Information may be shared only for legal or security purposes.

Security Measures:

We employ industry-standard security measures to protect user data. However, no online data transmission is 100% secure.

Cookies:

We use cookies to enhance user experience and track website usage. Users can disable cookies in their browser settings.

Updates:

We may update the Privacy Policy periodically. Users will be notified of any significant changes.
          </p> */}
      {/* <div className="social-icons-container">
              <a target='_blank' href="mailto:betboost@gmail.com" className="social-icon">
                <img className="socialIcon image-block" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3261769/email-icon-md.png" />
              </a>
              <a target='_blank' href='https://www.instagram.com/_betboost?igsh=OXk0cHVjdTF1d3Jw' className="social-icon">
                <img className="socialIcon image-block" src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg" />
              </a>
              <a target='_blank' className="social-icon">
                <img className="socialIcon image-block" src="https://cdn.iconscout.com/icon/free/png-256/free-tiktok-4408654-3649936.png" />
              </a>
            </div> */}
      {/* </div>

        <div className="policy-responsive-container-block policy-Container">
          <p className="policy-text-blk policy-heading">
            Privacy Policy
          </p>
          <p  className="policy-text-blk policy-subHeading">
              We are team of experienced analysts specializing in NBA and soccer predictions. With a wealth of time-tested knowledge, we employ a data-driven approach to deliver accurate insights for bettors. Our focus on transparency and integrity sets us apart in the sports betting arena. With a commitment to excellence, we aim to empower both experienced and new bettors with valuable information. {<Link to='/subscriptions'>Join us</Link>} today and enjoy winning!
          </p> */}
      {/* <div className="social-icons-container">
              <a target='_blank' href="mailto:betboost@gmail.com" className="social-icon">
                <img className="socialIcon image-block" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3261769/email-icon-md.png" />
              </a>
              <a target='_blank' href='https://www.instagram.com/_betboost?igsh=OXk0cHVjdTF1d3Jw' className="social-icon">
                <img className="socialIcon image-block" src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg" />
              </a>
              <a target='_blank' className="social-icon">
                <img className="socialIcon image-block" src="https://cdn.iconscout.com/icon/free/png-256/free-tiktok-4408654-3649936.png" />
              </a>
            </div> */}
      {/* </div>
      </div> */}

      <div className="content policy-content">
        <h1>Privacy &amp; Policy</h1>
        <p className="last-updated">
          <em>Last updated: Sep. 25, 2025</em>
        </p>

        <p>
          Welcome to <strong>ChadAI</strong>. We value your trust and are
          committed to protecting your privacy and ensuring transparency in how
          we handle your data. This page outlines our policies regarding data
          collection, usage, security, and your rights.
        </p>

        <hr />

        <h2>1. Data We Collect</h2>
        <p>When you use our Chrome extension and website, we may collect:</p>
        <ul>
          <li>
            <strong>Account Information</strong> – such as your name, email
            address, and login credentials (if you sign up).
          </li>
          <li>
            <strong>Usage Data</strong> – interactions with the extension (e.g.,
            chats, feature usage, page visits).
          </li>
          <li>
            <strong>Technical Data</strong> – browser type, operating system,
            and extension version to improve performance.
          </li>
          <li>
            <strong>AI Requests</strong> – text or images you choose to send to
            our AI assistant.
          </li>
        </ul>

        <h2>2. How We Use Your Data</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our AI extension services.</li>
          <li>Respond to your support requests.</li>
          <li>Monitor system performance and prevent abuse.</li>
          <li>
            Communicate important updates, security alerts, or policy changes.
          </li>
          <li>Analyze anonymized usage trends to improve user experience.</li>
        </ul>
        <p>
          <strong>We do not sell</strong> your data to third parties.
        </p>

        <h2>3. Data Sharing</h2>
        <p>We may share limited information with:</p>
        <ul>
          <li>
            <strong>Service Providers</strong> (such as OpenAI API for AI
            responses).
          </li>
          <li>
            <strong>Legal Authorities</strong> if required by law or to protect
            against fraud and abuse.
          </li>
          <li>
            <strong>Analytics &amp; Hosting Partners</strong> to maintain and
            improve our service.
          </li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement security measures to protect your personal data,
          including:
        </p>
        <ul>
          <li>Secure storage and encryption of sensitive information.</li>
          <li>Limited access to your data by authorized personnel only.</li>
          <li>
            Regular monitoring of our systems for potential vulnerabilities.
          </li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and update your personal information.</li>
          <li>Request deletion of your account and data.</li>
          <li>Opt out of marketing communications.</li>
          <li>Contact us regarding any privacy concerns.</li>
        </ul>
        <p>
          To exercise these rights, please email us at:{" "}
          <strong>chadai.support@gmail.com</strong>.
        </p>

        <h2>6. Cookies &amp; Tracking</h2>
        <p>Our website may use cookies for:</p>
        <ul>
          <li>Improving your browsing experience.</li>
          <li>Understanding traffic and usage patterns.</li>
          <li>Remembering preferences and login sessions.</li>
        </ul>
        <p>You can disable cookies in your browser settings at any time.</p>

        <h2>7. Third-Party Services</h2>
        <p>
          Our Chrome extension relies on third-party services, such as{" "}
          <strong>OpenAI API</strong>, to process your AI requests. These
          providers may have their own privacy policies, and we encourage you to
          review them.
        </p>

        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Privacy &amp; Policy page from time to time. Any
          changes will be posted here with an updated date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this policy or how we handle your
          data, please contact us at:
        </p>
        <p>
          <strong>chadai.support@gmail.com</strong>
          <br />
          <strong>https://chadai.com</strong>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Policy;
