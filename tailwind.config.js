/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
         fontFamily: {
        niramit: ["Niramit", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'] ,
        inter: ['Inter', 'sans-serif'],  
        sura: ['Sura', 'serif'],     
      },
      colors: {
        primary: "#0077b6",
        secondary: "#F1FFF9",
        textcolor: "#189FAA",
      },
    },
  },
      variants: {
    extend: {
      opacity: ["disabled"],
      borderWidth: ["responsive", "first", "last"],
      borderRadius: ["first", "last"],
      margin: ["first", "last"],
    },
  },
  plugins: [],
};
