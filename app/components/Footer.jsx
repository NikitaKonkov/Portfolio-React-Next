"use client";
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Social media links data
  const socialLinks = [
    { url: "https://github.com/NikitaKonkov", icon: "fab fa-github", label: "GitHub" },
    { url: "https://www.linkedin.com/in/mikita-wagner-253361350/", icon: "fab fa-linkedin", label: "LinkedIn" },
    { url: "https://twitter.com", icon: "fab fa-twitter", label: "Twitter" }
  ];
  
  // Quick links data
  const quickLinks = [
    { url: "#home", label: "Home" },
    { url: "#about", label: "About" },
    { url: "#skills", label: "Skills" },
    { url: "#contact", label: "Contact" },
    { url: "#projects", label: "Projects" }
  ];
  
  // Contact info data
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      content: "nikita.wagner1997@gmail.com",
      url: "mailto:nikita.wagner1997@gmail.com",
      isLink: true
    },
    {
      icon: "fas fa-phone",
      content: "+49 (0176) 23434567",
      url: "tel:+4901762343456",
      isLink: true
    },
    {
      icon: "fas fa-map-marker-alt",
      content: "Homburg, Saarland",
      isLink: false
    }
  ];
  
  // Legal links data
  const legalLinks = [
    { url: "/privacy", label: "Privacy Policy" },
    { url: "/terms", label: "Terms of Service" }
  ];
  
  // Navigation click handler - same as in Header component
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
  };
  
  return (
    <footer className="bg-gray-100 dark:bg-dark-secondary text-light-text/50 dark:text-dark-text/80 transition-colors duration-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">Nikita Wagner</h3>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-4">
              A passionate full-stack developer dedicated to creating innovative web solutions
              and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text/60 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    onClick={(e) => handleNavClick(e, link.label.toLowerCase())}
                    className="text-light-text/60 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <i className={`${item.icon} text-light-text/50 dark:text-dark-text/50`}></i>
                  {item.isLink ? (
                    <a
                      href={item.url}
                      className="text-light-text/60 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-light-text/60 dark:text-dark-text/60">{item.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-200 dark:bg-dark-primary border-t dark:border-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-text/60 dark:text-dark-text/60 text-sm">
              &copy; {currentYear} Nikita Wagner. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-light-text/60 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-accent text-sm mx-3 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;