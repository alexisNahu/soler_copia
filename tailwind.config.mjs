/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primario: "#e8d5a9",
        primarioClaro: "#d4cdb3",
        primarioOscuro: "#d0ae55",
        secundario: "#5e7482",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
