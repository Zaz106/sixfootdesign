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
          Thank you for checking out our portfolio page. Here you’ll find a curated selection of work showcasing some of our more recent design projects. Each piece reflects our passion for thoughtful design, strong visual storytelling, and building brands that are made to stand out and grow.
        </p>
      </div>
    </section>
  );
};

export default ProjectsHeroSection;
