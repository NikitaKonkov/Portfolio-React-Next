import React from "react";
import { contactInfo, socialLinksContent } from "./content";  // Change contactInfoContent to contactInfo

const ContactInfo = () => (
  <div className="space-y-8">
    {/* Contact Info Items */}
    {Object.entries(contactInfo).map(([key, item]) => (
      <div key={key} className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300">
          <img
            src={item.icon}  // Use item.icon instead of constructing from key
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
            {item.title}
          </h3>
          <p className="text-light-text/70 dark:text-dark-text/70 mt-1">{item.value}</p>
        </div>
      </div>
    ))}
    
    {/* Social Links section remains unchanged */}
    <div className="flex space-x-4 mt-8">
      {socialLinksContent.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity duration-300"
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