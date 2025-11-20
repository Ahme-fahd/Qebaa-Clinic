/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-653": "653px", // Custom breakpoint
      },
      spacing: {
        "gap-custom": "4px", // Custom gap value
      },
      colors: {
        primary: "#00A5D3",
        secondary: "#cda30399",
        header: "#ffffff",
        button: " #E9BD2599",
        hover: "#FFD73E",
        click: " #FCCC17",
        tertiary: "#123A70",
      },
    },
  },

  plugins: [],
};
