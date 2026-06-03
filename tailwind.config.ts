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
        "outline-variant": "#E2E8F0",
        forest: {
          deep: '#0a1f14',
          mid: '#163823',
          light: '#2c6a46',
        },
        eco: {
          green: '#4caf50',
          hover: '#43a047',
          accent: '#00bcd4',
        },
        beige: {
          soft: '#f8f9f5',
        },
        text: {
          dark: '#1a3a28',
          muted: '#5f756a',
        },
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee-scroll': 'cs-marquee-scroll 30s linear infinite',
        'marquee-reverse': 'cs-marquee-scroll 35s linear infinite reverse',
        float: 'float 6s ease-in-out infinite',
        'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
      },
      keyframes: {
        'cs-marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
