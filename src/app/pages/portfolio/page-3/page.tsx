import Header from "@/components/layout/Header";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";
import PortfolioContentSection from "@/components/sections/portfolio/PortfolioProjectSection";
import PortfolioPagination from "@/components/layout/PortfolioPagination";

const PortfolioPage3 = () => {
  const projects = [
    {
      id: "red-seal",
      title: "RED SEAL BRAND AND WEB",
      heroImage: "/projects/Redseal Hero.png",
      accentColor: "var(--color-secondary)",
      aboutCompany:
        "Established in 2022 by Earl Robertson, Red Seal Plumbing was founded with a clear mission: to provide comprehensive plumbing solutions at fair and transparent rates—without ever compromising on the quality of workmanship. With years of hands-on experience and a deep understanding of the industry, we are committed to delivering reliable, top-tier plumbing services for both residential and commercial clients. We understand that plumbing emergencies can be stressful and overwhelming. That’s why Red Seal Plumbing is dedicated to making emergency plumbing services as seamless and stress-free as possible. Our team not only responds quickly but also takes the time to guide clients through the process, ensuring clear communication and peace of mind at every stage.",
      brief:
        "The company needed a logo that struck the perfect balance—professional and clean, with just the right amount of playfulness to stand out in a sea of generic plumbing logos. The goal was a brand that felt trustworthy, confident, and memorable without relying on overused industry clichés.",
      approach:
        "We set out to create a brand identity that feels dependable, considered, and built to last. Moving away from obvious industry visuals, we explored a retro-inspired aesthetic that feels both familiar and distinctive, helping the brand stand out with confidence. Supporting patterns were introduced to add depth and consistency across applications, reinforcing the system as a whole. The result is a cohesive, professional identity that confidently delivers on its promise: Quality Plumbing. Signed, Sealed, Delivered.",
      quoteText:
        "Six Foot Design can't thank them enough from concept to design brilliant, really happy with the logo and branding work done.",
      quoteAuthor: "EARL",
      thankYouText: "Earl for the ongoing partnership and Josh for the Dev.",
      websiteUrl: "https://redseal.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "greenera",
      title: "GREENERA BRAND AND WEB",
      heroImage: "/projects/Greenera Hero.png",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "GreenEra Energy provides renewable energy advice; design; supply, installation and maintenance of renewable technologies. We are GreenCard Certified and SAPVIA Approved to install Solar Photo Voltaic (Solar PV) and Energy Storage Systems. GreenEra Energy adheres to the Consumer Code. This encourages best practice in all our dealings with our customers. We will provide renewable energy advice on technologies that are suitable for the premises and will not undertake “hard selling”.",
      brief:
        "We were tasked with developing a brand that was immediately clear in its purpose, positioning the company as a provider of holistic renewable energy solutions.",
      approach:
        "Just as the business is built on three key service pillars — Renewable Energy Solutions, Carbon Footprint Auditing, and Energy Efficiency & Management — we took a strategic approach to the logo. Rather than trying to represent each service literally, we focused on the three core areas of renewables to clearly show that the business offers a balanced, holistic solution. The use of green and blue reinforces the eco-friendly nature of the brand and ties the identity together.",
      thankYouText: "Hamanth for trusting us with your brand.",
      websiteUrl: "https://greenera.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "garicon",
      title: "GARICON LANDING PAGE",
      heroImage: "/projects/Garicon Hero.png",
      accentColor: "var(--color-secondary-alt)",
      aboutCompany:
        "Garicon services has been serving as a leading Air Conditioning Contractor since 2005. As a fully-certified professional, we are ready to tackle anything from the most complex and large scale construction project to the smallest of repair jobs. We are fuelled by our commitment to excellence and go the extra mile to make sure my clients are completely satisfied with my work.",
      brief:
        "Every brand has an online starting point, this was Garicon’s. The brief was to keep it simple and within the small budget they had available.",
      approach:
        "We stuck closely to brand, understanding that those clients looking for air conditioning suppliers are looking for qualified individuals that can work with multiple brands. This formed the foundation to our strategy of including relevant and helpful information only, along with references to increase credibly.",
      thankYouText: "Earl for the ongoing partnership.",
      websiteUrl: "https://garicon.co.za",
      buttonText: "VIEW THE PROJECT",
    },
  ];

  return (
    <main className="portfolio-page">
      <Header />
      <PortfolioContentSection
        heroTitle="RED SEAL BRAND AND WEB"
        projects={projects}
      />
      <PortfolioPagination currentPage={3} totalPages={4} />
      <SocialSection />
      <Footer />
    </main>
  );
};

export default PortfolioPage3;
