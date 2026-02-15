import React from "react";
import "./JourneySection.css";
import Link from "next/link";

const JourneySection = () => {
  return (
    <section className="journey">
      <video autoPlay muted loop playsInline className="journey-graphic">
        <source
          src="/Rocket_Ship_Takeoff_Video_Generation.mp4"
          type="video/mp4"
        />
      </video>

      <div className="journey-content">
        <h2>A NEW CHAPTER TO OUR JOURNEY</h2>
        <div className="journey-text">
          <p>
            Welcome to our new website. It reflects where we are in our brand
            journey—shaped by growth, experience, and a clearer understanding of
            how we work.
          </p>
          <p>
            We’ve been incredibly blessed to partner with inspiring small
            businesses, and through these relationships, our process has taken
            shape. This new chapter represents the lessons we’ve learned, the
            partnerships we value, and our continued commitment to creating
            purposeful, strategic work.
          </p>
        </div>
        <Link href="/pages/projects" className="btn journey-btn">
          VIEW OUR PROJECTS
        </Link>
      </div>
    </section>
  );
};

export default JourneySection;
