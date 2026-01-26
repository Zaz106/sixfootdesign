import React from "react";
import "./PortfolioProjectSection.css";

type PortfolioProject = {
  id: string;
  title: string;
  heroImage: string;
  accentColor: string;
  aboutCompany?: string;
  brief?: string;
  approach?: string;
  customSection?: {
    label: string;
    content: string;
  };
  quoteText?: string;
  quoteAuthor?: string;
  thankYouText?: string;
  websiteUrl: string;
  buttonText: string;
};

type PortfolioProjectSectionProps = {
  project: PortfolioProject;
  showTitle?: boolean;
  isLastProject?: boolean;
};

type PortfolioContentSectionProps = {
  heroTitle: string;
  projects: PortfolioProject[];
};

const PortfolioProjectSection = ({ project, showTitle = true, isLastProject = false }: PortfolioProjectSectionProps) => {
  return (
    <section id={project.id} className="portfolio-project" style={{ '--project-accent': project.accentColor } as React.CSSProperties}>
      <div className="portfolio-project-content">
        {showTitle && <h2 className="portfolio-project-title">{project.title}</h2>}
        <div className="portfolio-project-hero">
          <img src={project.heroImage} alt={project.title} />
        </div>

        <div className="portfolio-project-copy">
          {project.customSection ? (
            <>
              <h3 className="portfolio-section-label">{project.customSection.label}</h3>
              <p>{project.customSection.content}</p>
            </>
          ) : (
            <>
              <h3 className="portfolio-section-label">ABOUT THE COMPANY</h3>
              <p>{project.aboutCompany}</p>

              <h3 className="portfolio-section-label">THE BRIEF</h3>
              <p>{project.brief}</p>

              <h3 className="portfolio-section-label">OUR APPROACH</h3>
              <p>{project.approach}</p>

              {project.quoteText && (
                <div className="portfolio-quote">
                  <h3 className="portfolio-quote-text">"{project.quoteText}"</h3>
                  {project.quoteAuthor && (
                    <h3 className="portfolio-quote-author">- {project.quoteAuthor}</h3>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        <div className="portfolio-thank-you">
          {project.thankYouText && (
            <>
              <h3 className="portfolio-thank-you-title">THANK YOU</h3>
              <p className="portfolio-thank-you-text">{project.thankYouText}</p>
            </>
          )}
          <a
            className="portfolio-project-link"
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.buttonText}
          </a>
        </div>
      </div>
      {!isLastProject && <div className="portfolio-divider" />}
    </section>
  );
};

const PortfolioContentSection = ({ heroTitle, projects }: PortfolioContentSectionProps) => {
  const heroAccentColor = projects[0]?.accentColor || "var(--color-secondary-alt)";
  return (
    <>
      <section className="portfolio-hero" style={{ '--project-accent': heroAccentColor } as React.CSSProperties}>
        <div className="portfolio-hero-content">
          <h2 className="portfolio-hero-label">PROJECTS</h2>
        </div>
      </section>

      {projects.map((project, index) => (
        <PortfolioProjectSection 
          key={project.id} 
          project={project} 
          isLastProject={index === projects.length - 1}
        />
      ))}
    </>
  );
};

export default PortfolioContentSection;
