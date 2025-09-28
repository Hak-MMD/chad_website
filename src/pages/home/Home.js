import { useState, useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import "./home.css";
import Footer from "../../components/footer/Footer";
// import mainImg from "../images/headerlgr.png";
import text_img from "../images/text_img.png";
import image_img from "../images/image_chad.png";
import reply_img from "../images/reply_chad.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackCard from "../../components/card/FeedbackCard";
import "../../components/card/feedback.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { CiCreditCardOff } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiImage } from "react-icons/fi";
import { IoIosFlash } from "react-icons/io";
import { FiChrome } from "react-icons/fi";
import { use } from "react";
import axios from "axios";

const images = [text_img, image_img, reply_img];

function Home() {
  const [email, setEmail] = useState("");
  const [waitlist, setWaitlist] = useState(0); // start at first real slide
  const [alert, setAlert] = useState(""); // start at first real slide
  const [currentIndex, setCurrentIndex] = useState(1); // start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);

  // Clone first and last images for seamless loop
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const goNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const getWaitlist = async () => {
    try {
      await axios
        .get("https://chad-server.onrender.com/api/v1/web/getWaitlist")
        .then((response) => {
          if (response?.data?.reply) {
            setWaitlist(response?.data?.reply);
          }
          if (response?.data?.errors) {
            setAlert(response?.data?.errors[0]);
            setTimeout(() => {
              setAlert("");
            }, 4000);
          }
        });
    } catch (error) {
      // console.log(error);
      setAlert("Error fetching waitlist data");
      setTimeout(() => {
        setAlert("");
      }, 4000);
    }
  };

  const addToWaitlist = async (e) => {
    e.preventDefault();
    try {
      if (email == "") {
        setAlert("Please enter your email!");
        setTimeout(() => {
          setAlert("");
        }, 4000);
      }
      await axios
        .post("https://chad-server.onrender.com/api/v1/web/addToWaitlist", {
          email,
        })
        .then((response) => {
          if (response?.data?.reply) {
            setWaitlist(waitlist + 1);
            setAlert(
              "You joined our waitlist! We will keep you up to date with our project!"
            );
            setTimeout(() => {
              setAlert("");
            }, 8000);
          }
          if (response?.data?.errorMessage) {
            setAlert(response?.data?.errorMessage);
            setTimeout(() => {
              setAlert("");
            }, 4000);
          }
        });
    } catch (error) {
      if (error?.status >= 400 && error?.response?.data?.errorMessage) {
        setAlert(error?.response?.data?.errorMessage);
        setTimeout(() => {
          setAlert("");
        }, 4000);
      } else {
        setAlert("Can't add you to the waitlist! Try again later!");
        setTimeout(() => {
          setAlert("");
        }, 4000);
      }
    }
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(goNext, 9000);
    return () => clearInterval(interval);
  }, []);

  // Handle loop reset
  useEffect(() => {
    if (currentIndex === 0 || currentIndex === extendedImages.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex === 0 ? images.length : 1);
      }, 600); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    getWaitlist();
  }, []);

  return (
    <>
      <Header />

      <section className="hero-block">
        <h1 className="bg-white hero-title">Your AI, right inside Chrome</h1>
        <p className="bg-white hero-subtitle">
          Highlight text, capture screenshots, and get AI-powered responses—all
          inside Chrome.
        </p>
        <div className="bg-white hero-actions">
          <Link to="/subscriptions" className="hero-btn">
            Try Beta Version
          </Link>
          <span className="bg-white hero-note">
            <CiCreditCardOff className="noCreditIcon" /> No credit card required
          </span>
        </div>
      </section>
      {/* <div className="counter-block">
        <div className="counter-container">
          <CounterCard value={1100} label="Clients Served" />
          <CounterCard value={1800} label="Successful Tips" />
          <CounterCard value={520000} label="$ Made by our clients" />
        </div>
      </div> */}

      <div className="join-home">
        <div className="join-block">
          <div className="join-text">Join our waitlist for early access!</div>
          <p>{alert}</p>
          <form className="join-form" onSubmit={(e) => addToWaitlist(e)}>
            <input
              type="email"
              name="email"
              placeholder={`Enter your email`}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="join-input"
            />
            <button type="submit" className="join-btn join-submit">
              Join
            </button>
          </form>

          <div className="joined-stats">
            <div className="avatars">
              <img src={require("../images/person1.jpg")} alt="a1" />
              <img src={require("../images/person2.jpeg")} alt="a2" />
              <img src={require("../images/person3.jpg")} alt="a3" />
            </div>
            <div className="signed-count">{waitlist} people signed up</div>
          </div>
        </div>
      </div>
      {/* Project info block */}
      <section className="project-block">
        <div className="project-container">
          <div className="project-left">
            <h2 className="project-heading">
              Meet Chad — AI inside your browser
            </h2>
            <div className="project-features">
              <div className="feature">
                <div className="feature-icon">
                  <FiChrome />
                </div>
                <div className="feature-body">
                  <div className="feature-title">Built for Chrome</div>
                  <div className="feature-desc">
                    Seamless in-browser access — highlight text or capture
                    screens for fast answers.
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <IoIosFlash />
                </div>
                <div className="feature-body">
                  <div className="feature-title">Instant Replies</div>
                  <div className="feature-desc">
                    Low-latency AI responses so you can get information without
                    switching tabs.
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <IoChatbubbleEllipsesOutline />
                </div>
                <div className="feature-body">
                  <div className="feature-title">Text Processing</div>
                  <div className="feature-desc">
                    Processes text directly on your device for privacy and
                    speed.
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FiImage />
                </div>
                <div className="feature-body">
                  <div className="feature-title">Image Handling</div>
                  <div className="feature-desc">
                    Only the data you send is processed — optional local preview
                    before sending.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-right">
            <p className="project-desc">
              Chad helps you get instant answers without leaving the page.
              Highlight text, snap a screenshot, and receive concise AI-powered
              summaries and actions.
            </p>
            <div className="project-visual">
              <div className="arrow-wrapper">
                <div className="custom-arrow custom-prev" onClick={goPrev}>
                  &#10094;
                </div>
                <div className="visual-slider">
                  <div
                    className="visual-slide"
                    ref={slideRef}
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      transition: isTransitioning
                        ? "transform 0.6s ease-in-out"
                        : "none",
                    }}
                  >
                    {extendedImages.map((img, index) => (
                      <img key={index} src={img} alt={`slide ${index}`} />
                    ))}
                  </div>
                </div>
                <div className="custom-arrow custom-next" onClick={goNext}>
                  &#10095;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="project-heading-action">
        Make your best study experience with ChadAI!
      </h2>
      <div className="action-block">
        <div className="join-home-action">
          <div className="join-block">
            <div className="join-text">Try out the Beta Version!</div>
            <div className="hero-actions-action">
              <Link to="/subscriptions" className="join-btn join-submit">
                Try Beta Version
              </Link>
              <span className="hero-note-action">
                <CiCreditCardOff className="noCreditIcon-action" /> No credit
                card required
              </span>
            </div>
          </div>
          <h1 className="hr-action">+</h1>
          <div className="join-block">
            <div className="join-text">Join our waitlist for early access!</div>
            <p>{alert}</p>
            <form className="join-form" onSubmit={(e) => addToWaitlist(e)}>
              <input
                type="email"
                name="email"
                placeholder={`Enter your email`}
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="join-input"
              />
              <button type="submit" className="join-btn join-submit">
                Join
              </button>
            </form>

            <div className="joined-stats">
              <div className="avatars">
                <img src={require("../images/person1.jpg")} alt="a1" />
                <img src={require("../images/person2.jpeg")} alt="a2" />
                <img src={require("../images/person3.jpg")} alt="a3" />
              </div>
              <div className="signed-count">{waitlist} people signed up</div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="bg-white" style={{ textAlign: "center", margin: "30px" }}>
        Feedbacks
      </h1>
      <Slider {...settings}>
        {feedbackData.map((feedback) => (
          <div key={feedback.id}>
            <FeedbackCard {...feedback} />
          </div>
        ))}
      </Slider> */}

      <Footer />
    </>
  );
}

export default Home;
