import React from "react";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/pages/about" },
    { name: "PROJECTS", href: "/pages/projects" },
    { name: "NEWS/BLOG", href: "/pages/news" },
    { name: "SHOP", href: "/pages/shop" },
    { name: "FAQ", href: "/pages/faq" },
    { name: "CONTACT US", href: "/pages/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-carousel-container">
        <nav className="footer-nav">
          <div className="footer-nav-track">
            {/* First set */}
            {navItems.map((item, index) => (
              <Link key={`set1-${index}`} href={item.href}>
                {item.name}
              </Link>
            ))}
            {/* Duplicate set for seamless loop */}
            {navItems.map((item, index) => (
              <Link key={`set2-${index}`} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="footer-copy">
        Copyright &copy; 2026 Jason Huisman T/a Six Foot Design Co
      </div>
      <Link href="/pages/legal" className="footer-legal">
        THE LEGAL STUFF
      </Link>
    </footer>
  );
};

export default Footer;
