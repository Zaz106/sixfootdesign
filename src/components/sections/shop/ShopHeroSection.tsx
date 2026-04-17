import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./ShopHeroSection.css";
import TextType from "@/components/ui/TypeWriter";

const ShopHeroSection = () => {
  return (
    <section className="shop-hero">
      <div className="shop-hero-content">
        <h2 className="shop-hero-label">SHOP</h2>
        <TextType
          text={["COOL THINGS TO BUY"]}
          className="shop-hero-title"
          as="h1"
          typingSpeed={40}
          cursorCharacter="|"
          loop={false}
        />
        <div className="shop-hero-description">
          <p>
            From the start we have wanted to start a small shop, based around Mo
            and the positive creative message he symbolizes. After putting it
            off for two years, we guess there is no better time than the
            present, but there is some preparation still to do so watch this
            space.
          </p>
        </div>

        <div className="shop-hero-image-container">
          <Image
            src="/Shop Image - Background 2.jpeg"
            alt="Shop Opening June 2026"
            width={1920}
            height={1080}
            className="shop-hero-image"
            priority
          />
        </div>

        <Link href="/pages/contact">
          <button className="btn shop-cta-btn">CONTACT US</button>
        </Link>
      </div>
    </section>
  );
};

export default ShopHeroSection;
