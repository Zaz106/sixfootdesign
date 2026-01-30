import React from "react";
import "./IntroductionSection.css";

const IntroductionSection = () => {
  return (
    <section className="introduction">
      <div className="introduction-content">
        <h2 className="section-heading">INTRODUCTION</h2>

        <div className="faq-item">
          <h3>WHO'S BEHIND SIX FOOT DESIGN CO?</h3>
          <p>
            <strong>Jason Hulsman</strong> — Husband, father, Christian, and
            passionate designer with 27 years of experience in branding and
            advertising. When not designing, I’m playing guitar, sports with my
            boys, or hiking. My goal is to blend the best of freelancing and
            agency work.
            <br></br>
            <strong>Laurel Hulsman</strong> — A microbiologist with a strong
            management background. She brings a keen eye for detail and fresh
            insights into our designs. When not working, she enjoys baking,
            reading, and giving the best hugs to our boys.
          </p>
        </div>

        <div className="faq-item">
          <h3>HOW DID YOU START IN DESIGN?</h3>
          <p>
            I began in 1998 in event advertising, then moved into the lighting
            and furniture industry, where I developed skills in branding,
            catalog design, and isometric illustration. Creativity runs in my
            family—my mother is a pianist, my grandfather was a draughtsman, my
            brother Nicholas whom i partner with often is a professional
            photographer and my mothers cousin Peter Webber is a renowned
            artist.
          </p>
        </div>

        <div className="faq-item">
          <h3>WHAT QUALIFICATIONS DO YOU HAVE?</h3>
          <p>
            I hold diplomas in Art & Design and Advertising & Marketing from
            IMM.
          </p>
        </div>

        <div className="faq-item">
          <h3>WHAT'S YOUR ADVICE FOR YOUNG DESIGNERS?</h3>
          <p>
            Never stop learning. Even after 27 years, I’m always improving.
            Clients have great ideas too—collaborate to create the best
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
