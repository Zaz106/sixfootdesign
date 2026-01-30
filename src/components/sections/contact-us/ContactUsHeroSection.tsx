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
          Have one of those burning questions we didn’t quite answer on our website, or ready to partner with us on a project? Let’s chat — we’d love to hear your story and explore how we can bring your ideas to life.
        </p>
      </div>
    </section>
  );
};

export default ContactUsHeroSection;