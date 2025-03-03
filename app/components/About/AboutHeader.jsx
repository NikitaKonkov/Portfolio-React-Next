import React from 'react';
import { FaUser } from 'react-icons/fa';

const AboutHeader = () => {
  return (
    <div className="text-center mb-16 relative" role="region" aria-label="About Me Section">
      <h2 className="text-4xl md:text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block group">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          About Me
        </span>
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      <p className="text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
        <span className="italic text-blue-600 dark:text-blue-400 font-medium">Here's an overview</span> about my self, hobbies and favorite software.
      </p>
    </div>
  );
};

export default AboutHeader;