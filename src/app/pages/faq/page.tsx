"use client";

import Header from '@/components/layout/Header';
import FaqHeroSection from '@/components/sections/faq/FaqHeroSection';
import IntroductionSection from '@/components/sections/faq/IntroductionSection';
import ProcessWorkflowSection from '@/components/sections/faq/ProcessWorkflowSection';
import LogoDesignSection from '@/components/sections/faq/LogoDesignSection';
import WebsiteDesignSection from '@/components/sections/faq/WebsiteDesignSection';
import PricingSection from '@/components/sections/faq/PricingSection';
import SocialSection from '@/components/layout/SocialSection';
import Footer from '@/components/layout/Footer';

export default function FAQPage() {
  return (
    <main>
       <Header />
       <FaqHeroSection />
       <IntroductionSection />
       <ProcessWorkflowSection />
       <LogoDesignSection />
       <WebsiteDesignSection />
       <PricingSection />
       <SocialSection />
       <Footer />
    </main>
  );
}