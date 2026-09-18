import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PageBackground: "#FAFAF8",
        Surface: "#FFFFFF",
        Foreground: "#1A1A2E",
        Primary: "#FF6B6B",
        AccentYellow: "#FFD93D",
        MintGreen: "#C3F0CA",
        LavenderSurface: "#F0EEF8",
        BlushTint: "#FFE8E8",
        mutedtext: "#6B6B8A",
        DarkPromo: "#1A1A2E → #2D1B69"
      },
      fontFamily: {
        Playfair: "Playfair Display, serif",
        DMSans: "DM Sans, sans-serif"
      },
      // keyframes:{
      //   marquee:{
      //     "0%": {
      //       transform: "translateX(0%)",
      //     },
      //     "100%" : {
      //       transform: "translateX(-50%)"
      //     }
      //   }
      // },
      // animation: {
      //   marquee: "marquee 20s linear infinite"
      // }
    },
  },
  plugins: [],
}