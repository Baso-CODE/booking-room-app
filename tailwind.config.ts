import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      primary: "var(--font-marcellus)",
      secondary: "var(--font-urbanist)",
    },
    backgroundImage: {
      hero: 'url("/hero/bg.jpg")',

    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00fff5',
          hover: '#1ed0c8',
        },
        secondary: {
          DEFAULT: '#25a29c'
        },
        accent: {
          DEFAULT: '#247773',
          hover: '#1f4f4c',
        },
        tertiary: {
          DEFAULT: '#162928'
        },
        grey: {
          DEFAULT: '#393e46'
        },
        customBackground: {
          DEFAULT: '#151a26',
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config