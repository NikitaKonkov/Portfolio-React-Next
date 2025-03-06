import React from 'react';
import FooterContactInfo from './FooterContactInfo';
import { contactInfo } from './content';

const FooterContent = () => {


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterContactInfo items={contactInfo} />
      </div>
    </div>
  );
};

export default FooterContent;