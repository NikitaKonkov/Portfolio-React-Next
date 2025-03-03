import React from 'react';
import FooterHeader from './FooterHeader';
import FooterSocialLinks from './FooterSocialLinks';
import FooterQuickLinks from './FooterQuickLinks';
import FooterContactInfo from './FooterContactInfo';

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

const FooterContent = () => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterHeader />
        <FooterSocialLinks links={socialLinks} />
        <FooterQuickLinks links={quickLinks} handleClick={handleNavClick} />
        <FooterContactInfo items={contactInfo} />
      </div>
    </div>
  );
};

export default FooterContent;