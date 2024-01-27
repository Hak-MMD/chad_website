import React from 'react'
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import './about.css';
import Footer from '../../components/footer/Footer';


function About() {
  return (
    <>
      <Header />
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <p className="text-blk heading">
            About BetBoost
          </p>
          <p className="text-blk subHeading">
              We are team of experienced analysts specializing in NBA and soccer predictions. With a wealth of time-tested knowledge, we employ a data-driven approach to deliver accurate insights for bettors. Our focus on transparency and integrity sets us apart in the sports betting arena. With a commitment to excellence, we aim to empower both experienced and new bettors with valuable information. {<Link to='/subscriptions'>Join us</Link>} today and enjoy winning!
          </p>
          <div className="social-icons-container">
            <a target='_blank' href="mailto:betboost@gmail.com" className="social-icon">
              <img className="socialIcon image-block" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3261769/email-icon-md.png" />
            </a>
            <a target='_blank' href='https://www.instagram.com/_betboost?igsh=OXk0cHVjdTF1d3Jw' className="social-icon">
              <img className="socialIcon image-block" src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg" />
            </a>
            <a target='_blank' className="social-icon">
              <img className="socialIcon image-block" src="https://cdn.iconscout.com/icon/free/png-256/free-tiktok-4408654-3649936.png" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About