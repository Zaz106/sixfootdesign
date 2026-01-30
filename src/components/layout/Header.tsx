"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
        setIsMobileMenuOpen(false); // Close mobile menu on scroll down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside nav and outside toggle button
      const target = event.target as Element;
      const isToggle = target.closest('.mobile-toggle-wrapper');
      
      if (isMobileMenuOpen && mobileNavRef.current && !mobileNavRef.current.contains(target as Node) && !isToggle) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo">
         <img src="/Sixfoot Design logo.svg" alt="Six Foot Design Co" /> 
      </div>
      
      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        <Link href="/">HOME</Link>
        <Link href="/pages/about">ABOUT US</Link>
        <Link href="/pages/projects">PROJECTS</Link>
        <Link href="https://sixfootdesignco.blogspot.com/">NEWS/BLOG</Link>
        <Link href="/pages/faq">FAQ</Link>
        <Link href="/pages/contact">CONTACT US</Link>
      </nav>

      {/* Mobile Toggle */}
      <div className="mobile-toggle-wrapper">
        <input 
          id="checkbox" 
          type="checkbox" 
          checked={isMobileMenuOpen}
          onChange={toggleMenu}
        />
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
      </div>

      {/* Mobile Navigation */}
      <nav 
        ref={mobileNavRef}
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
      >
        <Link href="/" onClick={closeMenu}>HOME</Link>
        <Link href="/pages/about" onClick={closeMenu}>ABOUT US</Link>
        <Link href="/pages/projects" onClick={closeMenu}>PROJECTS</Link>
        <Link href="https://sixfootdesignco.blogspot.com/" onClick={closeMenu}>NEWS/BLOG</Link>
        <Link href="/pages/faq" onClick={closeMenu}>FAQ</Link>
        <Link href="/pages/contact" onClick={closeMenu}>CONTACT US</Link>
      </nav>
    </header>
  );
};

export default Header;
