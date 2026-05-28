import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#14B8A6",
        surface: "#F8FAFC",
        "on-surface": "#0F172A",
        "on-surface-variant": "#64748B",
        "outline-variant": "#E2E8F0"
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
