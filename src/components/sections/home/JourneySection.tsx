import React from 'react';
import './JourneySection.css';

const JourneySection = () => {
  return (
    <section className="journey">
      <img src="/Rocketship - bg.png" alt="Rocket Launch" className="journey-graphic" />
      
      <div className="journey-content">
        <h2>A NEW CHAPTER TO OUR JOURNEY</h2>
        <div className="journey-text">
          <p>
            Welcome to our new website. It reflects where we are in our brand journey—shaped by growth, experience, and a clearer understanding of how we work.
          </p>
          <p>
            We've been incredibly blessed to partner with inspiring small businesses, and through these relationships, our process has taken shape. This new chapter represents the lessons we've learned, the partnerships we value, and our continued commitment to creating purposeful, strategic work.
          </p>
        </div>
        <button className="btn journey-btn">VIEW OUR PROJECTS</button>
      </div>
    </section>
  );
};

export default JourneySection;
