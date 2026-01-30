import React from 'react';
import './LogoDesignSection.css';

const LogoDesignSection = () => {
  return (
    <section className="logo-design">
      <div className="logo-design-content">
        <h2 className="section-heading">LOGO DESIGN</h2>
        
        <div className="faq-item">
          <h3>WHAT FILE FORMATS DO I RECEIVE?</h3>
          <p>
            Your logo will be provided in JPEG, PNG (transparent), Vector PDF, and EPS.
          </p>
        </div>

        <div className="faq-item">
          <h3>HOW IS MY LOGO DELIVERED?</h3>
          <ul>
            <li>Full color</li>
            <li>Single Colour</li>
            <li>Black with transparent cutout</li>
            <li>White with transparent cutout</li>
          </ul>
        </div>

        <div className="faq-item">
          <h3>WHAT'S INCLUDED IN THE STYLE GUIDE?</h3>
          <p>
            Our style guides are presented print ready. On our logo only packages a PDF that contains colour formats and typography. On our full brand identity projects include the above plus critical elements such as usage, patterns, icons, all contained in a print ready PDF. Files are delivered via WeTransfer as a zipped brand folder, organized by file type.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoDesignSection;
