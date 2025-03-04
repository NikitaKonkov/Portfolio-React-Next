"use client";
import React, { useRef, useState } from 'react';
import Dot from './Dots';
import SkillCategory from './SkillCategory';
import { Title, Description } from './Typography';
import { skillCategories } from './content';

function Skills() {
  const dotsRef = useRef(null);
  const dotsStateRef = useRef([]);
  const [key, setKey] = useState(0);
  
  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${0.5 + Math.random() * 0.5})`;
  };
  
  return (
    <section id="skills" className="relative py-10 md:py-20 transition-colors duration-300 flex flex-col items-center">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/big.jpg')", zIndex: -1 }}
      ></div>
      <div className="absolute inset-0 bg-dark-trinary/70 dark:bg-dark-primary/80 z-0"></div>
      <div ref={dotsRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Dot getRandomColor={getRandomColor} dotsStateRef={dotsStateRef} dotsRef={dotsRef} />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header section */}
        <div className="w-full text-center mb-8 md:mb-16 relative flex flex-col items-center">
          <Title>My Skills</Title>
          <Description>Here's an overview of my technical expertise across different domains</Description>
        </div>

        {/* Skills categories */}
        <div className="w-full space-y-10 md:space-y-20 flex flex-col items-center">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="w-full flex justify-center">
              <SkillCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;