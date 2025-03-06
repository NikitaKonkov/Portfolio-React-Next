import React from 'react';
import AboutHeader from './AboutHeader';
import AboutText from './AboutText';
import Skills from './Skills';

function About() {

  
  return (
    <section id="about" className="relative w-full py-12 md:py-20 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <AboutHeader />
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full">
            
              <AboutText />
              <Skills />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;