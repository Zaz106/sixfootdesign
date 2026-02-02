import React from 'react';
import TextType from '../../ui/TypeWriter';
import Image from 'next/image';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <h2 className="about-hero-label">ABOUT US</h2>
        <TextType
          text={["SMALL STUDIO, BIG PASSION"]}
          className="about-hero-title"
          as="h1"
          typingSpeed={40}
          cursorCharacter="|"
          loop={false}
        />
        <p className="about-hero-text">
         We are an experienced home based studio with big ambitions and passion, powered by late nights, endless ideas, and way too much coffee, dedicated to crafting unique digital experiences that make a real impact.
        </p>
      </div>
      <div className="about-hero-image">
        <Image 
          src="/About Us - Hero Image.png" 
          alt="Six Foot Design Studio" 
          width={600} 
          height={600} 
          priority 
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;
