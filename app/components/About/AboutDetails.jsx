import React from 'react';
import { aboutDetails } from './content';

// Reusable InfoItem component
const InfoItem = ({ label, value }) => (
  <div className="flex flex-col items-center space-y-1">
    <h3 className="text-xs md:text-sm font-medium text-light-text/70 dark:text-dark-text/70">{label}</h3>
    <p className="text-base md:text-lg font-semibold text-light-text dark:text-dark-text">{value}</p>
  </div>
);

const AboutDetails = () => (
  <div className="bg-light-primary dark:bg-dark-primary rounded-xl shadow-lg p-6 md:p-8 transition-colors duration-300">
    <div className="space-y-5 md:space-y-6 flex flex-col items-center">
      <InfoItem label="Name" value={aboutDetails.name} />
      <InfoItem label="Email" value={aboutDetails.email} />
      <InfoItem label="Location" value={aboutDetails.location} />
      <InfoItem label="Availability" value={aboutDetails.availability} />
      
      <a
        href={aboutDetails.resumeLink}
        download
        className="mt-6 md:mt-8 w-full inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 border border-transparent rounded-lg text-sm md:text-base font-medium text-white bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent"
      >
        <i className="fas fa-download mr-2"></i>
        Download Resume
      </a>
    </div>
  </div>
);

export default AboutDetails;