import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import JourneySection from "@/components/sections/home/JourneySection";
import NewsSection from "@/components/sections/home/NewsSection";
import ShopSection from "@/components/sections/home/ShopSection";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Strategic Branding, Advertising & Web Design",
  description:
    "Six Foot Design Co is a Johannesburg-based creative studio delivering strategic, audience-first branding, advertising, illustration, and web design for small businesses.",
  openGraph: {
    title: "Six Foot Design Co | Strategic Branding, Advertising & Web Design",
    description:
      "A faith-driven creative studio in Johannesburg helping small businesses grow through purposeful branding, advertising, illustration, and web design.",
    url: "https://www.sixfootdesignco.co.za/",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Six Foot Design Co",
  url: "https://www.sixfootdesignco.co.za",
  logo: "https://www.sixfootdesignco.co.za/six-foot-logo-dark.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27-84-741-3340",
    contactType: "customer service",
    email: "getintouch@sixfootdesignco.co.za",
    areaServed: "ZA",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wilgeheuwel, Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  sameAs: [
    "https://www.instagram.com/sixfootdesignco/",
    "https://www.linkedin.com/company/sixfootdesignco/",
    "https://www.behance.net/jasonhuisman1",
    "https://za.pinterest.com/sixfootdesignco/",
    "https://www.facebook.com/SixFootDesignCo/",
    "https://medium.com/@jason.huisman75",
  ],
  description:
    "A faith-driven creative studio in Johannesburg specialising in branding, advertising, illustration, and web design for small businesses.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <NewsSection />
        <ShopSection />
        <SocialSection />
        <Footer />
      </main>
    </>
  );
}
