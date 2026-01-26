import React from 'react';
import './WhatWeValueSection.css';

const WhatWeValueSection = () => {
  return (
    <section className="what-we-value">
      <div className="value-content">
        <h2>WHAT WE VALUE</h2>
        <p className="value-intro">
          These values guide how we work and why we do what we do. They shape our approach to every project, from the way we think and collaborate to how we communicate and create. Rooted in faith and driven by purpose, they help us build meaningful partnerships and deliver thoughtful design that empowers brands to grow and go further.
        </p>
        
        <ul className="values-list">
          <li><strong>• Creativity</strong> – Pushing boundaries to craft unique, meaningful designs.</li>
          <li><strong>• Learning & Growth</strong> – Constantly evolving to deliver better solutions.</li>
          <li><strong>• Collaboration & Partnership</strong> – Building strong, lasting relationships.</li>
          <li><strong>• Faith</strong> – Staying committed to our values and Christian belief with integrity and purpose.</li>
          <li><strong>• Empowerment</strong> – Equipping brands with the tools to succeed.</li>
          <li><strong>• Communication</strong> – Prioritizing clear, open, and effective dialogue.</li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeValueSection;
