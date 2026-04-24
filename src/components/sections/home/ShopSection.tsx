import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./ShopSection.css";

const ShopSection = () => {
  return (
    <section className="shop">
      <div className="section-header">
        <h2>
          COOL THINGS TO BUY<span className="header-extension"> August 2026</span>
        </h2>
      </div>
      <div className="shop-grid">
        <div className="shop-item">
          <Image
            src="/Shop Image 1.jpeg"
            alt="Design resources from Six Foot Design Co"
            width={400}
            height={400}
            className="shop-img"
          />
        </div>
        <div className="shop-item">
          <Image
            src="/Shop Image 2.png"
            alt="Creative templates for small businesses"
            width={400}
            height={400}
            className="shop-img"
          />
        </div>
        <div className="shop-item">
          <Image
            src="/Shop Image 3.png"
            alt="Branding assets and design products"
            width={400}
            height={400}
            className="shop-img"
          />
        </div>
      </div>
      <Link href="/pages/shop">
        <button className="btn shop-btn">VISIT THE SHOP</button>
      </Link>
    </section>
  );
};

export default ShopSection;
