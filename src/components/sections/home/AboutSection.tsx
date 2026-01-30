import React from 'react';
import './AboutSection.css';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="about">
      <h2>THE FUEL TO OUR CREATIVE FIRE</h2>
      <div className="about-text">
        <p>
          Six Foot is driven by faith, purpose, and partnership. We believe we were created to create—and to do so with strategic intent. Our role is to guide clients from one point to the next with clarity and confidence.
        </p>
        <p>
          We work transparently, with honest pricing and simple ongoing retainers that support consistent brand growth. Above all, we want to see our clients thrive and feel genuine pride in what their brand represents.
        </p>
      </div>
      <div className="quote">
        "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
        <span className="quote-ref">Colossians 3:23</span>
      </div>
      <Link href="/pages/about" className="btn about-btn">READ MORE ABOUT US</Link>
    </section>
  );
};

export default AboutSection;
