"use client";
import React from 'react';

export function Title({ children, className = '' }) {
  return (
    <div className="flex justify-center items-center w-full text-center">
      <h2 className={`w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-text dark:text-dark-text mb-3 md:mb-4 relative ${className}`}>
        <span className="block w-full bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-center">
          {children}
        </span>
        <span className="absolute -bottom-2 left-0 right-0 mx-auto w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
    </div>
  );
}

export function Description({ children, className = '' }) {
  return (
    <div className="flex justify-center items-center w-full text-center">
      <p className={`text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light ${className}`}>
        <span className="italic text-blue-600 dark:text-blue-400 font-medium text-center">
          {children}
        </span>
      </p>
    </div>
  );
}