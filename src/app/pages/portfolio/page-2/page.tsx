import Header from "@/components/layout/Header";
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
        "Plasticourt is a South African sports and recreation company specializing in the installation of high-quality tennis courts, basketball courts, and multi-sport facilities. With a focus on durability, safety, and performance, Plasticourt provides both residential and commercial clients with expertly crafted sports surfaces that stand the test of time. Their commitment to excellence and attention to detail has made them a trusted name in the sports infrastructure industry.",
      brief:
        "Plasticourt approached Six Foot Design Co with the need for a comprehensive rebrand that would modernize their image and better reflect their expertise and professionalism in the sports court industry. The goal was to create a cohesive brand identity that conveyed quality, reliability, and a passion for sports, while appealing to both residential and commercial clients.",
      approach:
        "We developed a bold and energetic brand identity that captures the dynamic nature of sports while maintaining a professional and trustworthy feel. The new logo, color palette, and visual language were designed to be versatile across both digital and physical applications—from business cards and uniforms to signage and marketing materials. The result is a brand that stands out in the competitive sports infrastructure market and effectively communicates Plasticourt's commitment to quality and performance.",
      thankYouText: "Mark and Paula Plasticourt for entrusting us with their rebrand and ongoing partnership.",
      websiteUrl: "https://plasticourt.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "fuji-poke-bowls",
      title: "FUJI POKE BOWLS WEBSITE",
      heroImage: "/projects/Fuji Poke Bowls Hero.png",
      accentColor: "var(--color-secondary-alt)",
      aboutCompany:
        "Fuji Poke Bowls is a vibrant and health-focused restaurant brand offering fresh, customizable poke bowls inspired by Hawaiian cuisine. With a commitment to quality ingredients and bold flavors, Fuji Poke Bowls provides a fast-casual dining experience that's both delicious and nutritious. Their brand is all about freshness, fun, and making healthy eating accessible and exciting.",
      brief:
        "Fuji Poke Bowls needed a dynamic and visually appealing website that reflected their fresh, colorful, and energetic brand. The site needed to showcase their menu, highlight their commitment to fresh ingredients, and provide an easy way for customers to find locations and place orders. The goal was to create a digital experience that felt as vibrant and inviting as their in-store experience.",
      approach:
        "We designed a bold, colorful website that brings the energy and freshness of Fuji Poke Bowls to life online. The design features vibrant photography, playful typography, and an intuitive user experience that makes it easy for customers to explore the menu and place orders. The site is fully responsive and optimized for mobile, ensuring a seamless experience across all devices. The result is a digital presence that captures the essence of the Fuji Poke Bowls brand and drives customer engagement.",
      thankYouText: "Dustyn and Ibrahm for the opportunity.",
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
        content: "In a modern re-make of John Bunyan's Pilgrims Progress, this illustration captures several of the characters mentioned in the narrative. Pulling influence from the book, the character design, environment, clothing and props within the illustration were crafted with intent and meaning. This poster series was used during a sermon series at City on a Hill Church in Johannesburg.",
      },
      websiteUrl: "https://www.cityonahill.co.za/contact",
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
