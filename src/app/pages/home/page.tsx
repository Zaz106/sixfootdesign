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
  title: "Branding & Web Design",
  description:
    "Six Foot Design Co — a Johannesburg creative studio specialising in branding, advertising, illustration, and web design for small businesses.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/",
  },
  openGraph: {
    title: "Six Foot Design Co | Branding & Web Design",
    description:
      "A faith-driven creative studio in Johannesburg helping small businesses grow through purposeful branding, advertising, illustration, and web design.",
    url: "https://www.sixfootdesignco.co.za/",
    type: "website",
    images: [
      {
        url: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Six Foot Design Co — Branding & Web Design",
      },
    ],
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.sixfootdesignco.co.za/#business",
  name: "Six Foot Design Co",
  url: "https://www.sixfootdesignco.co.za",
  logo: "https://www.sixfootdesignco.co.za/six-foot-logo-dark.svg",
  image: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
  description:
    "A faith-driven creative studio in Johannesburg specialising in branding, advertising, illustration, and web design for small businesses.",
  telephone: "+27-84-741-3340",
  email: "getintouch@sixfootdesignco.co.za",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advertising" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Illustration" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/sixfootdesignco/",
    "https://www.linkedin.com/company/sixfootdesignco/",
    "https://www.behance.net/jasonhuisman1",
    "https://za.pinterest.com/sixfootdesignco/",
    "https://www.facebook.com/SixFootDesignCo/",
    "https://medium.com/@jason.huisman75",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
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
