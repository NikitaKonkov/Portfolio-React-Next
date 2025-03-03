import React from 'react';

export default function HeaderControls({ 
  darkMode, 
  isAnimating, 
  toggleDarkMode, 
  toggleMenu,
  menuOpen // Accept menuOpen as a prop
}) {
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