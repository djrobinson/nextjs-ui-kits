import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#005450",
              foreground: "#000000",
            },
            focus: "#005450",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#005450",
              foreground: "#000000",
            },
            focus: "#005450",
          },
        },
      },
    }),
  ],
};
