// CombinedSkills.jsx
"use client";
import React, { useRef, useState} from 'react';
import { skillCategories } from './content';
import Dots from './Dots';

const SkillItem = ({ skill, onClick }) => {
  return (
    <div
      className="w-[180px] mx-auto xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4 cursor-pointer"
      onClick={() => onClick(skill)}
    >
      <div 
        className="relative rounded-lg shadow-xl p-2 md:p-6 flex flex-row xs:flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-blue-500/20 hover:border-blue-500/50 h-[100px] xs:h-auto xs:aspect-square"
        style={{
          backgroundColor: `${skill.color || 'var(--light-secondary)'}`,
          opacity: 0.9,
          transition: 'all 0.3s ease'
        }}
      >
        <div className="w-16 h-16 md:w-16 md:h-16 mr-3 xs:mr-0 xs:mb-2 md:mb-4 overflow-hidden bg-white/90 dark:bg-dark-primary/90 p-1.5 md:p-2 rounded-full flex items-center justify-center shrink-0">
          <img src={skill.image} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-start xs:items-center justify-center">
          <h3 className="text-xs md:text-xl font-semibold text-light-text dark:text-dark-text mb-0.5 py-0.5 px-1.5 md:px-3 rounded bg-light-primary/80 dark:bg-dark-primary/80 text-center max-w-[100px] truncate">
            {skill.name}
          </h3>
          <h3 className="text-[10px] md:text-base text-light-text/90 dark:text-dark-text/90 py-0.5 px-1.5 md:px-3 rounded bg-light-primary/70 dark:bg-dark-primary/70 text-center">
            {skill.level}
          </h3>
        </div>
      </div>
    </div>
  );
};

// SkillCategory Component
const SkillCategory = ({ category, onSkillClick }) => {
  return (
    <div className="relative z-10 p-8 rounded-xl shadow-lg">
      <div 
        className="absolute inset-0 -m-2 z-0 rounded-xl overflow-hidden" 
        style={{
          backgroundImage: `url(${category.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)',
          opacity: 0.2
        }}
      ></div>
      <div className="flex items-center justify-center mb-10">
        <div 
          className="h-1 w-16 mr-4"
          style={{
            background: `linear-gradient(to right, ${category.gradientColors.from}, ${category.gradientColors.to})`
          }}
        ></div>
        <div 
          className="relative px-6 py-2 rounded-lg shadow-lg"
          style={{
            background: `linear-gradient(to right, ${category.gradientColors.from}, ${category.gradientColors.to})`,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
          }}
        >
          <h3 
            className="text-2xl font-bold text-white" 
            style={{
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.05em'
            }}
          >
            {category.title}
          </h3>
        </div>
        <div 
          className="h-1 w-16 ml-4" 
          style={{
            background: `linear-gradient(to right, ${category.gradientColors.from}, ${category.gradientColors.to})`
          }}
        ></div>
      </div>
      <div className="mb-10 rounded-xl relative z-10 px-4 py-8">
        <div className="flex flex-wrap justify-around" style={{ margin: '-64px' }}>
          {category.skills.map((skill, skillIndex) => (
            <SkillItem key={skillIndex} skill={skill} onClick={onSkillClick} />
          ))}
        </div>
      </div>
    </div>
  );
};
// Typography Components
export function Title({ children, className = '' }) {
  return (
    <div className="flex justify-center items-center w-full text-center">
      <h2 className={`w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-text dark:text-dark-text mb-3 md:mb-4 relative ${className}`}>
        <span className="block w-full bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-center">
          {children}
        </span>
        <span className="absolute -bottom-2 left-0 right-0 mx-auto w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
    </div>
  );
}

export function Description({ children, className = '' }) {
  return (
    <div className="flex justify-center items-center w-full text-center">
      <p className={`text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light ${className}`}>
        <span className="italic text-blue-600 dark:text-blue-400 font-medium text-center">
          {children}
        </span>
      </p>
    </div>
  );
}

// Skills Component
function Skills() {
  const dotsRef = useRef(null);
  const dotsStateRef = useRef([]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 255)}, 
                 ${Math.floor(Math.random() * 255)}, 
                 ${Math.floor(Math.random() * 255)}, 
                 ${0.5 + Math.random() * 0.5})`;
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedSkill(null);
    }
  };

  return (
    <section id="skills" className="relative py-20 transition-colors duration-300">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/star.webp')", zIndex: -1 }}
      ></div>
      <div className="absolute inset-0 bg-dark-trinary/70 dark:bg-dark-primary/80 z-0"></div>
      <div ref={dotsRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Dots getRandomColor={getRandomColor} dotsStateRef={dotsStateRef} dotsRef={dotsRef} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">My Skills</span>
          </h2>
          <Description>Here's an overview of my technical expertise across different domains</Description>
        </div>

        {/* Skills Grid */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory 
              key={categoryIndex} 
              category={category}
              selectedSkill={selectedSkill}
              onSkillClick={handleSkillClick}
            />
          ))}
        </div>
      </div>

      {/* Skill Details Overlay */}
      {selectedSkill && (
        <div 
          className="modal-overlay fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div className="bg-light-primary dark:bg-dark-primary rounded-lg p-8 max-w-md w-full mx-4 shadow-xl relative">
            <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              {selectedSkill.name}
            </h3>
            <p className="text-base leading-relaxed text-light-text/90 dark:text-dark-text/90">
              Here you can add detailed information about {selectedSkill.name}. This could include:
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>Experience level: {selectedSkill.level}</li>
                <li>Projects completed</li>
                <li>Specific technologies used</li>
                <li>Achievements and accomplishments</li>
              </ul>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;