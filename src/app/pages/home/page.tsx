"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/home/HeroSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ProjectsSection from '@/components/sections/home/ProjectsSection';
import JourneySection from '@/components/sections/home/JourneySection';
import NewsSection from '@/components/sections/home/NewsSection';
import ShopSection from '@/components/sections/home/ShopSection';
import SocialSection from '@/components/layout/SocialSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
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
  );
}
