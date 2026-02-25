import React from "react";
import "./NewsSection.css";
import Link from "next/link";
import Image from "next/image";

const NewsSection = () => {
  return (
    <section className="news">
      <div className="section-header">
        <h2>NEWS/BLOG</h2>
      </div>
      <div className="news-grid">
        <div className="news-card">
          <Image
            src="/Blog image 1.webp"
            alt="Blog 1"
            className="card-bg"
            width={400}
            height={300}
          />
        </div>
        <div className="news-card">
          <Image
            src="/Blog image 2.webp"
            alt="Blog 2"
            className="card-bg"
            width={400}
            height={300}
          />
        </div>
        <div className="news-card">
          <Image
            src="/Blog image 3.webp"
            alt="Blog 3"
            className="card-bg"
            width={400}
            height={300}
          />
        </div>
      </div>
      <Link
        href="https://medium.com/@jason.huisman75"
        target="_blank"
        rel="noopener noreferrer"
        className="btn news-btn"
      >
        READ MORE
      </Link>
    </section>
  );
};

export default NewsSection;
