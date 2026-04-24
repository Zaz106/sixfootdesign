import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ContactUsHeroSection from "@/components/sections/contact-us/ContactUsHeroSection";
import ContactFormSection from "@/components/sections/contact-us/ContactFormSection";
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a quote from Six Foot Design Co in Johannesburg. Reach out to discuss your branding, advertising, or web design project — we’d love to hear your story.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/pages/contact",
  },
  openGraph: {
    title: "Contact Us | Six Foot Design Co",
    description:
      "Ready to partner with us on a project? Drop us an email or fill in the form and we’ll be in touch shortly.",
    url: "https://www.sixfootdesignco.co.za/pages/contact",
    images: [
      {
        url: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Contact Six Foot Design Co",
      },
    ],
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
