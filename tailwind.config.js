/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#ec4899",
        // primary: "#F59E0B",
        // secondary: "#EF4444",
      },
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
      },
    },
  },
  plugins: [],
};
