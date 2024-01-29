import React from 'react';
import Header from '../../components/header/Header';
import './home.css';
import Footer from '../../components/footer/Footer';
import mainImg from '../images/headerlgr.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeedbackCard from '../../components/card/FeedbackCard';
import '../../components/card/feedback.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


  const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <FaAngleLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <FaAngleRight />
  </div>
);




function Home() {

  const feedbackData = [
 {
    id: 1,
    name: 'John T.',
    feedback: "BetBoost has completely changed my NBA betting game! The tips are not only accurate but also timely. I've seen a significant boost in my winnings since I started using their services.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael R.',
    feedback: "I'm impressed with BetBoost's consistency in providing well-researched soccer betting tips. It's evident that their team is dedicated to delivering quality predictions for football matches. Keep up the good work!",
    rating: 5,
  },
  {
    id: 3,
    name: 'David M.',
    feedback: "BetBoost is my go-to source for reliable betting tips. The expert analysis and detailed insights have helped me make informed decisions, resulting in profitable outcomes. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily S.',
    feedback: "I've tried several betting tip services, but BetBoost stands out for its transparency and honesty. The results speak for themselves. Thanks for helping me grow my bankroll!",
    rating: 5,
  },
  {
    id: 5,
    name: 'Alex S.',
    feedback: "Kudos to BetBoost for the excellent customer service and top-notch NBA betting tips. The team is responsive and genuinely cares about the success of its users in basketball betting. I'm a satisfied customer!",
    rating: 5,
  },
  {
    id: 6,
    name: 'Daniel K.',
    feedback: "BetBoost's tips are like gold for any serious soccer bettor. I appreciate the diversity of markets covered, ensuring there's always something to bet on in football matches. Impressive accuracy!",
    rating: 5,
  },
  {
    id: 7,
    name: 'Oliver L.',
    feedback: "BetBoost has exceeded my expectations in soccer betting. The tips are well-researched, and the results have been consistently positive for football bets. I've recommended this service to my friends, and they love it too!",
    rating: 5,
  },
  {
    id: 8,
    name: 'Matthew W.',
    feedback: "I've been a BetBoost subscriber for months now, and I'm thrilled with the results. The tips are delivered in a user-friendly format, making it easy to follow and place bets. Great job!",
    rating: 5,
  },
  {
    id: 9,
    name: 'Christopher C.',
    feedback: "BetBoost doesn't just provide tips; they provide an edge. The in-depth analysis accompanying each tip sets them apart from other services. I've seen a remarkable improvement in my winnings.",
    rating: 5,
  },
  {
    id: 10,
    name: 'Ryan B.',
    feedback: "The best betting service I've ever used!",
    rating: 5,
  },
  {
    id: 11,
    name: 'William G.',
    feedback: "Soccer betting with BetBoost is fantastic! Their tips have been spot-on, and I've had consistent wins. The detailed insights are invaluable. Definitely one of the best soccer tip services!",
    rating: 5,
  },
  {
    id: 12,
    name: 'James M.',
    feedback: "NBA betting made easy with BetBoost! The accuracy of their basketball tips is remarkable. I've gained confidence in my bets, and the results speak for themselves. Highly recommended!",
    rating: 5,
  },
  ];

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
        },
      },  
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const CounterCard = ({ value, label }) => (
  <div className="counter-card">
    <div className="counter">+{value}</div>
    <div className="counter-label">{label}</div>
  </div>
);


  return (
    <>
      <Header />

      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container bottomContainer">
          <div className="ultimateImg">
            <img className="mainImg" src={mainImg} />
            {/* <div className="purpleBox">
              <p className="purpleText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra i11111111111111111 semper nec pretium mus.
              </p>
              <img className="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg" />
            </div> */}
          </div>
          <div className="allText bottomText">
            <p className="text-blk headingText">
              Welcome!
            </p>
            <p className="text-blk subHeadingText">
              "Smart Bets - Big Wins!" - BetBoost
            </p>
            <p className="text-blk description">
              We are team of experienced analysts specializing in basketball and soccer predictions. With a wealth of time-tested knowledge, 
              we employ a data-driven approach to deliver accurate insights for bettors. Our focus on transparency and integrity sets us apart
               in the sports betting arena. With a commitment to excellence, we aim to empower both experienced and new bettors with 
               valuable information. {<Link to='/subscriptions'>Join us</Link>} today and enjoy winning...{<Link to='/about'>Learn more!</Link>}
            
            </p>
            <Link to="/subscriptions" className="explore">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="counter-block">
        <div className="counter-container">
          <CounterCard value={1100} label="Clients Served" />
          <CounterCard value={1800} label="Successful Tips" />
          <CounterCard value={520000} label="$ Made by our clients" />
        </div>
      </div>

      <div className="join-home">
        <div class="join-block">
          <div class="join-text">Join Our Community Today</div>
          <a href="/subscriptions" class="join-button">Join Now</a>
          <a href="/about" class="learn-more-button">Learn More About Us</a>
        </div>
      </div>      
     
     

      <h1 style={{ textAlign:'center', margin: '30px' }}>Feedbacks</h1>
      <Slider {...settings}>
        {feedbackData.map((feedback) => (
          <div key={feedback.id}>
            <FeedbackCard {...feedback} />
          </div>
        ))}
      </Slider>

      <Footer />
    </>
  )
}

export default Home