/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bleu: "#4A8BDF",
        maincolor: "#E93453",
        framboise2: "#BB2649",
        bleusoft: "#EFFAFD",
        aubergine: "#A0006D",
        purple: "#BFACE2",
        blacktext: "#323430",
        beige: "#F7F6F5",
        grisbeige: "#e5e1df",
        bgmain: "#FAF8FE",
      },
    },
  },
  plugins: [],
};
