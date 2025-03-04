import React from 'react';
import { aboutDetails } from './content';

const AboutDetails = () => (
  <div className="bg-light-primary dark:bg-dark-primary rounded-xl shadow-lg p-8 transition-colors duration-300">
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
          <i className="fas fa-user text-white text-xl"></i>
        </div>
        <div>
          <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Name</h3>
          <p className="text-lg font-semibold text-light-text dark:text-dark-text">{aboutDetails.name}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
          <i className="fas fa-envelope text-white text-xl"></i>
        </div>
        <div>
          <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Email</h3>
          <p className="text-lg font-semibold text-light-text dark:text-dark-text">{aboutDetails.email}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
          <i className="fas fa-map-marker-alt text-white text-xl"></i>
        </div>
        <div>
          <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Location</h3>
          <p className="text-lg font-semibold text-light-text dark:text-dark-text">{aboutDetails.location}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
          <i className="fas fa-briefcase text-white text-xl"></i>
        </div>
        <div>
          <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Availability</h3>
          <p className="text-lg font-semibold text-light-text dark:text-dark-text">{aboutDetails.availability}</p>
        </div>
      </div>
      <a
        href={aboutDetails.resumeLink}
        download
        className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent"
      >
        <i className="fas fa-download mr-2"></i>
        Download Resume
      </a>
    </div>
  </div>
);

export default AboutDetails;