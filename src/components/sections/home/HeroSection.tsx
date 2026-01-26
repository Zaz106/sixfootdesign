import React from 'react';
import './HeroSection.css';
import SplitText from '../../ui/SplitText';

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/City on a hill - hero bg.png" alt="Hero Background" className="hero-background" /> 
      
      <div className="hero-content">
        <SplitText
          text="CITY ON A HILL"
          tag="h1"
          className="hero-title"
          delay={80}
          duration={3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
        <button className="btn hero-btn">VIEW THE PROJECT</button>
      </div>
    </section>
  );
};

export default HeroSection;
