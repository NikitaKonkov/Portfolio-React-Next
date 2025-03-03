// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-light-secondary dark:bg-dark-secondary rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative group h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-light-accent dark:bg-dark-accent text-white rounded-lg hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300 flex items-center"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-300 flex items-center"
          >
            <i className="fab fa-github mr-2"></i>
            Code
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">
          {project.title}
        </h3>
        <p className="text-light-text/70 dark:text-dark-text/70 mb-4 min-h-[60px]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-light-primary dark:bg-dark-primary text-light-accent dark:text-dark-accent rounded-full text-sm font-medium transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;