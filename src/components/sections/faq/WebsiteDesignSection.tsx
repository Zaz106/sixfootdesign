import React from 'react';
import './WebsiteDesignSection.css';

const WebsiteDesignSection = () => {
  return (
    <section className="website-design">
      <div className="website-design-content">
        <h2 className="section-heading">WEBSITE DESIGN</h2>
        
        <div className="faq-item">
          <h3>DO YOU USE A CMS?</h3>
          <p>
            Yes, depending on the project. Our default CMS is October/Winter CMS, similar to WordPress. More detailed sites, requiring coding and functionality are built in NEXT.JS.
          </p>
        </div>

        <div className="faq-item">
          <h3>DO YOU OFFER SEO?</h3>
          <p>
            Yes. Our basic SEO includes title/meta descriptions, social tags, and Google Analytics setup. Advanced SEO management is available as an add-on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDesignSection;
