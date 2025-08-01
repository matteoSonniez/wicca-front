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
        gris: "#F3F3F6",
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
        green:"#095228",
        green2:"#013912",
        bordaux:"#4E1727",
        texteclaire:"#74767D",
        blackfooter:"#181818",
        nuit: "#1F1E2A",
        becomepract: "#411C2A",
        bleutext: "#011E62",
        service1: "#AEAEE9",
        service2: "#C6E09F",
        service3: "#F9AA6C",
        grisbg: "#F6F3F1",

//         #1F1E2A – Nuit violacée, élégante et mystique.

// #2A0F19 – Bordeaux profond tirant sur le prune.

// #411C2A – Framboise sombre (fait ressortir ton rose clair).

// #3A3F4A – Gris ardoise bleuté, sérieux mais pas triste.

// #12333A – Vert sarcelle très sombre, vibe ésotérique.

// #4B0D0D – Rouge/brun sombre, dramatique.
      },
    },
  },
  plugins: [],
};
