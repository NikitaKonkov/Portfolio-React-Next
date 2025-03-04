import React from "react";
import { contactInfo, socialLinksContent } from "./content";

const ContactInfo = () => (
  <div className="space-y-6 md:space-y-8">
    {/* Contact Info Items */}
    {Object.entries(contactInfo).map(([key, item]) => (
      <div key={key} className="flex items-start space-x-3 md:space-x-4">
        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300">
          <img
            src={item.icon}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-light-text dark:text-dark-text">
            {item.title}
          </h3>
          <p className="text-sm md:text-base text-light-text/70 dark:text-dark-text/70 mt-1">{item.value}</p>
        </div>
      </div>
    ))}
    {/* Social Links */}
    <div className="flex space-x-3 md:space-x-4 mt-6 md:mt-8">
      {socialLinksContent.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src={link.icon}
            alt={link.name}
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  </div>
);

export default ContactInfo;