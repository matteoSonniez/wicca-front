/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 1) on déclare le pattern + le dégradé radial
        'diagonal-fade': `
          repeating-linear-gradient(
            45deg,
            rgba(128,128,128,0.1) 0px,
            rgba(128,128,128,0.1) 1.4px,
            transparent 1.5px,
            transparent 30px
          )
        `,
      },
      colors: {
        blanc: "#F8F9FA",
        maincolor: "#E93453",
        framboise2: "#BB2649",
        bleusoft: "#EFFAFD",
        noir: "#1E1E1E",
        rouge: "#ffded7",
        blacktext: "#323430",
        beige: "#F7F6F5",
        beigeclaire: "#FAF8F1",
        grisbeige: "#e5e1df",
        bgmain: "#FAF8FE",
        test: "#DBD7FC",
        bgtest: "#3A1515",
        bgtest2: "#5D1722",
      },
    },
  },
  plugins: [],
};
