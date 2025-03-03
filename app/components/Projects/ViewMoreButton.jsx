// ViewMoreButton.jsx
import React from 'react';
import { projectsContent } from './content';

const ViewMoreButton = () => {
  return (
    <div className="text-center mt-12">
      <a
        href={projectsContent.viewMore.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-light-accent dark:bg-dark-accent text-white rounded-lg hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent"
      >
        <i className="fab fa-github mr-2"></i>
        {projectsContent.viewMore.text}
      </a>
    </div>
  );
};

export default ViewMoreButton;