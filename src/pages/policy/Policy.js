import React from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import './policy.css';

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

       <div class="content">
    <section id="privacy-policy" class="policy-section">
      <h2 class="section-title">Privacy Policy</h2>
      <ol>
        <li><strong class="policy-point">Information Collection:</strong> We collect personal information, such as email addresses, for the purpose of providing betting tips and services. <span class="company-name">BetBoost</span> explicitly does not collect or store user bank information.</li>
        <li><strong class="policy-point">Data Usage:</strong> Collected data is used to deliver personalized betting tips, enhance user experience, and improve our services.</li>
        <li><strong class="policy-point">Third-Party Sharing:</strong> We do not sell or share personal information, including bank details, with third parties. Information may be shared only for legal or security purposes.</li>
        <li><strong class="policy-point">Security Measures:</strong> We employ industry-standard security measures to protect user data. However, no online data transmission is 100% secure.</li>
        <li><strong class="policy-point">Updates:</strong> We may update the Privacy Policy periodically. Users will be notified of any significant changes.</li>
      </ol>
    </section>

    <section id="terms-of-use" class="policy-section">
      <h2 class="section-title">Terms of Use</h2>
      <ol>
        <li><strong class="policy-point">Acceptance:</strong> By using our betting tips service, users agree to comply with these Terms of Use.</li>
        <li><strong class="policy-point">Age Restriction:</strong> Users must be of legal age to engage in betting activities in their jurisdiction.</li>
        <li><strong class="policy-point">Intellectual Property:</strong> All content, including betting tips and website materials, is the intellectual property of <span class="company-name">BetBoost</span>.</li>
        <li><strong class="policy-point">User Conduct:</strong> Users agree not to engage in illegal activities, sharing betting tips, misuse the service, or infringe on the rights of others.</li>
        <li><strong class="policy-point">Service Availability:</strong> We strive to maintain uninterrupted service, but we do not guarantee continuous availability.</li>
        <li><strong class="policy-point">Disclaimer:</strong> Our betting tips are provided for informational purposes only. We do not guarantee the accuracy or success of the tips.</li>
        <li><strong class="policy-point">Limitation of Liability:</strong> <span class="company-name">BetBoost</span> is not liable for any losses incurred through the use of our betting tips.</li>
        <li><strong class="policy-point">Bank Information:</strong> <span class="company-name">BetBoost</span> explicitly states that it does not collect or store user bank information.</li>
        <li><strong class="policy-point">Termination:</strong> <span class="company-name">BetBoost</span> reserves the right to terminate user access for violations of these Terms of Use.</li>
        <li><strong class="policy-point">Governing Law:</strong> These terms are governed by the laws of <span class="company-jurisdiction">BetBoost</span>.</li>
        <li><strong class="policy-point">Contact Information:</strong> For questions or concerns regarding the Privacy Policy or Terms of Use, contact: <span class="contact-info"><a target='_blank' href="mailto:myhamike@gmail.com">Mail Us</a></span>.</li>
        </ol>
    </section>
  </div>

      <Footer />
    </>
  )
}

export default Policy