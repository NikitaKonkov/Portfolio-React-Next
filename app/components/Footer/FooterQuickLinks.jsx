import React from 'react';

const FooterQuickLinks = ({ links, handleClick }) => (
  <div className="col-span-1">
    <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Quick Links</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            onClick={(e) => handleClick(e, link.label.toLowerCase())}
            className="text-light-text/60 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterQuickLinks;