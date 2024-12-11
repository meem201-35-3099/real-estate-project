/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f6f2",
        secondary: "#2B2AA7",
        tertiary: "#222222",
        secondaryRed: "#f42c37",
        secondaryYellow: "#fdc62e",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        secondaryBlue2: "#0041cc",
        secondaryWhite: "#eeeeee",
        cyanBlue: "#ABEBF4",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "400px",
        lg: "992px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        home: "url(/src/assets/bg.jpg)",
        sellers: "url(/src/assets/sellers.jpg)",
        buyers: "url(/src/assets/buyers.jpg)",
        contact: "url(/src/assets/contact2.jpg)",
      },
    },
  },
  plugins: [],
};
