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
            <li>100% upfront payment for a discount</li>
            <li>50% upfront, 25% at milestones, 25% before final delivery</li>
          </ul>
          <p>For urgent projects, we charge hourly set-fee rates.</p>
        </div>

        <div className="faq-item">
          <h3>DO YOU OFFER RETAINERS?</h3>
          <p>
            Yes. We offer retainers for micro/small business and one for larger businesses committed to a brand partnership.
          </p>
        </div>

        <div className="faq-item">
          <h3>DO YOU HAVE A PRICE LIST?</h3>
          <p>
            We fixed price list with well-packages—since every project is unique. We provide custom quotes based on your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
