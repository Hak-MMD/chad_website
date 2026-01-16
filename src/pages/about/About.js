import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./about.css";
import { FiCoffee } from "react-icons/fi";

function About() {
  return (
    <>
      <Header />

      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Learn more about our mission, our team, and the vision behind
            ChadAI.
          </p>

          <div className="about-divider"></div>

          {/* Section 1 */}
          <div className="about-card">
            <h2>What do we do?</h2>
            <p>
              ChadAI is a powerful Chrome extension designed to help you solve
              problems instantly — right from your screen. Whether you're stuck
              on a homework question, debugging code, analyzing a screenshot, or
              trying to understand a complex task, ChadAI lets you capture what
              you see and get AI‑powered assistance in seconds.
            </p>
            <p>
              You can highlight text, capture a portion of your screen, or
              upload an image directly through the extension. ChadAI analyzes
              the content and provides clear, actionable answers. You can also
              chat with the AI using text or text + image to give more context,
              making it easier than ever to get help with real‑world problems.
            </p>
            <p>
              Our goal is simple:{" "}
              <strong>
                turn your browser into a smart assistant that helps you work
                faster, learn better, and solve problems effortlessly.
              </strong>
            </p>
          </div>

          {/* Section 2 */}
          <div className="about-card">
            <h2>How does it work?</h2>
            <p>
              ChadAI integrates seamlessly into Chrome and gives you multiple
              ways to interact:
            </p>
            <ul>
              <li>
                <strong>Screen Capture Assistance</strong> — Capture any part of
                your screen and get instant explanations or solutions.
              </li>
              <li>
                <strong>Text‑Based Chat</strong> — Ask questions, brainstorm
                ideas, or get help with tasks directly through the extension.
              </li>
              <li>
                <strong>Text + Image Context</strong> — Combine screenshots with
                text instructions for more accurate responses.
              </li>
              <li>
                <strong>Always Available</strong> — Whether you're studying,
                working, or browsing, ChadAI is always one click away.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="about-card">
            <h2>Who are we?</h2>
            <p>
              We are a dedicated team of developers, marketers, and support
              specialists based in <strong>Toronto, Canada</strong>. Our
              backgrounds are diverse, but our mission is shared: to build tools
              that make people’s daily lives easier.
            </p>
            <p>
              We believe AI should be practical, accessible, and helpful — not
              overwhelming. That’s why we created ChadAI: a simple, intuitive
              extension that helps you get things done without friction.
            </p>
          </div>

          {/* Section 4 */}
          <div className="about-card">
            <h2>Our mission</h2>
            <p>
              Life is full of small challenges — confusing homework, tricky code
              errors, unclear instructions, or tasks that take too long. We
              built ChadAI to remove that friction.
            </p>
            <p>
              Our mission is to empower people by giving them instant clarity,
              whether they’re:
            </p>
            <ul>
              <li>Completing school assignments</li>
              <li>Learning new concepts</li>
              <li>Debugging code</li>
              <li>Understanding documents</li>
              <li>Solving technical problems</li>
              <li>Or simply trying to save time</li>
            </ul>
            <p>
              No matter the task, <strong>ChadAI is here to help.</strong>
            </p>
          </div>

          {/* Support Section */}
          <div className="about-card support-card">
            <h2>Support the Authors</h2>
            <p>
              If you enjoy using ChadAI and want to support the creators behind
              it, you can help us continue improving the product. Your support
              helps us maintain servers, build new features, and keep improving
              the experience for everyone.
            </p>

            <div className="support-btn-wrapper">
              <a
                href="https://www.buymeacoffee.com/your-link"
                target="_blank"
                rel="noreferrer"
                className="support-btn"
              >
                <FiCoffee /> Buy Us a Coffee
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
