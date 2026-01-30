import React from "react";
import "./OurTeamSection.css";

const OurTeamSection = () => {
  return (
    <section className="our-team">
      <div className="our-team-content">
        <h2>OUR TEAM</h2>
        <p className="our-team-intro">
          We’re a family-run business rooted in faith, hard work, and a genuine
          passion for using our unique strengths to help brands grow and go
          further.
        </p>

        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              {/* Placeholder for Jason's image */}
              <h3>JASON</h3>
              <p className="team-role">Owner/ Creative Director</p>
            </div>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              {/* Placeholder for Laurel's image */}
              <h3>LAUREL</h3>
              <p className="team-role">Studio Manager</p>
            </div>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              {/* Placeholder for Josh's image */}
              <h3>JOSH</h3>
              <p className="team-role">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
