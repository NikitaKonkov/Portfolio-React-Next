import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: '#cccccc',
          secondary: '#f3f4f6',
          text: '#1f2937',
          accent: '#3b82f6',
        },
        // Dark mode colors
        dark: {
          primary: '#1f2937',
          secondary: '#111827',
          trinary: '#CCCCCC',
          text: '#f3f4f6',
          accent: '#60a5fa',
          black:  '#000000',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Gradient colors for the logo
        blue: {
          500: '#3498db',
        },
        purple: {
          500: '#9b59b6',
        },
        orange: {
          500: '#f39c12',
        },
        green: {
          500: '#2ecc71',
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;