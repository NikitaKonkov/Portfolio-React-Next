import React from 'react';
import { FaIcons } from './icons'; // Import icon component

const AboutDetails = () => {
  const details = [
    { icon: FaUser, label: 'Name', value: 'Nikita Wagner' },
    { icon: FaEnvelope, label: 'Email', value: 'nikita.wagner97@gmail.com' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Homburg' },
    { icon: Fabriefcase, label: 'Availability', value: 'Open to opportunities' },
  ];

  return (
    <div className="bg-light-primary dark:bg-dark-primary rounded-xl shadow-lg p-8 transition-colors duration-300">
      <div className="space-y-6">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
              <Icon className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">{label}</h3>
              <p className="text-lg font-semibold text-light-text dark:text-dark-text">{value}</p>
            </div>
          </div>
        ))}
        <a
          href="/dummy.pdf"
          download
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent"
        >
          <i className="fas fa-download mr-2"></i>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default AboutDetails;