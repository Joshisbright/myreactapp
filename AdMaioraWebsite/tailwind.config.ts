import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rany: ["Rany", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        dark: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
          dark: "#121212",
          border: "#333333",
        },
        purple: {
          DEFAULT: "#9D4EDD",
          light: "#B76EEF",
          dark: "#7B2CBF",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 10px rgba(157, 78, 221, 0.5), 0 0 20px rgba(157, 78, 221, 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(157, 78, 221, 0.8), 0 0 30px rgba(157, 78, 221, 0.4)" 
          },
        },
        textGlow: {
          "0%, 100%": { 
            textShadow: "0 0 5px rgba(157, 78, 221, 0.5), 0 0 10px rgba(157, 78, 221, 0.2)" 
          },
          "50%": { 
            textShadow: "0 0 10px rgba(157, 78, 221, 0.8), 0 0 20px rgba(157, 78, 221, 0.4)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 8s ease-in-out infinite",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        scaleIn: "scaleIn 0.5s ease-out forwards",
        glow: "glow 2s infinite",
        textGlow: "textGlow 2s infinite",
      },
      spacing: {
        "section": "100px",
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(135deg, #9D4EDD 0%, #B76EEF 100%)",
        "dark-gradient": "linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)",
        "dark-radial": "radial-gradient(circle at center, #2A2A2A 0%, #1A1A1A 100%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        purple: "0 0 5px rgba(157, 78, 221, 0.5), 0 0 15px rgba(157, 78, 221, 0.3)",
        "purple-lg": "0 0 10px rgba(157, 78, 221, 0.5), 0 0 20px rgba(157, 78, 221, 0.3)",
        "inner-white": "inset 0 0 15px rgba(255, 255, 255, 0.1)",
      },
      textShadow: {
        purple: "0 0 5px rgba(157, 78, 221, 0.5), 0 0 10px rgba(157, 78, 221, 0.3)",
      },
      backdropFilter: {
        'blur-xs': 'blur(2px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
