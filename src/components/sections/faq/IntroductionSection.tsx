import React from 'react';
import './IntroductionSection.css';

const IntroductionSection = () => {
  return (
    <section className="introduction">
      <div className="introduction-content">
        <h2 className="section-heading">INTRODUCTION</h2>
        
        <div className="faq-item">
          <h3>WHO'S BEHIND SIX FOOT DESIGN CO?</h3>
          <p>
            I'm <strong>Jason Hulsman</strong>—an illustrator, creative director, and passionate designer with 27 years of experience in branding and advertising. When not designing I'm playing guitar, sports with my boys, or hiking. My better half is <strong>Laurel Hulsman</strong>—a microbiologist with a strong management background. She brings a keen eye for detail, organization, and all things numbers. Our little crew is rounded out by our three boys.
          </p>
        </div>

        <div className="faq-item">
          <h3>HOW DID YOU START IN DESIGN?</h3>
          <p>
            I began in 1998 in event advertising, then moved into the lighting and furniture industry, where I honed illustration and layout skills. Self-taught in design and type. Illustration. Creativity runs in my family—my mother is a pianist, my grandfather was a draughtsman, my brother Nicholas whom I partner with often is an artist and my business coach Pastor Weeber is a renowned artist.
          </p>
        </div>

        <div className="faq-item">
          <h3>WHAT QUALIFICATIONS DO YOU HAVE?</h3>
          <p>
            I hold certificates in design and Marketing from IMA.
          </p>
        </div>

        <div className="faq-item">
          <h3>WHAT'S YOUR ADVICE FOR YOUNG DESIGNERS?</h3>
          <p>
            Never stop learning (even after 27 years, I'm always improving). Clients have great ideas too—collaborate to create the best outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
