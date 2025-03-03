"use client"
import React, { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // Add this state for animation

  useEffect(() => {
    // Check if user has dark mode preference saved
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Add this effect to handle animation timing
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setIsAnimating(true); // Start animation
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const handleNavClick = (e, section) => {
    e.preventDefault();
    if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-light-primary dark:bg-dark-primary shadow-md z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Now positioned at the left edge */}

<div className="flex-shrink-0">
  <svg
    width="64"
    height="64"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="filter dark:invert transition-colors duration-300"
  >
    {/* Background circle with dark mode support using CSS classes */}
    <circle
      cx="32"
      cy="32"
      r="30"
      className="fill-light-secondary stroke-light-border dark:stroke-dark-border transition-colors duration-300"
      strokeWidth="1"
    />
    {/* Gradient definitions */}
    <defs>
      <linearGradient id="nGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#3498db", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9b59b6", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="kGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f39c12", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#2ecc71", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M20 44 V20 L28 44 V20"
      className="stroke-light-text transition-colors duration-300"
      strokeWidth="2"
      fill="url(#nGradient)"
    />
    <path
      d="M36 44 V20"
      className="stroke-light-text transition-colors duration-300"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M36 32 L46 24 L36 20 Z"
      className="stroke-light-text transition-colors duration-300"
      strokeWidth="2"
      fill="url(#kGradient)"
    />
    <path
      d="M36 32 L46 40 L36 44 Z"
      className="stroke-light-text transition-colors duration-300"
      strokeWidth="2"
      fill="url(#kGradient)"
    />
  </svg>
</div>
          {/* Desktop Navigation - Centered in the middle */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Skills', 'Contact', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Right side controls */}
          <div className="flex items-center">
            {/* Dark Mode Toggle - Now positioned at the right edge */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary hover:bg-dark-accent/10 dark:hover:bg-dark-black transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                // Moon icon (PNG) with rotation
                <img
                  src="/icons/moon.png"
                  alt="Switch to Light Mode"
                  className={`w-10 h-10 filter brightness-50 transition-transform duration-500 ${
                    isAnimating ? 'rotate-[-180deg]' : ''
                  }`}
                />
              ) : (
                // Sun icon (PNG) with rotation
                <img
                  src="/icons/sun.png"
                  alt="Switch to Dark Mode"
                  className={`w-10 h-10 filter brightness-100 invert-[.2] transition-transform duration-500 ${
                    isAnimating ? 'rotate-[180deg]' : ''
                  }`}
                />
              )}
            </button>
            {/* Hamburger Menu Icon */}
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary focus:outline-none transition-colors duration-300">
                <span className="sr-only">Open main menu</span>
                <div className="space-y-2">
                  <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Skills', 'Contact', 'Projects'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="block px-3 py-2 rounded-md text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;