import React from 'react';
import './ProjectsHeroSection.css';
import TextType from '@/components/ui/TypeWriter';

const ProjectsHeroSection = () => {
  return (
    <section className="projects-hero">
      <div className="projects-hero-content">
        <h2 className="projects-hero-label">PROJECTS</h2>
        <TextType
          text={["A SELECTION OF WORK"]}
          className="projects-hero-title"
          as="h1"
          typingSpeed={40}
          cursorCharacter="|"
          loop={false}
        />
        <p className="projects-hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </p>
      </div>
    </section>
  );
};

export default ProjectsHeroSection;
