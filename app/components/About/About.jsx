// About.jsx
import React from 'react';
import AboutHeader from './AboutHeader';
import AboutText from './AboutText';
import Skills from './Skills';
import AboutDetails from './AboutDetails';

function About() {
  const skills = [
    { name: 'VS Code', icon: '/icons/vsc.png' },
    { name: 'VS Studio', icon: '/icons/vss.png' },
    { name: 'PyCharm', icon: '/icons/pycharm.png' },
    { name: 'IntelliJ', icon: '/icons/IntelliJ.png' },
    { name: 'Blender', icon: '/icons/blender.png' },
    { name: 'Unreal Engine', icon: '/icons/unreal.png' }
  ];

  return (
    <section id="about" className="py-20 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AboutText />
          <div className="space-y-6">
            <Skills skills={skills} />
            <AboutDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;