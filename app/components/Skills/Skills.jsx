// Skills.jsx
"use client";

import React, { useRef, useState } from 'react';
import Dot from './Dot';
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
    <section id="skills" className="relative py-20 transition-colors duration-300">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/big.jpg')", zIndex: -1 }}
      ></div>
      <div className="absolute inset-0 bg-dark-trinary/70 dark:bg-dark-primary/80 z-0"></div>
      <div ref={dotsRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Dot getRandomColor={getRandomColor} dotsStateRef={dotsStateRef} dotsRef={dotsRef} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <Title>My Skills</Title>
          <Description>Here's an overview of my technical expertise across different domains</Description>
        </div>
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory key={categoryIndex} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;