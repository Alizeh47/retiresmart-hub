import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A365D', // Deep blue for primary text and elements
          light: '#2A4A7F',
        },
        secondary: {
          DEFAULT: '#4A90E2', // Accent blue for secondary elements
          light: '#6BA3E8',
        },
        beige: {
          DEFAULT: '#F5F1E8', // Main background color
          light: '#FAF7F2',
          dark: '#E5E0D5',
        },
        cream: '#FFF9F0',
        pink: {
          light: '#FFE4E6',
          DEFAULT: '#FFD1D6',
        },
        teal: {
          DEFAULT: '#4DB6AC', // For CTAs and interactive elements
          light: '#80CBC4',
          dark: '#26A69A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.2' }],
        'display-md': ['2.5rem', { lineHeight: '1.3' }],
        'display-sm': ['2rem', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
