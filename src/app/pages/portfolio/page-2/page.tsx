import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Portfolio — Plasticourt & More",
  description:
    "Case studies from Six Foot Design Co — featuring brand design work for Plasticourt Surface Solutions and other South African businesses.",
  openGraph: {
    title: "Portfolio Page 2 | Six Foot Design Co",
    description:
      "Branding and design case studies featuring Plasticourt Surface Solutions and more.",
    url: "https://www.sixfootdesignco.co.za/pages/portfolio/page-2",
  },
};
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";
import PortfolioContentSection from "@/components/sections/portfolio/PortfolioProjectSection";
import PortfolioPagination from "@/components/layout/PortfolioPagination";

const PortfolioPage2 = () => {
  const projects = [
    {
      id: "plasticourt",
      title: "PLASTICOURT BRAND",
      heroImage: "/projects/Plasticourt Hero.png",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "PLASTICOURT Surface Solutions is a turnkey, Proudly South African  Company, that specializes in all-weather hardcourt surface solutions. At the helm is CEO / Owner Mark Hibberd who boasts around 20 years’  experience in the resurfacing industry. PLASTICOURT specializes in the resurfacing of tennis, netball and  basketball courts but also provides services such as earthworks, fencing and building of courts.",
      brief:
        "The company started 2.5 years ago, and we were tasked with updating their brand, making it more flexible, as well as creating their website. It’s always great to be involved from the start, as you grow with the company, and it has become an amazing partnership. Since this initial task, we have been involved in many others, such as banner wall design, general signage, and ongoing stationery.",
      approach:
        "We aim to be seen as a strategic partner — not just a service that moves a brand from A to B. Our role goes beyond execution; we help shape direction, clarity, and long-term value. The brand itself has a strong sense of simplicity and a no-nonsense approach to its look and feel. This has been intentionally carried through every design decision and creative strategy we’ve developed, ensuring consistency, focus, and purpose at every touchpoint.",
      quoteText:
        "In short BRILLIANT INVENTIVE AND PROFESSIONAL I highly recommend Jason and Six Foot Design Co for your design projects he took me from a loOse  brand to a cohesive brand with a online presence in a short space of time.",
      quoteAuthor: "MARK",
      thankYouText: "Mark and Paula Hibberd for the ongoing partnership.",
      websiteUrl: "https://plasticourt.com",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "fuji-poke-bowls",
      title: "FUJI POKE BOWLS WEBSITE",
      heroImage: "/projects/Fuji Poke Bowls Hero.png",
      accentColor: "var(--color-secondary-alt)",
      aboutCompany:
        "Fuji Poke Bowls is redefining fast food in South Africa with fresh, wholesome poke bowls made for life on the go. We believe fast food doesn’t have to be unhealthy, and our diverse menu is designed to suit every palate and lifestyle. Proudly pescatarian, vegetarian, and vegan-friendly, FUJI offers something for everyone. From classic favourites to bold, innovative flavours, each bowl is crafted with care. Find us in modern, Japanese-inspired kiosks across major malls, serving food that’s fast, fresh, and inclusive.",
      brief:
        "Fuji Poke Bowls approached us to refresh their company profile and design a five-page website that truly reflects their brand identity—because a great brand deserves more than just a menu and a dream.",
      approach:
        "As a Japanese-inspired takeaway, Fuji Poke Bowls needed a design as fresh and considered as their food. We partnered closely with them to shape a clean, minimal identity across their profile and website, guiding every detail to ensure a seamless, consistent brand experience—online and in-store.",
      thankYouText: "Dustyn and Nienke for the opportunity.",
      websiteUrl: "https://fujipokebowls.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "city-on-a-hill",
      title: "CITY ON A HILL POSTER DESIGN",
      heroImage: "/projects/City on a Hill Hero.png",
      accentColor: "var(--color-secondary)",
      customSection: {
        label: "THE INSPIRATION BEHIND THE POSTER",
        content:
          "In between projects, we often work on personal pieces to explore new techniques and keep the creative juices flowing. The inspiration behind this poster series (with many more to follow) comes from our faith, which forms the foundation of our purpose and is something we celebrate in every way we can.",
      },
      websiteUrl:
        "mailto:jason@sixfootdesignco.co.za?subject=Commission%20Enquiry",
      buttonText: "HAVE A COMMISSION PLEASE CLICK HERE",
    },
  ];

  return (
    <main className="portfolio-page">
      <Header />
      <PortfolioContentSection
        heroTitle="PLASTICOURT BRAND"
        projects={projects}
      />
      <PortfolioPagination currentPage={2} totalPages={4} />
      <SocialSection />
      <Footer />
    </main>
  );
};

export default PortfolioPage2;
