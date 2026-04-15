import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Portfolio — Angi's Cleaning, FunFloats & The Iron Maiden",
  description:
    "Case studies from Six Foot Design Co — featuring website and branding work for Angi's Cleaning Service, FunFloats, and The Iron Maiden.",
  openGraph: {
    title: "Portfolio Page 1 | Six Foot Design Co",
    description:
      "Branding and web design case studies: Angi's Cleaning Service, FunFloats, and The Iron Maiden.",
    url: "https://www.sixfootdesignco.co.za/pages/portfolio/page-1",
  },
};
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";
import PortfolioContentSection from "@/components/sections/portfolio/PortfolioProjectSection";
import PortfolioPagination from "@/components/layout/PortfolioPagination";

const PortfolioPage1 = () => {
  const projects = [
    {
      id: "angi-cleans",
      title: "ANGI'S CLEANING WEBSITE",
      heroImage: "/projects/Angi Hero.png",
      accentColor: "var(--color-secondary-alt)",
      aboutCompany:
       "Angi’s Cleaning Service are  deeply committed to creating healthier, cleaner home environments using eco-friendly methods that  are safe for people, pets, and the planet. Caring for others is at the heart of everything I do, and it brings me joy to  know that my work makes homes feel fresh, calm, and truly cared for.", 
       brief:
        "We were tasked with creating a 2 page website which required a quoting system for Angi's Cleaning Service as bespoke cleaning service in East  Town, Randburg.",
      approach:
        "We decided that the approach had to be different so I partnered with my  son Joshua, who is a bit of a next.js guru, this turned out to be the  perfect platform for this site, not only did it add fresh tech, but took our creative direction to the next level and it became a fantastic partnership (on to the next lol!).",
      quoteText:
        "I cannot thank Six Foot Design Co. enough for the incredible work they did on my website. Jason and Josh went above and beyond to create a site that perfectly reflects my eco-friendly cleaning business. They captured the exact eco-chic look I envisioned while also making it simple and inviting for potential clients to use. Their creativity, attention to detail, and hard work truly exceeded my expectations. I am so grateful for their dedication and would highly recommend Six Foot Design Co. to anyone looking for a team that genuinely cares about bringing your vision to life.",
      quoteAuthor: "ANGI",
      thankYouText: "Chris, Angi and Josh for the Partnership",
      websiteUrl: "https://angicleans.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "funfloats",
      title: "FUNFLOATS WEBSITE",
      heroImage: "/projects/Funfloats Hero.png",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "Funfloats are  a proudly South African brand, deeply passionate about  supporting and uplifting small local businesses. Our commitment goes  beyond just crafting high-quality pool floats; it extends to fostering a  thriving community of entrepreneurs and artisans within South Africa. By sourcing materials locally and collaborating with skilled craftsmen, we not only contribute to the growth of our economy but also celebrate the rich cultural heritage and creativity of our nation.",
      brief:
        "We were tasked with creating a multi-page website that included and e-commerce ordering portal which integrated with the courier service they use and showed there complete range of floats clearly.",
      approach:
        "The brand is all about summer fun, so we dug into some pop art inspiration for the site, their pool products are a quality, classy and bright, so it became about making a splash from the landing page to contact page.",
      thankYouText: "Bev Dennis for the opportunity.",
      websiteUrl: "https://funfloats.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "iron-maiden",
      title: "THE IRON MAIDEN WEBSITE",
      heroImage: "/projects/Iron Maiden Hero.png",
      accentColor: "var(--color-secondary)",
      aboutCompany:
        "Martine, the founder of The Iron Maiden, is a talented artist and  sculptor who has exhibited across South Africa by invitation. Inspired  by her father, Sike Margoles — a respected architect behind major  developments like Sandton City, Eastgate, The Mall in Rosebank, and  Sandton Sun — Martine inherited his strong work ethic and passion for  design. Today, the team includes six skilled employees and a consulting  engineer. Together, they handle projects from concept to design,  fabrication, and final installation — always focusing on quality and  attention to detail.",
      brief:
        "It was an honour to bring Martine’s first website to life, the brief was simply to bring focus to their services and projects, giving Martine access to updating on ongoing level.",
      approach:
        "Being a company creates steel creations our approach was to bring in a softer more feminine aspect without the loosing the strength behind the service of the brand.",
      quoteText:
        "Working with Jason on my website was an absolute pleasure. He guided me through every stage of the process with patience and clear direction, turning my ideas into something visually striking and perfectly suited to my business. His creative input and technical skill made everything easy and enjoyable — I felt supported and inspired from start to finish. I couldn’t be happier with the result!",
      quoteAuthor: "MARTINE",
      thankYouText:
        "Martine for the opportunity looking forward to further creative adventures as we develop things further",
      websiteUrl: "https://www.theironmaiden.co.za",
      buttonText: "VIEW THE PROJECT",
    },
  ];

  return (
    <main className="portfolio-page">
      <Header />
      <PortfolioContentSection
        heroTitle="PROJECTS"
        projects={projects}
      />
      <PortfolioPagination currentPage={1} totalPages={4} />
      <SocialSection />
      <Footer />
    </main>
  );
};

export default PortfolioPage1;
