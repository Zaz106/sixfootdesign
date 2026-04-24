import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ProjectsHeroSection from "@/components/sections/projects/ProjectsHeroSection";
import ProjectsGridSection from "@/components/sections/projects/ProjectsGridSection";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Six Foot Design Co’s portfolio of branding, web design, and advertising work — real projects for real South African small businesses, built with strategy and heart.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/pages/projects",
  },
  openGraph: {
    title: "Projects | Six Foot Design Co",
    description:
      "A curated selection of branding, advertising, illustration, and web design work showcasing our passion for thoughtful design and strong visual storytelling.",
    url: "https://www.sixfootdesignco.co.za/pages/projects",
    images: [
      {
        url: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Six Foot Design Co Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <ProjectsHeroSection />
      <ProjectsGridSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
