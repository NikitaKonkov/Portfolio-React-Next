import React from 'react';
import SkillItem from './SkillItem';

const SkillCategory = ({ category }) => {
  return (
    <div className="relative z-10 p-4 md:p-8 bg-light-secondary/30 dark:bg-dark-secondary/30 rounded-xl shadow-lg">
      <div className="absolute inset-0 -m-2 md:-m-4 z-0 rounded-xl overflow-hidden" style={{
        backgroundImage: `url(${category.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      
      {/* Mobile title (centered) */}
      <div className="sm:hidden flex justify-center mb-6">
        <div className="relative px-3 py-1 rounded-lg shadow-lg" style={{
          background: `linear-gradient(to right, ${category.gradientColors.from}, ${category.gradientColors.to})`,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
        }}>
          <h3 className="text-xl font-bold text-white text-center" style={{
            textShadow: '0px 1px 2px rgba(0, 0, 0, 1)',
            letterSpacing: '0.05em'
          }}>
            {category.title}
          </h3>
        </div>
      </div>
      
      {/* Desktop title (with decorative lines) */}
      <div className="hidden sm:flex items-center justify-center mb-10">
        <div className="h-1 w-8 md:w-16 bg-blue-500 mr-2 md:mr-4"></div>
        <div className="relative px-3 py-1 md:px-6 md:py-2 rounded-lg shadow-lg" style={{
          background: `linear-gradient(to right, ${category.gradientColors.from}, ${category.gradientColors.to})`,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
        }}>
          <h3 className="text-xl md:text-2xl font-bold text-white" style={{
            textShadow: '0px 1px 2px rgba(0, 0, 0, 1)',
            letterSpacing: '0.05em'
          }}>
            {category.title}
          </h3>
        </div>
        <div className="h-1 w-8 md:w-16 bg-blue-500 ml-2 md:ml-4"></div>
      </div>
      
      <div className="mb-4 md:mb-10 rounded-xl relative z-10 px-2 md:px-4 py-4 md:py-8">
        <div className="flex flex-wrap justify-center mx-auto">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem key={skillIndex} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;