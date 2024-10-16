import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Source Sans 3'",
          "sans-serif",
          "system-ui",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
        serif: ["'Source Serif 4'", "sans-serif"],
        mono: ["'Source Code Pro'", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background)/var(--tw-bg-opacity))",
        foreground: "hsl(var(--foreground)/var(--tw-text-opacity))",
        card: {
          DEFAULT: "hsl(var(--card)/var(--tw-bg-opacity))",
          foreground: "hsl(var(--card-foreground)/var(--tw-text-opacity))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover)/var(--tw-bg-opacity))",
          foreground: "hsl(var(--popover-foreground)/var(--tw-text-opacity))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary)/var(--tw-bg-opacity))",
          foreground: "hsl(var(--primary-foreground)/var(--tw-text-opacity))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary)/var(--tw-bg-opacity))",
          foreground: "hsl(var(--secondary-foreground)/var(--tw-text-opacity))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted)/var(--tw-bg-opacity))",
          foreground: "hsl(var(--muted-foreground)/var(--tw-text-opacity))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent)/var(--tw-bg-opacity))",
          foreground: "hsl(var(--accent-foreground)/var(--tw-text-opacity))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive)/var(--tw-bg-opacity))",
          foreground:
            "hsl(var(--destructive-foreground)/var(--tw-text-opacity))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shine: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine: "shine 8s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
