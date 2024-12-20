/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "marine-blue": "hsl(213, 96%, 18%)",
      "marine-hover": "hsla(213, 92%, 34%, 0.858)",
      "blue-color": "hsl(243, 100%, 62%)",
      "pastal-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      red: "hsl(354, 84%, 57%)",
      "cool-gray": " hsl(231, 11%, 63%)",
      "light-gray": " hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabasta: "hsl(231, 100%, 99%)",
      white: " hsl(0, 0%, 100%)",
      black: "#000",
    },
    extend: {
      boxShadow: {
        custom: "0 5px 15px rgba(2, 41, 90, 0.1)", // Adjust values as needed
      },
    },
  },
  plugins: [],
};
