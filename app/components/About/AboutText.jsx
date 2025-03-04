import React from 'react';
import { aboutText } from './content';

const AboutText = () => (
  <>
    {aboutText.map((paragraph, index) => (
      <p key={index} className="text-light-text/80 dark:text-dark-text/80 leading-relaxed">
        {paragraph}
      </p>
    ))}
  </>
);

export default AboutText;