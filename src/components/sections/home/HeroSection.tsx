import React from 'react';
import './HeroSection.css';
import SplitText from '../../ui/SplitText';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero">
      <Image 
        src="/City on a hill - hero bg.png" 
        alt="Hero Background" 
        className="hero-background" 
        fill 
        priority 
        sizes="100vw"
      /> 
      
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
        <Link href="/pages/projects" className="btn hero-btn">VIEW THE PROJECT</Link>
      </div>
    </section>
  );
};

export default HeroSection;
