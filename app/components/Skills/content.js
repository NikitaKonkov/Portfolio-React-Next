// content/content.js
export const skillCategories = [
    {
      title: "Web Development",
      backgroundImage: '/backgrounds/web.gif',
      gradientColors: {
        from: 'rgba(59, 130, 246, 0.9)',
        to: 'rgba(147, 51, 234, 0.9)'
      },
      skills: [
        { name: 'HTML', level: 'Intermediate', image: '/skills/html.png' },
        { name: 'JavaScript', level: 'Intermediate', image: '/skills/javascript.png' },
        { name: 'React', level: 'Intermediate', image: '/skills/react.png' },
        { name: 'CSS3', level: 'Intermediate', image: '/skills/css.png' }
      ]
    },
    {
      title: "Backend Development",
      backgroundImage: '/backgrounds/back.gif',
      gradientColors: {
        from: 'rgba(16, 185, 129, 0.9)',
        to: 'rgba(6, 182, 212, 0.9)'
      },
      skills: [
        { name: 'MySQL', level: 'Intermediate', image: '/skills/mysql.png' },
        { name: 'Python', level: 'Advanced', image: '/skills/python.png' },
        { name: 'Java', level: 'Advanced', image: '/skills/java.png' }
      ]
    },
    {
      title: "System/Low Level Development",
      backgroundImage: '/backgrounds/cpu.gif',
      gradientColors: {
        from: 'rgba(250, 150, 0, 5)',
        to: 'rgba(200, 0, 0, 0.5)'
      },
      skills: [
        { name: 'C++', level: 'Advanced', image: '/skills/cpp.png' },
        { name: 'x86', level: 'Advanced', image: '/skills/x86.png' },
        { name: 'ARM', level: 'Intermediate', image: '/skills/pi.png' }
      ]
    }
  ];