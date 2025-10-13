import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.6rem",
        sm: "2rem",
        lg: "3rem",
        xl: "3.5rem",
        "2xl": "4rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["ABCArizonaMix", "Inter", "sans-serif"],
        display: ["ABCArizonaMix", "Inter", "sans-serif"],
      },
      transitionTimingFunction: {
        "ease-smooth": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        "clip-reveal": {
          "0%": {
            clipPath: "inset(100% 0 0 0)",
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            clipPath: "inset(0 0 0 0)",
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "float-up": {
          "0%": {
            transform: "translateY(12px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "clip-reveal":
          "clip-reveal 0.9s var(--tw-ease, cubic-bezier(0.76, 0, 0.24, 1)) forwards",
        "float-up": "float-up 0.7s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
