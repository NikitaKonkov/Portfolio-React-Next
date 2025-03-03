import React from 'react';

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-light-secondary/70 dark:bg-dark-secondary/70 py-20 rounded-lg backdrop-blur-sm">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl">
          <span className="block">Hi, I'm Nikita</span>
          <span className="block text-light-accent dark:text-dark-accent">I am a Hobby Software Developer</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-light-text/70 dark:text-dark-text/70 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          With experience in web development, backend systems, and low-level programming, I enjoy creating efficient solutions across the technology stack. From building full-stack applications to optimizing algorithms, I'm passionate about exploring diverse areas of software development.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#projects"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}