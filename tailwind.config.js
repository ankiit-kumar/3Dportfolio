/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
          600: "#181b1b", // Added for background gradient
        },
        blue: {
          500: "#2b77e7",
          600: "#0051ff", // Added for shadows and gradient
          DEFAULT: "#3fe9ff", // Added to match the blob background
        },
        white: {
          DEFAULT: "#ffffff",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        'custom': '0 0 20px rgba(255, 255, 255, 0.22)', // Added custom shadow
        'blob': '-10px 10px 30px rgba(0, 81, 255, 0.18)', // Added blob shadow
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))', // Added custom radial gradient
      },
      zIndex: {
        '-1': '-1', // Added custom negative z-index
      },
    },
  },
  plugins: [],
}
