// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Blue-600 (Tailwind blue)
        secondary: '#38bdf8', // Blue-400 (accent blue)
        background: '#000000', // Pure black
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        // Blue gradient for skills section
        'skills-gradient': 'linear-gradient(38.73deg, rgba(37,99,235,0.15) 0%, rgba(56,189,248,0.05) 50%), linear-gradient(141.27deg, rgba(0,0,0,0) 50%, rgba(37,99,235,0.15) 100%)',
      },
      boxShadow: {
        // Soft blue glow for all cards/sections
        'blue-glow': '0 0 60px 0 rgba(37,99,235,0.25), 0 0 120px 0 rgba(37,99,235,0.10)'
      },
    },
  },
  plugins: [],
};
