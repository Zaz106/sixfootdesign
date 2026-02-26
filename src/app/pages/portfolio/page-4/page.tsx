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
        "MJC Distributors are a premier food distribution company based in South Africa, delivering high-quality, reliable, and cost-effective solutions to businesses nationwide. With years of industry expertise and a dedication to excellence, we proudly serve some of South Africa's largest corporations, food service providers, and retailers.\n\nTheir mission is to ensure that every product we distribute adheres to the highest standards of quality, safety, and consistency. We specialize in the efficient and timely delivery of a diverse range of food products, from everyday essentials to specialized ingredients. Our clients can always rely on us to provide the products they need, when they need them, supporting their operations with seamless and dependable service.",
      brief:
        "MJC Distributors approached us to create a clean, informative website built around their online catalogue, with the addition of thoughtful touches they hadn’t had before — but felt were needed to better support their customers.",
      approach:
        "We kept things simple from wireframe to final build. One of our favourite parts of the project was designing a catalogue that’s easy to navigate and doesn’t overwhelm. We achieved this with a clean dropdown toggle that neatly reveals the categories, keeping everything clear, intuitive, and user-friendly.",
      quoteText:
        "We recently had the pleasure of working with Jason from Six Foot Design Co, for our website project. We must say, the service provided was top-notch! Jason's passion for his work shines through in every interaction, making the process enjoyable and efficient. He is very hands-on and dedicated to delivering the best results. It was truly inspiring to collaborate with such a committed professional.",
      quoteAuthor: "MONIEK",
      thankYouText: "Mark, Moniek, Melissa and team for opportunity.",
      websiteUrl: "https://mjcdistributors.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "atonement",
      title: "ATONEMENT ILLUSTRATION",
      heroImage: "/projects/Atonement Illustration Hero.png",
      accentColor: "var(--color-secondary)",
      aboutCompany:
        "GreenEra Energy provides renewable energy advice; design; supply, installation and maintenance of renewable technologies. We are GreenCard Certified and SAPVIA Approved to install Solar Photo Voltaic (Solar PV) and Energy Storage Systems.\n\nGreenEra Energy adheres to the Consumer Code. This encourages best practice in all our dealings with our customers. We will provide renewable energy advice on technologies that are suitable for the premises and will not undertake “hard selling”.",
      brief:
        "We were tasked with developing a brand that was immediately clear in its purpose, positioning the company as a provider of holistic renewable energy solutions.",
      approach:
        "Just as the business is built on three key service pillars — Renewable Energy Solutions, Carbon Footprint Auditing, and Energy Efficiency & Management — we took a strategic approach to the logo. Rather than trying to represent each service literally, we focused on the three core areas of renewables to clearly show that the business offers a balanced, holistic solution. The use of green and blue reinforces the eco-friendly nature of the brand and ties the identity together.",
      thankYouText: "Nico Stickling for the opportunity.",
      websiteUrl:
        "mailto:jason@sixfootdesignco.co.za?subject=Commission%20Enquiry",
      buttonText: "HAVE A COMMISSION PLEASE CLICK HERE",
    },
    {
      id: "twm",
      title: "TRADITIONALLY WIRED MEDIA",
      heroImage: "/projects/Traditional Wired Hero.png",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "Traditionally Wired Media started as a stand against the notion that print media was rumoured to be dying or dead. Both founders being crafted by pages and audience figures of a medium perceived to add no more value by an industry who’s focus was captured by circulation declines and measurable data promises.",
      brief:
        "We here approached by Traditionally Wired Media in 2020 to get them started with a simple logo.",
      approach:
        "They work across all media platforms, with a strong focus on print. We approached the identity with the understanding that print and digital are flexible, fluid mediums that work best in partnership—each complementing the other. Proudly South African at heart, these considerations guided the creation of a logo and wordmark that are simple, adaptable, and built to work seamlessly across every application.",
      thankYouText: "Justin and Damion for opportunity.",
      websiteUrl: "https://traditionallywiredmedia.com",
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
