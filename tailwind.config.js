module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333333',
          light: '#666666'
        },
        teal: {
          DEFAULT: '#2A9D8F',
          dark: '#1F756B'
        },
        beige: {
          DEFAULT: '#F8F5F0',
          light: '#FAF7F2'
        }
      },
      contrast: {
        '110': '1.10',
      },
      boxShadow: {
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      strokeWidth: {
        '2': '2px',
      }
    },
  },
  plugins: [],
}; 