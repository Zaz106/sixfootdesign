import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services-content">
        <h2>WHAT WE DO AND HOW WE DO IT</h2>
        
        <div className="services-grid">
          <div className="service-card branding">
            <h3 style={{ color: "var(--color-primary)"}}>BRANDING</h3>
            <ul>
              <li>Logo design & development</li>
              <li>Brand strategy & positioning</li>
              <li>Visual brand identity & collateral</li>
              <li>Discovery + Strategy Phase</li>
              <li>Brand guideline document</li>
              <li>Brand messaging</li>
              <li>All Logo and Branding files (vectorized and high resolution)</li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 4500.00</span>
            </div>
          </div>
          
          <div className="service-card illustration">
            <h3>ILLUSTRATION</h3>
            <ul>
              <li>Character/Mascot design</li>
              <li>Custom illustrations</li>
              <li>Iconography</li>
              <li>Infographics</li>
              <li>Editorial illustration</li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 3000.00</span>
            </div>
          </div>
          
          <div className="service-card advertising">
            <h3>ADVERTISING/PRINT</h3>
            <ul>
              <li>Signage Design</li>
              <li>Corporate Profiles</li>
              <li>Brochures</li>
              <li>Flyers</li>
              <li>Posters</li>
              <li>Packaging</li>
              <li>Vehicle wraps and decals</li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 3000.00</span>
            </div>
          </div>
          
          <div className="service-card digital">
            <h3>DIGITAL / WEB</h3>
            <ul>
              <li>Website Design + Development</li>
              <li>Social media Post Designs</li>
              <li>Email Marketing Templates</li>
              <li>Landing Pages</li>
              <li>Web Banners</li>
              <li>Corporate Presentations</li>
              <li>Digital Advertising Creatives</li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 4500.00</span>
            </div>
          </div>
        </div>
        
        <button className="btn services-btn">VIEW OUR PROJECTS</button>
      </div>
    </section>
  );
};

export default ServicesSection;
