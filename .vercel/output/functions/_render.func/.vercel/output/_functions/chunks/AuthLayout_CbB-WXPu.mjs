import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_Dp_YYEdS.mjs';
import 'kleur/colors';
import { $ as $$ViewTransitions } from './ViewTransitions_DK87xMUJ.mjs';

const $$Astro = createAstro();
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const { tittle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${tittle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body><div class="bg-no-repeat bg-cover bg-center relative" style="background-image: url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80);"> <div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div> <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center"> <div class="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10"> <div class="self-start hidden lg:flex flex-col text-white"> <img src="" class="mb-3"> <h1 class="mb-3 font-bold text-5xl">Hi ? Welcome Back Aji</h1> <p class="pr-3">
Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
</p> </div> </div> ${renderSlot($$result, $$slots["default"])} </div> </div> </body></html>`;
}, "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/layouts/AuthLayout.astro", void 0);

export { $$AuthLayout as $ };
