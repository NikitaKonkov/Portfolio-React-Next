import React from 'react';

const FooterContactInfo = ({ items, title = "Contact Info" }) => (
  <div className="col-span-1">
    <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-6 border-b border-light-text/10 dark:border-dark-text/10 pb-3">
      {title}
    </h3>

    <ul className="space-y-4 list-none">
      {items.map((item, index) => (
        <li key={`contact-${index}`} className="flex items-center group">
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-light-accent/10 dark:bg-dark-accent/10 mr-3">
            <img src={item.icon} alt="Icon Description" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            {item.isLink ? (
              <a
                href={item.url}
                className="text-light-text/80 dark:text-dark-text/80 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 inline-block"
                aria-label={`Contact via ${item.content}`}
                rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                target={item.url.startsWith('http') ? "_blank" : undefined}
              >
                {item.content}
              </a>
            ) : (
              <span className="text-light-text/80 dark:text-dark-text/80">
                {item.content}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);


export default FooterContactInfo;