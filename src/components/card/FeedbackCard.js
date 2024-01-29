import React from 'react';
import './feedback.css';



const FeedbackCards = ({ name, feedback, rating }) => {
  return (
    <div className="feedback-cards-container">
        <div className="feedback-card">
          <p className="feedback-text">{feedback}</p>
          <div className="rating">
            {Array.from({ length: rating }, (_, index) => (
              <span key={index} className="star">&#9733;</span>
            ))}
          </div>
          <p className="feedback-author">- {name}</p>
        </div>
    </div>
  );
};

export default FeedbackCards;