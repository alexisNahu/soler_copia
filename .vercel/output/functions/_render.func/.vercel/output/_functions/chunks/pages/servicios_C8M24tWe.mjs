/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_B5SYsdU8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, a as $$Layout } from './about_CCLA5HOM.mjs';
import { $ as $$HeaderBanner } from './contacto_Ch_CJcfH.mjs';

const $$Astro = createAstro();
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  const servicios = [
    {
      title: "Consultori\u0301a Especializada",
      slug: "",
      text: "Ofrecemos asesoramiento estrate\u0301gico y personalizado para empresas del sector qui\u0301mico, industrial y de produccio\u0301n, disen\u0303ado para impulsar su crecimiento y e\u0301xito en el mercado."
    },
    {
      title: "Gestio\u0301n Integral de Regulaciones Sanitarias",
      slug: "",
      text: "Nos encargamos de la regencia y direccio\u0301n te\u0301cnica ante las principales entidades sanitarias locales, incluyendo DINAVISA, SENACSA, SENAVE, SENAD e INAN, para garantizar el cumplimiento normativo y la operacio\u0301n segura de tu empresa. Nos ocupamos de todas las gestiones, tra\u0301mites y del respaldo documental de las empresas ante estas instituciones."
    },
    {
      title: "Asesoramiento Regulatorio",
      slug: "",
      text: "Brindamos asesori\u0301a especializada en la fabricacio\u0301n, importacio\u0301n, distribucio\u0301n y compra de una amplia gama de productos, incluyendo domisanitarios, cosme\u0301ticos, farmace\u0301uticos, alimentarios, veterinarios, dispositivos me\u0301dicos y otros relacionados al sector qui\u0301mico e industrial."
    },
    {
      title: "Implementacio\u0301n de Buenas Pra\u0301cticas y Control de Calidad",
      slug: "",
      text: "Ofrecemos servicios de implementacio\u0301n de buenas pra\u0301cticas, control y auditori\u0301a de establecimientos y laboratorios de produccio\u0301n, asegurando el cumplimiento de las normativas de calidad requeridas para obtener certificaciones tanto a nivel nacional como internacional. Desde la evaluacio\u0301n inicial hasta la implementacio\u0301n efectiva y el seguimiento continuo, nuestro equipo de expertos te guiara\u0301 en cada etapa del proceso para garantizar el cumplimiento de los esta\u0301ndares ma\u0301s exigentes y la excelencia en tus operaciones."
    },
    {
      title: "Asistencia Te\u0301cnica, Legal y Financiera",
      slug: "",
      text: "Apoyamos en la puesta en marcha de proyectos y plantas industriales, proporcionando orientacio\u0301n experta en aspectos te\u0301cnicos, legales y financieros para asegurar el e\u0301xito de tu inversio\u0301n."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative"> ${renderComponent($$result2, "HeaderBanner", $$HeaderBanner, { "image": "/servicios/servicioBanner.webp", "title": "Nuestros Servicios", "title2": "SERVICIOS" })} <section class="max-w-screen-2xl mx-auto w-11/12 py-24"> <div class="grid gap-8 lg:gap-12 grid-cols-2 lg:grid-cols-3"> ${servicios.map((value, idx) => {
    return renderTemplate`<div${addAttribute(`Servicio: ${idx}`, "data-key")}> <h3 class="font-bold text-3xl text-primarioOscuro mb-6"> ${value.title} </h3> <p class="text-secundario text-lg font-medium mb-6"> ${value.text} </p> <button class="border-[1.5px] border-primarioOscuro rounded-lg rounded-tr-none px-5 py-3 text-primarioOscuro font-semibold transition-colors hover:bg-secundario/10">
ME INTERESA
</button> </div>`;
  })} </div> </section> <section class="relative text-white -mt-72 h-[1300px]"> ${renderComponent($$result2, "Image", $$Image, { "src": "/servicios/servicioBg.webp", "width": 1920, "height": 1390, "alt": "Servicios background", "class": "absolute inset-0 mx-auto object-cover h-full -z-10 [mask-image:_linear-gradient(transparent,_black_10%);]" })} <div class="max-w-6xl mx-auto w-11/12 pt-80"> <div class="mb-12"> <h1 class="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
RUBROS Y ENTES SANITARIOS GUBERNAMENTALES ANTE LOS CUALES BRINDAMOS
            SERVICIOS
</h1> </div> <div class="grid md:grid-cols-2 gap-6"> <div class="py-6 sm:py-10 lg:py-16 px-4 sm:px-12 lg:px-20 bg-[#D4CDB3] bg-opacity-70"> <h2 class="font-bold text-2xl lg:text-3xl mb-3">Rubros</h2> <ul class="font-semibold lg:text-lg flex flex-col gap-y-1 sm:gap-y-3"> <li>Productos Domisanitarios.</li> <li>Productos de Higiene Personal, Cosméticos y Perfumes.</li> <li>Especialidades Farmacéuticas.</li> <li>Suplementos Dietarios.</li> <li>Alimentos y Manufactura.</li> <li>Dispositivos Médicos.</li> <li>Productos Veterinarios.</li> <li>Agroquímicos Fitosanitarios.</li> <li>Productos Químicos Controlados.</li> </ul> </div> <div class="py-6 sm:py-10 lg:pt-16 lg:mb-32 px-4 sm:px-12 lg:px-20 bg-[#D4CDB3] bg-opacity-70"> <h2 class="font-bold text-2xl lg:text-3xl mb-3">
Entes Regulatorios
</h2> <ul class="font-bold lg:text-lg flex flex-col"> <li>DINAVISA</li> <li>INAN</li> <li>SENAVE</li> <li>SENACSA</li> <li>SENAD</li> <li>MADES</li> <li>DNA</li> </ul> </div> </div> </div> </section> </main> ` })}`;
}, "C:/Users/diana/source/repos/soler eas/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/diana/source/repos/soler eas/src/pages/servicios.astro";
const $$url = "/servicios";

export { $$Servicios as default, $$file as file, $$url as url };
