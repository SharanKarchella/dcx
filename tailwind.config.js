/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure all files are scanned
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))", // Define custom background color
        foreground: "hsl(var(--foreground))", // Define custom foreground color
      },
    },
  },
  plugins: [],
};
