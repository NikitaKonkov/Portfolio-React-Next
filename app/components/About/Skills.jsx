import React from 'react';

const Skills = ({ skills }) => (
  <div className="pt-3 md:pt-4">
    <h3 className="text-lg md:text-xl font-semibold text-light-text dark:text-dark-text mb-3 md:mb-4">Core Technologies</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="px-3 md:px-4 py-1.5 md:py-2 bg-light-primary dark:bg-dark-primary text-light-accent dark:text-dark-accent rounded-full text-xs md:text-sm transition-colors duration-300 flex items-center"
        >
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2"
          />
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;