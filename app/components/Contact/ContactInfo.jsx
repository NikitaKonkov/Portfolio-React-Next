import React from "react";

const contactInfo = [
  { 
    id: "location", 
    icon: "/icons/germany.png", 
    title: "Location", 
    value: "Germany" 
  },
  { 
    id: "email", 
    icon: "/icons/mail.png", 
    title: "Email", 
    value: "nikita.wagner1997@gmail.com" 
  },
  { 
    id: "phone", 
    icon: "/icons/telephone.png", 
    title: "Phone", 
    value: "+49 176 23434567" 
  },
];

const socialLinks = [
  { 
    url: "https://github.com/NikitaKonkov", 
    icon: "/icons/github.png", 
    name: "GitHub" 
  },
  { 
    url: "https://www.linkedin.com/in/mikita-wagner-253361350/", 
    icon: "/icons/linkedin.png", 
    name: "LinkedIn" 
  },
  { 
    url: "https://www.sololearn.com/de/profile/19875051", 
    icon: "/icons/sololearn.png", 
    name: "Sololearn" 
  },
  { 
    url: "https://circuitverse.org/users/139370", 
    icon: "/icons/cv.png", 
    name: "YouTube" 
  },
  { 
    url: "https://www.youtube.com/@Symbitron", 
    icon: "/icons/youtube.png", 
    name: "YouTube" 
  },
  { 
    url: "https://www.hackerrank.com/profile/nikita_konkov", 
    icon: "/icons/hr.png", 
    name: "YouTube" 
  },
  { 
    url: "https://leetcode.com/u/user6235Pw/", 
    icon: "/icons/lc.png", 
    name: "YouTube" 
  },
];

const ContactInfo = () => (
  <div className="space-y-8">
    {/* Contact Info Items */}
    {contactInfo.map((item) => (
      <div key={item.id} className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300">
          <img
            src={item.icon}
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
    
    {/* Social Links */}
    <div className="flex space-x-4 mt-8">
      {socialLinks.map((link, index) => (
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