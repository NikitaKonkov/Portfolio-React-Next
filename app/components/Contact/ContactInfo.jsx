// ContactInfo.jsx
"use client";

import React, { useState } from "react";
import { contactInfo, socialLinksContent } from "./content";

const ContactInfo = () => {
  const [copyStates, setCopyStates] = useState({});

  const handleCopy = async (itemId, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStates((prev) => ({
        ...prev,
        [itemId]: "Copied!",
      }));

      setTimeout(() => {
        setCopyStates((prev) => ({
          ...prev,
          [itemId]: null,
        }));
      }, 1500);
    } catch (err) {
      setCopyStates((prev) => ({
        ...prev,
        [itemId]: "Failed to copy",
      }));
    }
  };

  return (
<div className="space-y-8 md:space-y-12 flex flex-col items-center">
  {/* Contact Info Section - Larger Size */}
  <div className="flex justify-center gap-4">
    {Object.values(contactInfo).map((item) => (
      <div key={item.id} className="relative">
        <button
          onClick={() => handleCopy(item.id, item.value)}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
          aria-label={`Copy ${item.id}`}
        >
          <img
            src={item.icon}
            alt={item.id}
            className="max-w-[70%] max-h-[70%] mx-auto my-auto object-contain"
          />
        </button>

        {copyStates[item.id] && (
          <span className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded-md animate-fade-in-down">
            {copyStates[item.id]}
          </span>
        )}
      </div>
    ))}
  </div>

  {/* Social Links Section */}
  <div className="flex justify-center flex-wrap">
    {socialLinksContent.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity duration-300"
      >
        <img
          src={link.icon}
          alt={link.name}
          className="w-3/4 h-3/4 object-contain contact-icon"
        />
      </a>
    ))}
  </div>
    </div>
  );
};

export default ContactInfo;