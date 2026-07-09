import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7a1f2d",
      },
      boxShadow: {
        premium: "0 20px 70px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;
