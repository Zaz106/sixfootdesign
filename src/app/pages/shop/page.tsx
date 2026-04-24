import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the Six Foot Design Co shop for design resources, templates, and creative assets crafted for small businesses in South Africa.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/pages/shop",
  },
  openGraph: {
    title: "Shop | Six Foot Design Co",
    description:
      "Design resources, templates, and creative assets from Six Foot Design Co.",
    url: "https://www.sixfootdesignco.co.za/pages/shop",
    images: [
      {
        url: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Six Foot Design Co Shop",
      },
    ],
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
