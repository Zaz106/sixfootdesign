import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the Six Foot Design Co shop for design resources, templates, and creative assets crafted for small businesses.",
  openGraph: {
    title: "Shop | Six Foot Design Co",
    description:
      "Design resources, templates, and creative assets from Six Foot Design Co.",
    url: "https://www.sixfootdesignco.co.za/pages/shop",
  },
};
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
