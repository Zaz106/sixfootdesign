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
        "Red Seal is a trusted South African brand specializing in high-quality nutritional supplements and health products. With a commitment to wellness and natural ingredients, Red Seal has been helping South Africans live healthier lives for decades. Their product range includes vitamins, minerals, herbal remedies, and specialty health supplements designed to support overall well-being.",
      brief:
        "Red Seal approached Six Foot Design Co with the need for a comprehensive brand refresh and a modern, user-friendly website. The goal was to create a digital presence that reflected the brand's heritage and commitment to quality while appealing to a contemporary health-conscious audience. The website needed to showcase their extensive product range, provide educational content, and make it easy for customers to find and purchase products.",
      approach:
        "We crafted a clean, professional brand identity and website that balances Red Seal's established reputation with a fresh, modern aesthetic. The design emphasizes natural, earthy tones that reflect the brand's focus on natural health products. The website features intuitive navigation, detailed product information, and a seamless e-commerce experience. We also incorporated educational content to help customers make informed decisions about their health and wellness journey.",
      quoteText:
        "I cannot thank Jason and the team at Six Foot Design Co. enough for choosing to work with us. Jason's professionalism and dedication to delivering exactly what we envisioned was outstanding. He is always happy to help, and we couldn't be more pleased with the site. It feels personal, professional, and perfectly aligned with our brand.",
      quoteAuthor: "RED SEAL TEAM",
      thankYouText: "The Red Seal team for trusting us with your brand.",
      websiteUrl: "https://redseal.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "greenera",
      title: "GREENERA BRAND AND WEB",
      heroImage: "/projects/Greenera Hero.png",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "Greenera is an innovative green energy company dedicated to providing sustainable solar solutions for residential and commercial clients across South Africa. With a focus on renewable energy and environmental responsibility, Greenera helps customers reduce their carbon footprint while saving on energy costs. Their services include solar panel installation, energy storage systems, and comprehensive energy audits.",
      brief:
        "Greenera needed a complete brand identity and website that would position them as leaders in the green energy space. The brief called for a modern, eco-friendly design that communicated trust, innovation, and environmental stewardship. The website needed to educate potential customers about solar energy, showcase their services, and provide an easy way to request quotes and consultations.",
      approach:
        "We developed a bold, vibrant brand identity centered around Greenera's commitment to sustainability and innovation. The color palette features bright greens and blues that evoke nature and clean energy. The website is designed to be informative and conversion-focused, with clear calls-to-action, customer testimonials, and detailed service information. We also integrated a quote calculator to help customers understand potential savings. The result is a brand and website that inspires confidence and makes going green accessible to everyone.",
      thankYouText: "The Greenera team for sharing your vision with us.",
      websiteUrl: "https://greenera.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "garicon",
      title: "GARICON LANDING PAGE",
      heroImage: "/projects/Garicon Hero.png",
      accentColor: "var(--color-secondary-alt)",
      aboutCompany:
        "Garicon is a professional construction and project management company specializing in residential and commercial building projects throughout South Africa. With decades of combined experience, the Garicon team delivers high-quality construction services with a focus on craftsmanship, reliability, and client satisfaction. Their portfolio includes custom homes, renovations, commercial spaces, and large-scale development projects.",
      brief:
        "Garicon approached Six Foot Design Co to create a professional landing page that would establish their online presence and generate quality leads. The page needed to showcase their expertise, highlight key projects, and provide an easy way for potential clients to get in touch. The design had to convey professionalism, reliability, and the quality of their work.",
      approach:
        "We designed a streamlined, impactful landing page that immediately communicates Garicon's expertise and professionalism. The page features high-quality project photography, clear service descriptions, and prominent contact forms to capture leads. We used a sophisticated color palette and clean typography to create a premium feel that matches the quality of their work. The page is fully responsive and optimized for conversions, making it easy for potential clients to learn about Garicon's services and start a conversation.",
      thankYouText: "Garicon for the ongoing partnership.",
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
