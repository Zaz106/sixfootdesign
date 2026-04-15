import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FaqHeroSection from "@/components/sections/faq/FaqHeroSection";
import IntroductionSection from "@/components/sections/faq/IntroductionSection";
import ProcessWorkflowSection from "@/components/sections/faq/ProcessWorkflowSection";
import LogoDesignSection from "@/components/sections/faq/LogoDesignSection";
import WebsiteDesignSection from "@/components/sections/faq/WebsiteDesignSection";
import PricingSection from "@/components/sections/faq/PricingSection";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Six Foot Design Co — our design process, logo design, website design, pricing, and how we work with clients.",
  openGraph: {
    title: "FAQ | Six Foot Design Co",
    description:
      "Have questions? We have answers. Explore our FAQ covering our process, logo design, website design, pricing, and more.",
    url: "https://www.sixfootdesignco.co.za/pages/faq",
  },
};

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
