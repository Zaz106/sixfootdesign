"use client";

import Header from '@/components/layout/Header';
import ProjectsHeroSection from '@/components/sections/projects/ProjectsHeroSection';
import ProjectsGridSection from '@/components/sections/projects/ProjectsGridSection';
import SocialSection from '@/components/layout/SocialSection';
import Footer from '@/components/layout/Footer';

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
