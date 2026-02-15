import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSection from "@/components/layout/SocialSection";
import ShopHeroSection from "@/components/sections/shop/ShopHeroSection";

export default function ShopPage() {
  return (
    <main>
      <Header />
      <ShopHeroSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
