import React from 'react'
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import './about.css';
import Footer from '../../components/footer/Footer';


function About() {
  return (
    <>
      <Header />

      <div className="about-responsive-container-block about-bigContainer">
        <div className="about-responsive-container-block about-Container">
          <p className="about-text-blk about-heading">
              What do we do? 
          </p>
          <p className="about-text-blk about-subHeading">
            At BetBoost, we provide affordable and consistently successful betting tips. We play Basketball(NBA), soccer(Premier League, Bundesliga, LaLiga, MLS, UEFA Champions League and more) and have experts who are very skilled in each of the leagues. We spend 4-6 hours a day meticulously creating the best possible predictions. We test our results using a simulation that allows experts to observe over 4,000 potential outcomes. 

          </p>
        </div>

        <div className="about-responsive-container-block about-Container">
          <p className="about-text-blk about-heading">
             How much do our services cost?
          </p>
          <p  className="about-text-blk about-subHeading">
            We do not want to charge our clients expensive fees if there is no guarantee that they bring home a large chunk of cash. So, for 3-7 tips depending on the contest, we charge only $24.99 weekly, and $84.99 monthly (Best Value)          
          </p>
        </div>
        <div className="about-responsive-container-block about-Container">
          <p className="about-text-blk about-heading">
             How does the whole "betting tips process" work? 
          </p>
          <p  className="about-text-blk about-subHeading">
              Approximately one hour before the schedule start time of a contest, we send out 3-7 different betting tips on basketball and soccer through Instagram Stories to our private channel.  
          </p>
        </div>
        <div className="about-responsive-container-block about-Container">
          <p className="about-text-blk about-heading">
              What happens if we lose? 
          </p>
          <p  className="about-text-blk about-subHeading">
              In reality, this is not a question that comes up often. At BetBoost, we carry a 75.3% success rate over NBA tips and a 73.2%. success rate on soccer betting tips. In our first five months of business, we made our clients a combined profit of 7.3K. However, there are rare nights where we lose money. BetBoost is a service that requires 100% trust. If you decide to purchase a package you must know that there is a chance that you might not make a profit. Over time we will win your money back, however you must trust the entire process in order to make a reasonable profit.
          </p>
            
        </div>
      </div>

      {/* <div className="responsive-container-block bigContainer">
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
      </div> */}

      <Footer />
    </>
  )
}

export default About