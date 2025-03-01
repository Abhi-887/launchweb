/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Create consistent color palette
        'primary': {
          DEFAULT: '#8B5CF6', // purple-500
          light: '#A78BFA', // purple-400
          dark: '#7C3AED', // purple-600
        },
        'secondary': {
          DEFAULT: '#3B82F6', // blue-500
          light: '#60A5FA', // blue-400
          dark: '#2563EB', // blue-600
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      screens: {
        '3xl': '1920px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Function to generate CSS custom properties for animation delays
    function({ addBase }) {
      let animations = {};
      
      // Generate animation delays
      for (let i = 1; i <= 20; i++) {
        animations[`.animation-delay-${i * 100}`] = {
          animationDelay: `${i * 100}ms`
        };
      }
      
      addBase(animations);
    }
  ],
};
