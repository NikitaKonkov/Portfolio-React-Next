import React from 'react';
import FooterHeader from './FooterHeader';
import FooterSocialLinks from './FooterSocialLinks';
import FooterQuickLinks from './FooterQuickLinks';
import FooterContactInfo from './FooterContactInfo';
import { socialLinks, quickLinks, contactInfo } from './content';

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