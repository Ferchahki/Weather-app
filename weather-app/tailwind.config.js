/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {

        colors:{
          "weather-primary": "#48dbfb",
          "weather-secondary": "#feca57",
        },
       fontFamily:{
        Gill Sans:["Gill Sans, sans-serif;"],
      },
      contaier:{
        padding:"2rem",
        center:true,
      },
      screens:{
        sm:"640px",
        md:"768px"

      },

        

    },
  },
  plugins: [],
};

