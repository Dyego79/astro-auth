import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from './astro/server_Dp_YYEdS.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$ViewTransitions } from './ViewTransitions_DK87xMUJ.mjs';

const $$Astro$1 = createAstro();
const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { isLoggedIn } = Astro2.locals;
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between px-20 py-10 items-center bg-white"> <h1 class="text-xl text-gray-800 font-bold">HotCoffee</h1> <div class="flex items-center"> <ul class="flex items-center space-x-6"> <li class="font-semibold text-gray-700"><a href="/">Home</a></li> ${isLoggedIn && renderTemplate`<li class="font-semibold text-gray-700"> <a href="/protected">Protegido</a> </li>`} ${!isLoggedIn ? renderTemplate`<li class="font-semibold text-gray-700"> <a href="/login">INGRESAR</a> </li>` : renderTemplate`<li id="logout" class="font-semibold text-gray-700"> <a href="">Salir</a> </li>`} <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M12 14l9-5-9-5-9 5 9 5z"></path> <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path> </svg> </li> <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path> </svg> </li> <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </li> </ul> </div> </nav> `;
}, "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/components/shared/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$MainLauyout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLauyout;
  const { tittle = "Hola" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${tittle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/layouts/MainLauyout.astro", void 0);

export { $$MainLauyout as $ };
