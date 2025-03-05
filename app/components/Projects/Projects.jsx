// Projects.jsx
"use client"
import React from 'react';
import Dot from './Dots.jsx';
import ProjectCard from './ProjectCard';
import ProjectsHeader from './ProjectsHeader';
import ViewMoreButton from './ViewMoreButton';
import { projectsContent } from './content';

function Projects() {
  const dotsRef = Dot();

  return (
    <section id="projects" className="relative py-20 transition-colors duration-300">
      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/big.jpg')",
          zIndex: -1
        }}
      ></div>
      <div className="absolute inset-0 bg-light-primary/70 dark:bg-dark-primary/80 z-0"></div>
      <div 
        ref={dotsRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeader />
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {projectsContent.projects.map(project => (
            <ProjectCard key={project.id} project={project}/>
              ))}
        </div>

        <ViewMoreButton />
      </div>
    </section>
  );
}

export default Projects;