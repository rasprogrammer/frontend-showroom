import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ihg: {
          red: "#C8102E",
          darkred: "#a00d24",
          navy: "#003366",
          gold: "#B8860B",
          gray: "#f5f5f5",
          darkgray: "#333333",
          medgray: "#666666",
          border: "#e0e0e0",
        },
      },
      fontFamily: {
        sans: ["Georgia", "Times New Roman", "serif"],
        display: ["Georgia", "serif"],
        ui: ['"Helvetica Neue"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
