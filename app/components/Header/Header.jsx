"use client"
import React, { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderControls from './HeaderControls';
import MobileNav from './MobileNav';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 w-full bg-light-primary dark:bg-dark-primary shadow-md z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <HeaderLogo />
          <HeaderNav handleNavClick={handleNavClick} />
          <HeaderControls 
            darkMode={darkMode}
            isAnimating={isAnimating}
            toggleDarkMode={toggleDarkMode}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen} // Pass menuOpen state here
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

export default Header;