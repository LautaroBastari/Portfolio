import defaultTheme from "tailwindcss/defaultTheme";

const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        surface: { DEFAULT: v("surface"), 2: v("surface-2") },
        line: v("line"),
        fg: v("fg"),
        muted: v("muted"),
        accent: v("accent"),
      },
      keyframes: {
        "scroll-dot": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        "scroll-dot": "scroll-dot 2.2s ease-in-out infinite",
      },
      fontFamily: {
        // Texto de cuerpo: serif de lectura; títulos: serif de titular de diario
        sans: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
        display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
