import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ContactUsHeroSection from "@/components/sections/contact-us/ContactUsHeroSection";
import ContactFormSection from "@/components/sections/contact-us/ContactFormSection";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start a conversation with Six Foot Design Co. Get in touch to discuss your branding, advertising, or web design project — we'd love to hear your story.",
  openGraph: {
    title: "Contact Us | Six Foot Design Co",
    description:
      "Ready to partner with us on a project? Drop us an email or fill in the form and we'll be in touch shortly.",
    url: "https://www.sixfootdesignco.co.za/pages/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactUsHeroSection />
      <ContactFormSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
