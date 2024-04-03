/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_B5SYsdU8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, a as $$Layout } from './about_CCLA5HOM.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const garanitzamos = [
    {
      img: "/index/garantizamos1.svg",
      title: "ASESORAMIENTO EXPERTO"
    },
    {
      img: "/index/garantizamos2.svg",
      title: "SOLUCIONES PERSONALIZADAS"
    },
    {
      img: "/index/garantizamos3.svg",
      title: "ADAPTADAS A NECESIDADES ESPECIF\xCDCAS"
    },
    {
      img: "/index/garantizamos4.svg",
      title: "GESTI\xD3N EFICIENTE"
    },
    {
      img: "/index/garantizamos5.svg",
      title: "PROCESOS SEGUROS"
    },
    {
      img: "/index/garantizamos6.svg",
      title: "REQUERIMIENTOS VIGENTES"
    }
  ];
  const servicios = [
    {
      img: "/index/servicio1.webp",
      title: "CONSULTOR\xCDA ESPECIALIZADA"
    },
    {
      img: "/index/servicio2.webp",
      title: "GESTI\xD3N INTEGRAL DE REGULACIONES SANITARIAS"
    },
    {
      img: "/index/servicio3.webp",
      title: "ASESORAMIENTO REGULATORIO"
    },
    {
      img: "/index/servicio4.webp",
      title: "IMPLEMENTACI\xD3N DE BUENAS PR\xC1CTICAS Y CONTROL DE CALIDAD"
    },
    {
      img: "/index/servicio5.webp",
      title: "ASISTENCIA T\xC9CNICA, LEGAL Y FINANCIERA"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SOLER EAS" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="relative h-[1700px] w-full max-w-[1920px] mx-auto"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/heroIndex.webp", "width": 1920, "height": 1820, "alt": "Hero index solar E.A.S. imagen descriptiva empresarial", "loading": "eager", "class": "mx-auto object-cover absolute inset-0 -z-10 h-[1700px] w-full animate-fade [mask-image:_linear-gradient(black_90%,_transparent);]" })} <div class="flex flex-col h-full justify-between py-24"> <div class="mx-auto text-secundario max-w-7xl px-12"> <p class="font-bold text-3xl text-center mb-12">
En un entorno empresarial cada vez más complejo y regulado...
</p> <p class="text-center text-3xl font-normal">
Contar con el apoyo de una consultora especializada en temas
            regulatorios se vuelve fundamental para las empresas en Paraguay.
</p> </div> <div class="w-full"> <hgroup class="relative py-16"> <h1 class="text-white text-center text-3xl lg:text-5xl relative z-10 max-lg:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
COMO EMPRESA GARANTIZAMOS...
</h1> <h1 class="text-secundario text-3xl lg:text-6xl font-bold xl:text-9xl pointer-events-none select-none absolute inset-6 text-opacity-20 mx-auto text-center">
GARANTIZAMOS
</h1> </hgroup> <div class="mx-auto"> <div class="bg-[#90A5BA] bg-opacity-80 flex flex-col lg:flex-row gap-6 p-10"> ${garanitzamos.map((value, idx) => renderTemplate`<div class="flex flex-col text-white flex-1 items-center mx-auto text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": value.img, "width": 110, "height": 110, "alt": value.title, "class": "mx-auto aspect-square mb-2", "loading": "lazy" })} <span>${value.title}</span> </div>`)} </div> </div> </div> </div> </section> <section class="py-24 container w-11/12 mx-auto"> <h1 class="text-primarioOscuro text-center text-5xl font-semibold mb-12">
NUESTROS SERVICIOS
</h1> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> ${servicios.map((value, idx) => renderTemplate`<div${addAttribute(`Servicio: ${idx}`, "data-servicio")} class="flex flex-col h-[600px] text-white bg-[#d4cdb3] flex-1"> <div class="basis-5/12 flex items-center justify-center p-3 font-bold"> ${value.title} </div> <div> ${renderComponent($$result2, "Image", $$Image, { "src": value.img, "width": 600, "height": 400, "alt": "", "class": "w-full h-auto", "loading": "lazy" })} </div> <div class="p-4 flex items-center justify-center flex-1"> <button class="px-6 py-3 border-2 rounded-md border-white bg-transparent hover:bg-primarioOscuro transition-colors uppercase">
Me interesa
</button> </div> </div>`)} </div> </section> <section class="relative h-[1450px] max-w-[1920px] m-auto -mt-32"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/NuestroEquipo.webp", "width": 1920, "height": 1500, "loading": "eager", "alt": "Nuestro equipo", "class": "absolute object-left inset-0 -z-10 h-[1450px] object-cover w-full [mask-image:_linear-gradient(transparent,_black_5%);]" })} <div class="pt-48 max-w-6xl px-18 mx-auto text-xl lg:text-3xl font-bold text-center text-white"> <p>
EN SOLER EAS, CONTAMOS CON UN EQUIPO DE PROFESIONALES ALTAMENTE
          CUALIFICADOS Y COMPROMETIDOS QUE ABARCAN UNA AMPLIA GAMA DE
          DISCIPLINAS.
</p> </div> <div class="grid place-items-center justify-items-end w-full h-full"> <div class="bg-secundario/80 px-6 py-12 sm:px-12 sm:py-16 lg:py-28 lg:px-32 text text-white backdrop-blur-sm max-w-5xl"> <h1 class="mb-12 font-semibold text-2xl lg:text-4xl">
Nuestro equipo multidisciplinario está compuesto por:
</h1> <ul class="flex flex-col gap-y-2 lg:text-lg"> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>INGENIEROS QUÍMICOS</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>QUÍMICOS FARMACÉUTICOS</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>TECNÓLOGOS DE ALIMENTOS</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>VETERINARIOS</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>INGENIEROS AGRÓNOMOS Y AMBIENTALES</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>INGENIEROS CIVILES</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>ARQUITECTOS</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>ABOGADOS DESPACHANTES DE ADUANAS</span> </li> <li class="flex gap-x-2 font-semibold"> ${renderComponent($$result2, "Image", $$Image, { "src": "/index/check.svg", "width": 33, "height": 33, "alt": "check", "loading": "eager" })} <span>PROFESIONALES DE COMERCIO EXTERIOR</span> </li> </ul> </div> </div> </section> </main> ` })}`;
}, "C:/Users/diana/source/repos/soler eas/src/pages/index.astro", void 0);

const $$file = "C:/Users/diana/source/repos/soler eas/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
