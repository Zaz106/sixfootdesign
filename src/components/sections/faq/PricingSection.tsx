import React from 'react';
import './PricingSection.css';

const PricingSection = () => {
  return (
    <section className="pricing">
      <div className="pricing-content">
        <h2 className="section-heading">PRICING</h2>
        
        <div className="faq-item">
          <h3>HOW DO YOU PRICE PROJECTS?</h3>
          <p>
            We offer fixed-price packages, with either:
          </p>
          <ul>
            <li>50% upfront, 50% on completion, or</li>
            <li>50% upfront, 25% at a milestone, 25% before final delivery</li>
          </ul>
          <p>FFor urgent projects, we charge hourly ad-hoc rates.</p>
        </div>

        <div className="faq-item">
          <h3>DO YOU OFFER RETAINERS?</h3>
          <p>
            Yes we do, we offer two retainers, one for micro/small business and one for larger businesses both aimed at ongoing brand partnership.
          </p>
        </div>

        <div className="faq-item">
          <h3>DO YOU HAVE A PRICE LIST?</h3>
          <p>
           No fixed price list—aside from logo and web packages—since every project is unique. We provide custom quotes based on your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
