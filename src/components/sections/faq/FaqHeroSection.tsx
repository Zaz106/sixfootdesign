import React from 'react';
import TextType from '../../ui/TypeWriter';
import './FaqHeroSection.css';

const FaqHeroSection = () => {
  return (
    <section className="faq-hero">
      <div className="faq-hero-content">
        <h2 className="faq-hero-label">FREQUENTLY ASKED QUESTIONS</h2>
        <TextType
          text={["THE BURNING QUESTIONS"]}
          className="faq-hero-title"
          as="h1"
          typingSpeed={40}
          cursorCharacter="|"
          loop={false}
        />
        <p className="faq-hero-text">
          Have questions? We've got answers! Explore our FAQ section to find solutions to common inquiries about our services, processes, and more.         
        </p>
      </div>
    </section>
  );
};

export default FaqHeroSection;
