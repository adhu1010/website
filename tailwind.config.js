/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mill: {
          cream: '#FDFBF7',
          unbleached: '#F8F5EE',
          paper: '#F1EDE4',
          border: '#DCD4C4',
          borderDark: '#C5B9A4',
          ink: '#241E17',
          muted: '#655A4E',
          terracotta: '#8F3B1B',
          terracottaHover: '#783015',
          turmeric: '#B47B1C',
          burlap: '#6B5138',
          leaf: '#2C4C38',
          leafHover: '#223C2C',
        },
      },
      fontFamily: {
        serif: ["Georgia", "Merriweather", "'Playfair Display'", "'Noto Serif Malayalam'", "serif"],
        sans: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "Helvetica", "Arial", "'Noto Sans Malayalam'", "sans-serif"],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '3px',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
