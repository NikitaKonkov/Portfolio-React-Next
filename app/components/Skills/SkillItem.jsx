import React from 'react';

const SkillItem = ({ skill }) => {
  return (
    <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
      <div className="relative rounded-lg shadow-xl p-3 md:p-6 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden bg-light-secondary/90 dark:bg-dark-secondary/90 border border-blue-500/20 hover:border-blue-500/50 h-full">
        <div className="w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4 overflow-hidden bg-white/90 dark:bg-dark-primary/90 p-2 rounded-full flex items-center justify-center">
          <img src={skill.image} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
        </div>
        <div className="text-center w-full overflow-hidden">
          <h3 className="text-sm md:text-xl font-semibold text-light-text dark:text-dark-text mb-2 py-1 px-1 md:px-3 rounded bg-light-primary/80 dark:bg-dark-primary/80 inline-block truncate max-w-full">
            {skill.name}
          </h3>
          <p className="text-xs md:text-base text-light-text/90 dark:text-dark-text/90 mt-2 py-1 px-1 md:px-3 rounded bg-light-primary/70 dark:bg-dark-primary/70 inline-block truncate max-w-full">
            {skill.level}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;