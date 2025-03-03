import React from "react";

const ContactHeader = () => (
  <div className="text-center mb-16 relative" role="region" aria-label="About Me Section">
    <h2 className="text-4xl md:text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block group">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Get In Touch
      </span>
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h2>
  </div>
);

export default ContactHeader;