module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      'col-span-2', // For cards row, up to 3 can be displayed
      'col-span-3',
      'col-span-4',
      'text-orange', // For card and arrow link coloring
      'text-yellow',
      'bg-orange',
      'bg-yellow',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  presets: [require("./tailwind.config.argeta.js")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "ui-sans-serif", "system-ui"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
