/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/index/solerHero.webp')",
      },
      colors: {
        primario: "#e8d5a9",
        primarioClaro: "#d4cdb3",
        primarioOscuro: "#d0ae55",
        secundario: "#5e7482",
        doradoSoler: "#d2bf7a",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
