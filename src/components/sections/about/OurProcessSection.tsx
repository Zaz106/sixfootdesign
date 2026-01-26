import React from 'react';
import './OurProcessSection.css';

const OurProcessSection = () => {
  return (
    <section className="our-process">
      <div className="process-content">
        <h2>OUR PROCESS</h2>
        <div className="process-steps">
          <div className="process-step">
            <h3>01. Discovery & Direction</h3>
            <p>
               We start with a conversation to understand your brand, goals, and vision. From there, we define the right creative direction to support real business growth.
            </p>
          </div>
          
          <div className="process-step">
            <h3>02. Scope & Alignment</h3>
            <p>
              If we are a good fit, we outline the project scope, timeline, and costs. Whether the project is big or small, our approach stays focused and considered.if we’re a good fit, we outline the project scope, timeline, and costs. Whether the project is big or small, our approach stays focused and considered.
            </p>
          </div>
          
          <div className="process-step">
            <h3>03. Concept & Design</h3>
            <p>
               With timelines confirmed, we develop initial concepts and refine them into a strong, final design.
            </p>
          </div>
           <div className="process-step">
            <h3>04. Refinement & Collaboration  </h3>
            <p>
              We work closely with you to fine-tune every detail, ensuring the outcome feels right and works as intended.
            </p>
          </div>
           <div className="process-step">
            <h3>05. Delivery & Ongoing Support</h3>
            <p>
              Once complete, we deliver final assets ready for use. For websites, we include a month of support, with optional ongoing assistance if needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
