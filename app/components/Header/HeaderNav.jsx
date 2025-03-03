import React from 'react';

export default function HeaderNav({ handleNavClick }) {
  return (
    <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
      <ul className="flex space-x-8">
        {['Home', 'About', 'Skills', 'Contact', 'Projects'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}