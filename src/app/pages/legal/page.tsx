import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSection from "@/components/layout/SocialSection";
import LegalHeroSection from "@/components/sections/legal/LegalHeroSection";

export default function LegalPage() {
  return (
    <main>
      <Header />
      <LegalHeroSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
