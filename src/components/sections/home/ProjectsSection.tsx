import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects">
      <div className="project-item item-angi">
        <img src="/Angie Cleans - Feauture bg.png" alt="Angi Cleans" />
        <div className="project-info">
          <h3 className="project-title">ANGI CLEANS</h3>
          <span className="project-cat">Website Development</span>
        </div>
      </div>
      <div className="project-item item-funfloats">
        <img src="/Funfloats - Feature bg.png" alt="Funfloats" />
        <div className="project-info">
          <h3 className="project-title">FUNFLOATS</h3>
          <span className="project-cat">E-commerce Website</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
