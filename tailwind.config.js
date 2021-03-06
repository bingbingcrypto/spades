module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        animefull: 'url("../public/images/animefull.png")',
        animephone: 'url("../public/images/animephone.png")',
      },
    },
    screens: {
      sm: "250px",
      // => @media (min-width: 250px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      
      header: '900px',
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
