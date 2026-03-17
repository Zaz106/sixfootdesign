import React from "react";
import Image from "next/image";
import "./OurTeamSection.css";

const OurTeamSection = () => {
  return (
    <section className="our-team">
      <div className="our-team-content">
        <h2>OUR TEAM</h2>
        <p className="our-team-intro">
          We’re a family-run business built on faith and hard work — a team of
          creative Jedi passionate about using our unique strengths to help
          brands grow and go further.
        </p>

        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              <Image
                src="/Jason-Image.jpeg"
                alt="Jason - Owner/ Creative Director"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="member-info">
                <h3>JASON</h3>
                <p className="team-role">Owner/ Creative Director</p>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              <Image
                src="/Laurel-Image.jpeg"
                alt="Laurel - Studio Manager"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="member-info">
                <h3>LAUREL</h3>
                <p className="team-role">Studio Manager</p>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              <Image
                src="/Josh-Image.jpeg"
                alt="Josh - Developer"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="member-info">
                <h3>JOSH</h3>
                <p className="team-role">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
