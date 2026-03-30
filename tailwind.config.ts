import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          gold: '#D4AF37',     // Premium Gold
          onyx: '#0C0C0C',     // Deep Black for OLED screens
          cream: '#F3E4E4',    // Soft contrast text
          teal: '#14b8a6',     // Your Brand Accent
        }
      },
      // Mobile-First: Optimized for thumb reach
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      }
    },
  },
  plugins: [],
};
export default config;