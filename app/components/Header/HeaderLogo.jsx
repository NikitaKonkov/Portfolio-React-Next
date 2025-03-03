import React from 'react';

export default function HeaderLogo() {
  return (
    <div className="flex-shrink-0">
      <svg
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="filter dark:invert transition-colors duration-300"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          className="fill-light-secondary stroke-light-border dark:stroke-dark-border transition-colors duration-300"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="nGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#3498db", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#9b59b6", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="kGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#f39c12", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#2ecc71", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M20 44 V20 L28 44 V20"
          className="stroke-light-text transition-colors duration-300"
          strokeWidth="2"
          fill="url(#nGradient)"
        />
        <path
          d="M36 44 V20"
          className="stroke-light-text transition-colors duration-300"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M36 32 L46 24 L36 20 Z"
          className="stroke-light-text transition-colors duration-300"
          strokeWidth="2"
          fill="url(#kGradient)"
        />
        <path
          d="M36 32 L46 40 L36 44 Z"
          className="stroke-light-text transition-colors duration-300"
          strokeWidth="2"
          fill="url(#kGradient)"
        />
      </svg>
    </div>
  );
}