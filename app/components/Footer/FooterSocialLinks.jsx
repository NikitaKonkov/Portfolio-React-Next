import React from 'react';

const FooterSocialLinks = ({ links }) => (
  <div className="flex space-x-4">
    {links.map((link, index) => (
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
);

export default FooterSocialLinks;