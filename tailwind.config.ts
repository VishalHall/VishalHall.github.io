import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varela_round: ['var(--font-varela-round)'],
        robeto: ['var(--font-roboto)']
      },
      colors: {
        dark_primary: '#242528',
        dark_secondary: '#E0E0E0',
        light_primary: '#d3d3d3',
        light_secondary: '#212121'
      }
    },
  },
  plugins: [],
} satisfies Config;
