import React from 'react';
import { skills } from './content';

const Skills = () => (
  <div>
    <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">Main Development Software</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="px-3 py-3 bg-light-primary dark:bg-dark-primary text-light-accent dark:text-dark-accent rounded-full text-sm flex items-center gap-1"
        >
          <img src={skill.icon} className="w-5 h-5" />
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;