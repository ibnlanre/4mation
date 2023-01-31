const plugin = require("tailwindcss/plugin");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./**/*.{js,jsx,tsx,html}", "!./node_modules"],
  theme: {
    extend: {
      colors: {
        "midnight-blue": "#034A8A",
        awesome: "#FF1949",
        cultured: "#F6F6F6",
        "raisin-black": "#252525",
        jet: "#363636",
        "philippine-silver": "#B6B6B6",
        blue: "#0000FE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("clump", "@supports (font-size: clamp(1rem,2vw,3rem))");
    }),
  ],
};
