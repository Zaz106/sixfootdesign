"use client";

import Header from '@/components/layout/Header';
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import WhoWeAreSection from '@/components/sections/about/WhoWeAreSection';
import OurTeamSection from '@/components/sections/about/OurTeamSection';
import WhyWeDoThisSection from '@/components/sections/about/WhyWeDoThisSection';
import WhatWeValueSection from '@/components/sections/about/WhatWeValueSection';
import MeetMoSection from '@/components/sections/about/MeetMoSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import OurProcessSection from '@/components/sections/about/OurProcessSection';
import SocialSection from '@/components/layout/SocialSection';
import Footer from '@/components/layout/Footer';

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