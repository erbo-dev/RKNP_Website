import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050608",
        foreground: "#d7e2e9",
        card: "#0d0f14",
        border: "rgba(215, 226, 233, 0.12)",
        brand: {
          primary: "#d7e2e9",
          secondary: "#00e5ff",
          tertiary: "#49555c",
          accent: "#ffab00",
          success: "#00e676",
        },
        surface: {
          900: "#050608",
          800: "#0c0e12",
          700: "#13171f",
          600: "#1a1f2a",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    },
  },
  plugins: [],
};

export default config;
