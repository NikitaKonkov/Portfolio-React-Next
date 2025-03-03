"use client";
import React from 'react';
import FooterHeader from './FooterHeader';
import FooterContent from './FooterContent';
import FooterBottomBar from './FooterBottomBar';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-secondary text-light-text/50 dark:text-dark-text/80 transition-colors duration-300">
      <FooterContent />
      <FooterBottomBar year={currentYear} />
    </footer>
  );
}

export default Footer;