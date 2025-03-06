import React from 'react';

// Legal links data
const legalLinks = [
  { url: "/privacy", label: "Privacy Policy" },
  { url: "/terms", label: "Terms of Service" }
];

const FooterBottomBar = ({ year }) => (
  <div className="bg-light-primary text-dark-text  dark:bg-dark-primary border-t dark:border-dark-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-light-text/60 dark:text-dark-text/60 text-sm">
          &copy; {year} Nikita Wagner. All Rights Reserved.
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
);

export default FooterBottomBar;