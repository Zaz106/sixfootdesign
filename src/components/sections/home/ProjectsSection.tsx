import React from 'react';
import './ProjectsSection.css';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <section className="projects">
      <Link href="/pages/portfolio/page-1#angi-cleans" className="project-item item-angi">
        <img src="/Angie Cleans - Feauture bg.png" alt="Angi Cleans" />
        <div className="project-info">
          <h3 className="project-title">ANGI CLEANS</h3>
          <span className="project-cat">Website Development</span>
        </div>
      </Link>
      <Link href="/pages/portfolio/page-1#funfloats" className="project-item item-funfloats">
        <img src="/Funfloats - Feature bg.png" alt="Funfloats" />
        <div className="project-info">
          <h3 className="project-title">FUNFLOATS</h3>
          <span className="project-cat">E-commerce Website</span>
        </div>
      </Link>
    </section>
  );
};

export default ProjectsSection;
