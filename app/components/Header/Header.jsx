"use client";
import React, { useState, useEffect, useRef } from 'react';

// Header Component
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle document clicks to toggle header visibility
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // If click is on the header, do nothing
      if (headerRef.current && headerRef.current.contains(event.target)) {
        return;
      }
      
      // Toggle header visibility on clicks outside the header
      setIsHeaderVisible(prev => !prev);
    };

    // Add the click event listener to the document
    document.addEventListener('click', handleDocumentClick);
    
    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setIsAnimating(true);
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

  // Prevent clicks on the header from bubbling up to document
  const handleHeaderClick = (e) => {
    e.stopPropagation();
  };

  return (
    <header 
      ref={headerRef}
      onClick={handleHeaderClick}
      className={`fixed top-0 left-0 right-0 w-full bg-light-primary dark:bg-dark-primary shadow-md z-50 transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[100vw] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <HeaderLogo />
          <HeaderNav handleNavClick={handleNavClick} />
          <HeaderControls
            darkMode={darkMode}
            isAnimating={isAnimating}
            toggleDarkMode={toggleDarkMode}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        </div>
        <MobileNav
          menuOpen={menuOpen}
          handleNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}

// HeaderLogo Component
function HeaderLogo() {
  return (
    <div className="flex-shrink-0">
      <svg
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="filter dark:invert transition-colors duration-300"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          className="fill-light-secondary stroke-light-border dark:stroke-dark-border transition-colors duration-300"
          strokeWidth="1"
        />
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
  );
}

// HeaderNav Component
function HeaderNav({ handleNavClick }) {
  return (
    <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
      <ul className="flex space-x-8">
        {['Home', 'About', 'Skills', 'Contact', 'Projects'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// HeaderControls Component
function HeaderControls({ darkMode, isAnimating, toggleDarkMode, toggleMenu, menuOpen }) {
  return (
    <div className="flex items-center">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary hover:bg-dark-accent/10 dark:hover:bg-dark-black transition-all duration-300"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <img
            src="/icons/moon.png"
            alt="Switch to Light Mode"
            className={`w-10 h-10 filter brightness-50 transition-transform duration-500 ${
              isAnimating ? 'rotate-[-180deg]' : ''
            }`}
          />
        ) : (
          <img
            src="/icons/sun.png"
            alt="Switch to Dark Mode"
            className={`w-10 h-10 filter brightness-100 invert-[.2] transition-transform duration-500 ${
              isAnimating ? 'rotate-[180deg]' : ''
            }`}
          />
        )}
      </button>
      <div className="md:hidden ml-4">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary focus:outline-none transition-colors duration-300"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-2">
            <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>
    </div>
  );
}

// MobileNav Component
function MobileNav({ menuOpen, handleNavClick }) {
  return (
    <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {['Home', 'About', 'Skills', 'Contact', 'Projects'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="block px-3 py-2 rounded-md text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;