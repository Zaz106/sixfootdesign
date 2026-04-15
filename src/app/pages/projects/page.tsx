import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ProjectsHeroSection from "@/components/sections/projects/ProjectsHeroSection";
import ProjectsGridSection from "@/components/sections/projects/ProjectsGridSection";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Six Foot Design Co's portfolio of branding, web design, and advertising projects — real work for real businesses built with strategy and heart.",
  openGraph: {
    title: "Projects | Six Foot Design Co",
    description:
      "A curated selection of branding, advertising, illustration, and web design work showcasing our passion for thoughtful design and strong visual storytelling.",
    url: "https://www.sixfootdesignco.co.za/pages/projects",
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
