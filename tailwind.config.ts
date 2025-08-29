import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00E7FF",
          light: "#88f3ff",
          dark: "#00c7dd",
        },
        secondary: {
          DEFAULT: "#9931EF",
          light: "#ab63e6",
          dark: "#7D1B91",
        },
        muted: {
          DEFAULT: "#4A5565",
          dark: "#101828",
          light: "#1E2939",
        },
        border: {
          DEFAULT: "#45404A",
          light: "#ffffff",
        },
        text: {
          DEFAULT: "#07000E",
          light: "#fbecff",
          dark: "#101828",
          inverse: "#ffffff",
        },
        accent: "#f59e0b",
        error: "#ef4444",
        success: "#22c55e",
        warning: "#f97316",
      },
      backgroundImage: {
        "background-inverse":
          "linear-gradient(to top, rgba(0,0,0,0.4), rgba(26,11,46,0.6))",
        "background-dark":
          "linear-gradient(to bottom right, #59136A, #1F0529, #59136A)",
        "background-light":
          "linear-gradient(to bottom, #f1bcff, #fbecff, #f1bcff)",
      },
    },
  },
  plugins: [],
};

export default config;
