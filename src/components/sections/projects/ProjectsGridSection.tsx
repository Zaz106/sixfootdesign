import React from "react";
import "./ProjectsGridSection.css";

const ProjectsGridSection = () => {
  const projects = [
    {
      name: "ANGI CLEANS",
      description: "Website Development",
      image: "/projects/Project - 1.png",
      color: "green",
      href: "/pages/portfolio/page-1#angi-cleans",
    },
    {
      name: "FUNFLOATS",
      description: "E-commerce Website",
      image: "/projects/Project - 2.png",
      color: "grey",
      href: "/pages/portfolio/page-1#funfloats",
    },
    {
      name: "THE IRON MAIDEN",
      description: "One Page Custom Website",
      image: "/projects/Project - 3.png",
      color: "orange",
      href: "/pages/portfolio/page-1#iron-maiden",
    },
    {
      name: "PLASTICOURT",
      description: "Brand Design and Website",
      image: "/projects/Project - 4.png",
      color: "orange",
      href: "/pages/portfolio/page-2#plasticourt",
    },
    {
      name: "FUJI POKE BOWLS",
      description: "Various Projects",
      image: "/projects/Project - 5.png",
      color: "green",
      href: "/pages/portfolio/page-2#fuji-poke-bowls",
    },
    {
      name: "CITY ON A HILL",
      description: "Illustrated Poster",
      image: "/projects/Project - 6.png",
      color: "grey",
      href: "/pages/portfolio/page-2#city-on-a-hill",
    },
    {
      name: "RED SEAL",
      description: "Brand Design and Web",
      image: "/projects/Project - 7.png",
      color: "grey",
      href: "/pages/portfolio/page-3#red-seal",
    },
    {
      name: "GREENERA",
      description: "Brand Design and Website",
      image: "/projects/Project - 8.png",
      color: "orange",
      href: "/pages/portfolio/page-3#greenera",
    },
    {
      name: "GARICON",
      description: "One Page Website",
      image: "/projects/Project - 9.png",
      color: "green",
      href: "/pages/portfolio/page-3#garicon",
    },
    {
      name: "MJC DISTRIBUTORS",
      description: "5 Page Catalogue Website",
      image: "/projects/Project - 10.png",
      color: "green",
      href: "/pages/portfolio/page-4#mjc-distributors",
    },
    {
      name: "ATONEMENT",
      description: "Various Projects",
      image: "/projects/Project - 11.png",
      color: "grey",
      href: "/pages/portfolio/page-4#atonement",
    },
    {
      name: "TWM",
      description: "Logo Design",
      image: "/projects/Project - 12.png",
      color: "orange",
      href: "/pages/portfolio/page-4#twm",
    },
  ];

  return (
    <section className="projects-grid">
      <div className="projects-grid-container">
        {projects.map((project, index) => {
          const card = (
            <div className={`project-card project-card--${project.color}`}>
              <div className="project-card-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-card-overlay">
                <div className="project-card-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          );

          return project.href ? (
            <a key={index} href={project.href} className="project-card-link">
              {card}
            </a>
          ) : (
            <div key={index}>{card}</div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsGridSection;
