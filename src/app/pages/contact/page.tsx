"use client";

import Header from '@/components/layout/Header';
import ContactUsHeroSection from '@/components/sections/contact-us/ContactUsHeroSection';
import ContactFormSection from '@/components/sections/contact-us/ContactFormSection';
import SocialSection from '@/components/layout/SocialSection';
import Footer from '@/components/layout/Footer';

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