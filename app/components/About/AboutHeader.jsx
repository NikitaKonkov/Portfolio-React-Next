import React from 'react';
import { aboutHeader } from './content';

const AboutHeader = () => (
  <div className="text-center mb-8 md:mb-16 relative" role="region" aria-label="About Me Section">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-text dark:text-dark-text mb-3 md:mb-4 relative inline-block group">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        {aboutHeader.title}
      </span>
    </h2>
    <p className="text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
      <span className="italic text-blue-600 dark:text-blue-400 font-medium">{aboutHeader.subtitle}</span>
    </p>
  </div>
);

export default AboutHeader;