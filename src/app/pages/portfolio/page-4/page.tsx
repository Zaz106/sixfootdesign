import Header from "@/components/layout/Header";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";
import PortfolioContentSection from "@/components/sections/portfolio/PortfolioProjectSection";
import PortfolioPagination from "@/components/layout/PortfolioPagination";

const PortfolioPage4 = () => {
  const projects = [
    {
      id: "mjc-distributors",
      title: "MJC ONLINE CATALOGUE",
      heroImage: "/projects/MJC Online Hero.png",
      accentColor: "var(--color-secondary-alt)",
      aboutCompany:
        "MJC Distributors is a leading South African wholesale distributor specializing in beauty, cosmetics, and personal care products. With an extensive product range and competitive pricing, MJC serves salons, spas, retailers, and beauty professionals across the country. Their commitment to quality products and excellent customer service has made them a trusted partner in the beauty industry.",
      brief:
        "MJC Distributors needed a comprehensive online catalogue website that would allow their customers to easily browse their extensive product range, check stock availability, and place orders efficiently. The website needed to handle thousands of products across multiple categories while maintaining fast performance and an intuitive user experience. The goal was to modernize their ordering process and make it easier for customers to do business with MJC.",
      approach:
        "We developed a robust, user-friendly online catalogue system that showcases MJC's vast product range in an organized, searchable format. The website features advanced filtering and search capabilities, detailed product information, and a streamlined ordering process. We implemented a clean, professional design that puts the focus on the products while ensuring fast load times and mobile responsiveness. The result is a powerful e-commerce platform that has significantly improved MJC's customer experience and operational efficiency.",
      quoteText:
        "Working with Six Foot Design Co was an absolute game-changer for our business. Jason and his team took the time to understand our unique needs and delivered a website that not only looks fantastic but also functions flawlessly. The online catalogue has made it so much easier for our customers to browse and order, and we've seen a significant increase in sales since the launch. Their attention to detail, professionalism, and dedication to getting everything just right was truly impressive. We couldn't recommend them more highly!",
      quoteAuthor: "MJC TEAM",
      thankYouText: "Mark, Michelle, Madeline and team for the opportunity.",
      websiteUrl: "https://mjcdistributors.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "atonement",
      title: "ATONEMENT ILLUSTRATION",
      heroImage: "/projects/Atonement Illustration Hero.png",
      accentColor: "var(--color-secondary)",
      aboutCompany:
        "Greenera Energy provides renewable energy advice, design, supply, installation and maintenance of alternative energy technologies including Grid-Tied PV, Hybrid Off-Grid and AC coupled PV, and Energy Storage Systems.",
      brief:
        "Greenera Energy designs to the Greenera Code. This encouraged best practice in all our dealings with our customers, we are provide renewable energy advise on technologies that are suitable for the priorities and aims of our customers. Think Greenera.",
      approach:
        "Take on the business as trust on three key service pillars — Renewable Energy Solutions, Custom Intelligent Building, and Energy Efficiency & Management — we took a strategic approach to the logo. Rather than trying to represent each service literally, we focused on the things each strand of renewables is aiming to achieve. A union of all 3 services, formed in a beautiful hexagonal shape all meeting in the Nature of the brand which ties the pieces together.",
      thankYouText: "Nico Sticking for the opportunity.",
      websiteUrl: "https://www.cityonahill.co.za/contact",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "twm",
      title: "TRADITIONALLY WIRED MEDIA",
      heroImage: "/projects/Traditional Wired Hero.png",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "Traditionally Wired Media is a vibrant creative agency specializing in brand development, graphic design, and multimedia content creation. With a fresh approach to traditional media and a passion for storytelling, TWM helps brands connect with their audiences in meaningful and memorable ways. Their work spans logo design, brand identity, video production, and social media content.",
      brief:
        "Traditionally Wired Media approached Six Foot Design Co for a complete logo design and brand identity that would capture their unique blend of traditional and contemporary creative approaches. The brief called for a bold, memorable mark that communicated creativity, professionalism, and innovation. The logo needed to work across various applications, from business cards and stationery to digital platforms and video content.",
      approach:
        "We created a dynamic, versatile logo that perfectly captures TWM's creative energy and professional approach. The design features bold typography and a distinctive mark that references both traditional media and modern innovation. The color palette is vibrant and attention-grabbing, reflecting the agency's creative personality. We developed comprehensive brand guidelines to ensure consistent application across all touchpoints. The result is a strong, memorable brand identity that sets TWM apart in the competitive creative services market.",
      thankYouText: "Jason and Dominic for the opportunity.",
      websiteUrl: "https://traditionallywired.co.za",
      buttonText: "VIEW THE LOGO IN ACTION",
    },
  ];

  return (
    <main className="portfolio-page">
      <Header />
      <PortfolioContentSection
        heroTitle="MJC ONLINE CATALOGUE"
        projects={projects}
      />
      <PortfolioPagination currentPage={4} totalPages={4} />
      <SocialSection />
      <Footer />
    </main>
  );
};

export default PortfolioPage4;
