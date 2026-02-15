import React from "react";
import "./LegalHeroSection.css";
import TextType from "@/components/ui/TypeWriter";

const LegalHeroSection = () => {
  return (
    <section className="legal-hero">
      <div className="legal-hero-content">
        <h2 className="legal-hero-label">TERMS AND PRIVACY</h2>
        <TextType
          text={["THE LEGAL STUFF"]}
          className="legal-hero-title"
          as="h1"
          typingSpeed={40}
          cursorCharacter="|"
          loop={false}
        />
        <div className="legal-text-container">
          <div className="legal-section">
            <h3>TERMS</h3>
            <p>
              The purpose of this website is to provide persons entering this
              Internet domain (Users) with general information about, and
              breakdowns of the services offered by, Jason Huisman T/A Six Foot
              Design Co.
            </p>
            <p>
              The Terms and Conditions are binding and enforceable against all
              Users that access the Jason Huisman T/A Six Foot Design Co website
              in terms of Section 11(3) of the Electronic Communications and
              Transactions (ECT) Act 25 of 2002 (ECT Act) and New Popia Act as
              at 1 July 2021.
            </p>
            <p>
              If the User does not agree to these Terms and Conditions, he or
              she must immediately leave the Jason Huisman T/A Six Foot Design
              Co website, as further use will automatically bind the User to
              these Terms and Conditions.
            </p>
            <p>
              Use of this website indicates that the User hereby understands and
              accepts the following.
            </p>
          </div>

          <div className="legal-section">
            <h3>COPYRIGHT</h3>
            <p>
              Names, images, logos and descriptions representing Jason Huisman
              T/A Six Foot Design Co are brands and processes belonging to Six
              Foot Design Co as well as its clients. The contents of this
              website may not be reproduced either in whole, or in part, without
              the written permission of Jason Huisman T/A Six Foot Design Co.
              Any images used from outside sources have been bought under
              license and cannot be reproduced either in whole, or in part,
              without the correct permissions from the supplier.
            </p>
          </div>

          <div className="legal-section">
            <h3>PRIVACY POLICY</h3>
            <p>
              Jason Huisman T/A Six Foot Design Co respects your privacy and is
              committed to keeping any information you share with us
              confidential.
            </p>
            <ol>
              <li>
                You may, in the course of using this website, be asked to
                provide some personal details such as name, email address,
                telephone numbers, and the like.
              </li>
              <li>
                Any information you provide us with will only be used as
                appropriate in the normal course of our business.
              </li>
              <li>
                All personal information provided to Jason Huisman T/A Six Foot
                Design Co is kept strictly confidential and is not shared with
                any third party unless express permission is granted.
              </li>
              <li>
                Jason Huisman T/A Six Foot Design Co will disclose or report any
                personal information if and when it is required by law or
                regulatory authority.
              </li>
              <li>
                We have taken all reasonable steps to protect the information
                you provide us with however we cannot guarantee the security of
                your information when transmitted electronically and you do so
                at your own risk.
              </li>
              <li>
                By visiting this website and communicating with us
                electronically you consent to receiving communication from Jason
                Huisman T/A Six Foot Design Co electronically.
              </li>
            </ol>
            <p>
              Jason Huisman T/A Six Foot Design Co is aware of the new POPIA act
              which came into place 1 July 2021, and will strictly abide to it,
              meaning that information as well digital cookies, shared between
              the company and it’s clients is to be respected by both and that
              the information shared is purely for our relationship only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalHeroSection;
