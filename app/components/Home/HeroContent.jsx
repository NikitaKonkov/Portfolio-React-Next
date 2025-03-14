// HeroContent.jsx

import React from 'react';
import { heroContent } from './content';

export default function HeroContent() {
  return (
    <div className="px-4 lg:px-2 bg-violet-100/50 dark:bg-dark-secondary/70 py-10 rounded-lg backdrop-blur-sm">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl">
          <span className="italic block">{heroContent.title}</span>
          <span className="italic block text-light-accent dark:text-dark-accent">{heroContent.subtitle}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-light-text/70 dark:text-dark-text/70 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {heroContent.description}
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow w-full sm:w-auto">
            <a
              href={heroContent.buttonLink}
              className=" flex  justify-center px-8 py-3 border font-medium rounded-md text-white bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 transition-colors duration-300 md:py-4 md:text-lg md:px-10 text-center"
            >
              {heroContent.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}