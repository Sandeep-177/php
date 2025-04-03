/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // All HTML files in the root directory
    "./**/*.html", // All HTML files in subdirectories
    "./**/*.{js,jsx,ts,tsx}", // All JavaScript and TypeScript files in all subdirectories
    "!./node_modules/**/*", // Exclude node_modules
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit",  // Just-in-Time mode to generate only required CSS
}

