import React from 'react';
import SkillItem from './SkillItem';

// Reusable Title component
const CategoryTitle = ({ title, gradientColors }) => (
  <div className="relative px-3 py-1 md:px-6 md:py-2 rounded-lg shadow-lg w-full max-w-xs mx-auto" style={{
    background: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
  }}>
    <h3 className="text-xl md:text-2xl font-bold text-white text-center w-full" style={{
      textShadow: '0px 1px 2px rgba(0, 0, 0, 1)',
      letterSpacing: '0.05em'
    }}>
      {title}
    </h3>
  </div>
);

const SkillCategory = ({ category }) => {
  return (
    <div className="relative z-10 p-4 md:p-8 bg-light-secondary/30 dark:bg-dark-secondary/30 rounded-xl shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 -m-2 md:-m-4 z-0 rounded-xl overflow-hidden" style={{
        backgroundImage: `url(${category.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      
    {/* Mobile Title */}
      <div className="sm:hidden w-full flex items-center justify-center mb-6">
        <CategoryTitle title={category.title} gradientColors={category.gradientColors} />
      </div>
      
      {/* Desktop Title */}
      <div className="hidden sm:flex items-center justify-center mb-10 space-x-4">
        <div className="h-1 w-8 md:w-16 bg-light-accent dark:bg-dark-accent"></div>
        <CategoryTitle title={category.title} gradientColors={category.gradientColors} />
        <div className="h-1 w-8 md:w-16 bg-light-accent dark:bg-dark-accent"></div>
      </div>
      
      {/* Skills Grid */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-wrap justify-center gap-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem key={skillIndex} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;