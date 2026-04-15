"use client";

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
          text="Branding. Advertising. Illustration. Web"
          tag="h1"
          className="hero-title"
          delay={40}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="hero-subtext">Strategic, audience-first design that actually works.</p>
        <Link href="/pages/contact" className="btn hero-btn">START YOUR PROJECT</Link>
      </div>
    </section>
  );
};

export default HeroSection;
