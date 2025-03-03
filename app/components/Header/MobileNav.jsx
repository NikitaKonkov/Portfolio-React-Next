import React from 'react';

export default function MobileNav({ menuOpen, handleNavClick }) {
  return (
    <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {['Home', 'About', 'Skills', 'Contact', 'Projects'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="block px-3 py-2 rounded-md text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}