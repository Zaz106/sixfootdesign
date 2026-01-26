import Header from "@/components/layout/Header";
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
        "Angi's Cleaning Services is a leading commercial and residential cleaning service provider in Cape Town. With over 20 years of experience, Angi's Cleaning has built a strong reputation for reliable, high-quality cleaning services.",
      brief:
        "Angi's Cleaning required a modern, professional website to showcase their services and attract new clients. The website needed to be easy to navigate, mobile-friendly, and include an online booking system.",
      approach:
        "We decided that the approach had to be different so I partnered with my  son Joshua, who is a bit of a next.js guru, this turned out to be the  perfect platform for this site, not only did it add fresh tech, but took our creative direction to the next level and it became a fantastic partnership (on to the next lol!).",
      quoteText:
        "I cannot thank Six Foot Design Co. enough for the incredible work they did on my website. Jason and Josh went above and beyond to create a site that perfectly reflects my eco-friendly cleaning business. They captured the exact eco-chic look I envisioned while also making it simple and inviting for potential clients to use. Their creativity, attention to detail, and hard work truly exceeded my expectations. I am so grateful for their dedication and would highly recommend Six Foot Design Co. to anyone looking for a team that genuinely cares about bringing your vision to life.",
      quoteAuthor: "ANGI",
      thankYouText: "Cindy, Angi Cleans for the Partnership",
      websiteUrl: "https://angicleans.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "funfloats",
      title: "FUNFLOATS WEBSITE",
      heroImage: "/projects/Funfloats Hero.png",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "Funfloats is a playful and vibrant brand specializing in fun, inflatable pool floats and summer accessories. Based in South Africa, Funfloats aims to bring joy and excitement to every pool party, beach outing, and summer adventure. Their products are designed for people who love the sun, water, and making unforgettable summer memories.",
      brief:
        "Funfloats approached Six Foot Design Co with the vision of creating a fun, engaging e-commerce website that captured the brand's lively and carefree spirit. The site needed to feature their colorful product range, provide a seamless shopping experience, and reflect the playful energy of summer fun.",
      approach:
        "Working with Six Foot Design Co was an absolute pleasure. As a brand that thrives on fun and creativity, we needed a website that mirrored the excitement of our products. Six Foot Design Co not only understood our vision but brought it to life in a way that exceeded our expectations. The site is vibrant, easy to navigate, and perfectly captures the carefree summer vibes we wanted to convey. Our customers love it, and we've seen a significant increase in online sales since the launch. We couldn't be happier with the results and would highly recommend Six Foot Design Co to anyone looking for a creative and professional web design team.",
      thankYouText: "Ben Clorovis for the opportunity",
      websiteUrl: "https://funfloats.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "iron-maiden",
      title: "THE IRON MAIDEN WEBSITE",
      heroImage: "/projects/Iron Maiden Hero.png",
      accentColor: "var(--color-secondary)",
      aboutCompany:
        "Martine De Vos, the founder of The Iron Maiden, is a passionate cook and content creator based in Cape Town. She shares simple, delicious, and beautifully presented dishes that are both nutritious and comforting. Martine's approach to cooking focuses on showcasing the natural beauty of food while making healthy eating accessible and enjoyable. Through her recipes and social media presence, she inspires her audience to fall in love with cooking and eating well.",
      brief:
        "Martine approached Six Foot Design Co to create a one-page custom website that would serve as a central hub for her cooking content and brand. The site needed to bring together her social media presence, cooking philosophy, and recipes in a visually appealing, user-friendly format. The goal was to design a space where visitors could easily explore her content, learn more about her cooking approach, and connect with her story.",
      approach:
        "\"Working with Six Foot Design Co was an incredible experience from start to finish! I had a clear vision of what I wanted my website to look and feel like, and the team brought it to life in a way that exceeded my expectations. The design is clean, modern, and beautifully captures the essence of my brand. They took the time to understand my cooking philosophy and translated that into a visually stunning, easy-to-navigate website. The process was smooth, professional, and collaborative—I felt supported every step of the way. Since launching the site, I've received so many compliments on the design, and it has become a perfect hub for my content. I couldn't be happier with the results!\"",
      quoteText:
        "Working with Jason on my website was an absolute pleasure. He guided me through every stage of the process with patience and clear direction, turning my ideas into something visually striking and perfectly suited to my business. His creative input and technical skill made everything easy and enjoyable — I felt supported and inspired from start to finish. I couldn’t be happier with the result!",
      quoteAuthor: "MARTINE",
      thankYouText:
        "Martine De Vos for opportunity and for being kind enough to spread the word further throughout the community",
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
