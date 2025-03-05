// content.js
export const projectsContent = {
    header: {
      title: 'My Projects',
      description: 'Here\'s an overview of my recent projects that showcase my skills and experience in development.'
    },
    projects: [
      {
        id: 1,
        title: 'SIMD Hashing in C++',
        description: 'This custom C++ file hashing algorithm use advanced techniques like parallel processing, SIMD optimization, and asynchronous I/O to achieve high performance on modern hardware for very large files (100 GB+).',
        technologies: ['C++', 'AVX', 'Windows API'],
        image: 'https://www.shutterstock.com/image-illustration/cyber-hacking-ciphertext-random-computer-600nw-2013022529.jpg',
        liveLink: 'https://github.com/NikitaKonkov/SIMD-Hashing-CPP',
        codeLink: 'https://github.com/NikitaKonkov/SIMD-Hashing-CPP'
      },
      {
        id: 2,
        title: 'URL shortener ',
        description: 'This is a URL shortener service that allows users to create,retrieve, update, and delete shortened URLs.',
        technologies: ['Java', 'PostgresSQL', 'Spring Boot'],
        image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/url-shortener.jpg',
        liveLink: 'https://github.com/NikitaKonkov/Java-Spring-Boot-URL-shortener',
        codeLink: 'https://github.com/NikitaKonkov/Java-Spring-Boot-URL-shortener'
      },
      {
        id: 3,
        title: 'CUDA 3D Engine in Terminal',
        description: 'A 3D engine that renders 3D models in the terminal using ASCII characters. It uses CUDA for parallel processing and Windows API for terminal rendering and file reading.',
        technologies: ['C++', 'CUDA', 'Windows API'],
        image: './projects/cuda.png',
        liveLink: 'https://github.com/NikitaKonkov/CUDA-3D-Engine-inside-Terminal',
        codeLink: 'https://github.com/NikitaKonkov/CUDA-3D-Engine-inside-Terminal'
      },
      {
        id: 4,
        title: 'Portfolio Website using React',
        description: 'My personal portfolio website built using React and TypeScript. It showcases my projects, skills, and experience in web development.',
        technologies: ['React', 'TypeScript', 'CSS3'],
        image: './projects/portfolio.png',
        liveLink: 'https://github.com/NikitaKonkov/Portfolio-React-Typescript',
        codeLink: 'https://github.com/NikitaKonkov/Portfolio-React-Typescript'
      },
      {
        id: 5,
        title: '2D Pacman Game Engine in 16bit Assembly',
        description: 'This project demonstrates how to build a bootable game using a bootloader and a second-stage game binary. It uses 16-bit assembly language to create a simple 2D game engine for Pacman.',
        technologies: ['QEMU', 'NASM', '16bit Assembly'],
        image: './projects/pacman.png',
        liveLink: 'https://github.com/NikitaKonkov/16bit-x86-2DGameEngine',
        codeLink: 'https://github.com/NikitaKonkov/16bit-x86-2DGameEngine'
      }
    ],
    viewMore: {
      text: 'View More Projects',
      link: 'https://github.com/NikitaKonkov'
    }
  };