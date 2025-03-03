// ProjectsHeader.jsx
import React from 'react';
import { projectsContent } from './content';

const ProjectsHeader = () => {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          {projectsContent.header.title}
        </span>
      </h2>
      <p className="text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
        <span className="italic text-blue-600 dark:text-blue-400 font-medium">{projectsContent.header.description}</span>
      </p>
    </div>
  );
};

export default ProjectsHeader;