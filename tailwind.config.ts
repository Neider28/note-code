import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/img/hero-background.svg')",
      },
      colors: {
        "gray-dark": "#121826",
        "black-editor": "#1e1e1e",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
