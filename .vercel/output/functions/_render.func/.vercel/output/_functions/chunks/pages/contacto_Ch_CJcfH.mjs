/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute } from '../astro_B5SYsdU8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, a as $$Layout } from './about_CCLA5HOM.mjs';

const $$Astro$1 = createAstro();
const $$HeaderBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderBanner;
  const { image, title, title2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[300px] sm:h-[400px] lg:h-[603px]"> ${renderComponent($$result, "Image", $$Image, { "src": image, "width": 1920, "height": 603, "alt": "Banner de nuestros servicios", "loading": "eager", "class": "absolute inset-0 mx-auto h-[300px] sm:h-[400px] lg:h-[603px] object-cover" })} <div class="pt-24 sm:pt-32 lg:pt-48 h-full relative w-11/12 max-w-screen-2xl mx-auto"> <div${addAttribute(`font-semibold overflow-x-clip text-3xl sm:text-4xl lg:text-5xl relative text-secundario before:content-['${title2}'] before:text-[#E0E5EB] before:opacity-50 before:absolute before:-top-4 lg:before:-top-14 before:-z-0 before:text-4xl sm:before:text-7xl lg:before:text-9xl before:font-bold`, "class")}> <h1 class="relative">${title}</h1> </div> </div> </section>`;
}, "C:/Users/diana/source/repos/soler eas/src/components/headerBanner.astro", void 0);

const $$Astro = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderBanner", $$HeaderBanner, { "image": "/contacto/contactoBanner.webp", "title": "Escribinos", "title2": "CONTACTO" })} <section class="h-[930px] relative"> ${renderComponent($$result2, "Image", $$Image, { "src": "/contacto/contactoBg.webp", "width": 1920, "height": 624, "loading": "eager", "alt": "Background seccion contacto", "class": "absolute inset-0 mx-auto h-full object-cover -z-10" })} <div class="grid lg:grid-cols-2 gap-x-24 py-12 text-lg text-secundario max-w-screen-2xl w-11/12 mx-auto"> <div class=""> <p class="mb-6 leading-5">
Si tiene alguna duda o desea solicitar nuestros servicios complete
            el siguiente formulario de contacto, le responderemos en la brevedad
            posible.
</p> <form action=""> <label for="nombre" class="sr-only">Nombre y apellido</label> <input id="nombre" autocomplete="name" name="nombre" placeholder="Nombre y Apellido *" class="bg-transparent border-[1.5px] border-secundario rounded-lg rounded-tr-none px-6 py-4 placeholder:text-secundario placeholder:font-bold focus:outline-none caret-secundario w-full max-w-xl mb-6"> <label for="email" class="sr-only">Correo electrónico</label> <input id="email" autocomplete="name" name="email" placeholder="Correo electrónico" class="bg-transparent border-[1.5px] border-secundario rounded-lg rounded-tr-none px-6 py-4 placeholder:text-secundario placeholder:font-bold focus:outline-none caret-secundario w-full max-w-xl mb-6"> <textarea name="message" id="mensaje" placeholder="Mensaje" rows="4" class="bg-transparent border-[1.5px] border-secundario rounded-lg rounded-tr-none px-6 py-4 placeholder:text-secundario placeholder:font-bold focus:outline-none caret-secundario w-full max-w-xl mb-4 resize-none"></textarea> <button type="submit" class="text-white px-10 py-3 rounded-lg rounded-tr-none bg-primarioOscuro">ENVIAR</button> </form> </div> <div class="flex flex-col"> <span>Estamos aquí</span> ${renderComponent($$result2, "Image", $$Image, { "src": "/contacto/mapa.webp", "width": 625, "height": 441, "alt": "Mapa ubicacion", "class": "rounded-lg rounded-tr-none w-full" })} </div> </div> </section> </main> ` })}`;
}, "C:/Users/diana/source/repos/soler eas/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/diana/source/repos/soler eas/src/pages/contacto.astro";
const $$url = "/contacto";

const contacto = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeaderBanner as $, contacto as c };
