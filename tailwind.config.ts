import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        vine: {
          50: "#f3f4f6",
          100: "#e5e7eb",
          300: "#9ca3af",
          500: "#4b5563",
          700: "#1f2933",
          900: "#050505"
        },
        gold: {
          100: "#fff2c7",
          300: "#e6c15a",
          500: "#b98b18"
        },
        stonewarm: {
          50: "#f7f8fb",
          100: "#e8ebf0",
          700: "#2c3038",
          900: "#06070a"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
