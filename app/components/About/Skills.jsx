import React from 'react';
import { FaIcons } from './icons'; // Import icon component

const Skills = ({ skills }) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Core Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-accent dark:text-dark-accent rounded-full text-sm transition-colors duration-300 flex items-center"
          >
            <img 
              src={skill.icon} 
              alt={`${skill.name} icon`} 
              className="w-4 h-4 mr-2" 
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;