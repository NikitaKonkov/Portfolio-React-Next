import React from 'react';

const FooterContactInfo = ({ items }) => (
  <div className="col-span-1">
    <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Contact Info</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <i className={`${item.icon} text-light-text/50 dark:text-dark-text/50`}></i>
          {item.isLink ? (
            <a
              href={item.url}
              className="text-light-text/60 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              {item.content}
            </a>
          ) : (
            <span className="text-light-text/60 dark:text-dark-text/60">{item.content}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterContactInfo;