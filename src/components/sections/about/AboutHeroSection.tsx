import React from "react";
import TextType from "../../ui/TypeWriter";
import Image from "next/image";
import "./AboutHeroSection.css";

const AboutHeroSection = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <h2 className="about-hero-label">ABOUT US</h2>
        <TextType
          text={["SMALL STUDIO, BIG PASSION"]}
          className="about-hero-title"
          as="h1"
          typingSpeed={40}
          cursorCharacter="|"
          loop={false}
        />
        <p className="about-hero-text">
          We’re a family-run business built on faith and hard work — a team of
          creative Jedi passionate about using our unique strengths to help
          brands grow and go further.
        </p>
      </div>
      <div className="about-hero-image">
        <Image
          src="/About-Us-Hero.jpeg"
          alt="Six Foot Design Studio"
          width={1600}
          height={1600}
          priority
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;
