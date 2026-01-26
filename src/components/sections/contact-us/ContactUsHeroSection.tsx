import React from 'react';
import './ContactUsHeroSection.css';
import TextType from '@/components/ui/TypeWriter';

const ContactUsHeroSection = () => {
  return (
    <section className="contact-us-hero">
      <div className="contact-us-hero-content">
        <h2 className="contact-us-hero-label">CONTACT US</h2>
        <TextType
          text={["DROP US AN EMAIL"]}
          className="contact-us-hero-title"
          as="h1"
          typingSpeed={40}
          cursorCharacter="|"
          loop={false}
        />
        <p className="contact-us-hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </p>
      </div>
    </section>
  );
};

export default ContactUsHeroSection;