import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Terms and conditions, privacy policy, and legal information for Six Foot Design Co.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/pages/legal",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Legal | Six Foot Design Co",
    url: "https://www.sixfootdesignco.co.za/pages/legal",
  },
};
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
