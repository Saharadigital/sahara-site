import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // ← must include where your components live
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f5a623", // Your orange
        dark: "#0c0c0c",
        muted: "#aaaaaa",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-barlow)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
