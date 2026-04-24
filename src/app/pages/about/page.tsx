import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import WhoWeAreSection from "@/components/sections/about/WhoWeAreSection";
import OurTeamSection from "@/components/sections/about/OurTeamSection";
import WhyWeDoThisSection from "@/components/sections/about/WhyWeDoThisSection";
import WhatWeValueSection from "@/components/sections/about/WhatWeValueSection";
import MeetMoSection from "@/components/sections/about/MeetMoSection";
import ServicesSection from "@/components/sections/about/ServicesSection";
import OurProcessSection from "@/components/sections/about/OurProcessSection";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Six Foot Design Co — a faith-driven creative studio in Johannesburg delivering honest, strategic branding and web design for small businesses.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/pages/about",
  },
  openGraph: {
    title: "About Us | Six Foot Design Co",
    description:
      "We are a home-based studio with big passion, powered by late nights, endless ideas, and a genuine desire to see our clients thrive.",
    url: "https://www.sixfootdesignco.co.za/pages/about",
    images: [
      {
        url: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "About Six Foot Design Co",
      },
    ],
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <Header />
      <AboutHeroSection />
      <WhoWeAreSection />
      <OurTeamSection />
      <WhyWeDoThisSection />
      <WhatWeValueSection />
      <MeetMoSection />
      <ServicesSection />
      <OurProcessSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
