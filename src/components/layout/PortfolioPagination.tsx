import React from 'react';
import './PortfolioPagination.css';

type PortfolioPaginationProps = {
  currentPage: number;
  totalPages: number;
};

const PortfolioPagination = ({ currentPage, totalPages }: PortfolioPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="portfolio-pagination">
      <div className="portfolio-pagination-container">
        {currentPage > 1 && (
          <a
            href={`/pages/portfolio/page-${currentPage - 1}`}
            className="portfolio-pagination-nav portfolio-pagination-prev"
          >
            <span className="portfolio-pagination-arrow">←</span>
            <span className="portfolio-pagination-text">PREVIOUS</span>
          </a>
        )}
        
        <div className="portfolio-pagination-pages">
          {pages.map((page) => (
            <a
              key={page}
              href={`/pages/portfolio/page-${page}`}
              className={`portfolio-pagination-page ${page === currentPage ? 'active' : ''}`}
            >
              {page}
            </a>
          ))}
        </div>

        {currentPage < totalPages && (
          <a
            href={`/pages/portfolio/page-${currentPage + 1}`}
            className="portfolio-pagination-nav portfolio-pagination-next"
          >
            <span className="portfolio-pagination-text">NEXT</span>
            <span className="portfolio-pagination-arrow">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioPagination;
