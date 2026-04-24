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
    "Common questions about Six Foot Design Co — our design process, logo design, website design, pricing, and how we work with small businesses in South Africa.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/pages/faq",
  },
  openGraph: {
    title: "FAQ | Six Foot Design Co",
    description:
      "Have questions? We have answers. Explore our FAQ covering our process, logo design, website design, pricing, and more.",
    url: "https://www.sixfootdesignco.co.za/pages/faq",
    images: [
      {
        url: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Six Foot Design Co FAQ",
      },
    ],
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a discovery call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A quick call (Zoom or phone) to understand your needs. After this, we work via email, WhatsApp, or monthly Zoom check-ins. We also send a questionnaire to refine the project direction.",
        },
      },
      {
        "@type": "Question",
        name: "How does your design process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. Discovery & Quote – We discuss your project, quote, and start after the deposit is paid. 2. Concept Development – We sketch ideas before moving to digital design. 3. Refinement & Revisions – Up to 3 rough concepts, with 1–3 revision rounds. 4. Final Delivery – After approval and final payment, we send the completed files.",
        },
      },
      {
        "@type": "Question",
        name: "When does a project begin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once payment is received, your project enters our production queue.",
        },
      },
      {
        "@type": "Question",
        name: "What file formats do I receive for my logo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your logo will be provided in JPEG, PNG (transparent), Vector PDF, and EPS.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use a CMS for website design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, depending on the project. Our default CMS is October/Winter CMS, similar to WordPress. More detailed sites requiring deeper coding and functionality are built in Next.js.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our base SEO includes title/meta descriptions, social tags, and Google Analytics setup. Advanced SEO management is available as an add-on.",
        },
      },
      {
        "@type": "Question",
        name: "How do you price projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer fixed-price packages with either 50% upfront and 50% on completion, or 50% upfront, 25% at a milestone, and 25% before final delivery. For urgent projects, we charge hourly ad-hoc rates.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer retainers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer two retainers — one for micro/small businesses and one for larger businesses — both aimed at ongoing brand partnership.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have a price list?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No fixed price list aside from logo and web packages, since every project is unique. We provide custom quotes based on your needs.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
    </>
  );
}
