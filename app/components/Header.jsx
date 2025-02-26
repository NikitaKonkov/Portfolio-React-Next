"use client"
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">JD</h1>
          </div>
          
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-2">
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;