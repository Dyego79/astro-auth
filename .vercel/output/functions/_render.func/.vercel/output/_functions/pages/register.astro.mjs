/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Dp_YYEdS.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_CbB-WXPu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const email = Astro2.cookies.get("email")?.value ?? "";
  const rememberMe = !!email;
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center self-center z-10"> <div class="p-12 bg-white mx-auto rounded-2xl w-100"> <div class="mb-4"> <h3 class="font-semibold text-2xl text-gray-800">Registro</h3> <p class="text-gray-500">Por favor complete sus datos.</p> </div> <form class="space-y-5"> <div class="space-y-2"> <label class="text-sm font-medium text-gray-700 tracking-wide">Nombre</label> <input name="name" class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="mi nombre"> </div> <div class="space-y-2"> <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label> <input name="email"${addAttribute(email, "value")} class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com"> </div> <div class="space-y-2"> <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
Password
</label> <input name="password" class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password"> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <input id="remember_me" name="remember_me" type="checkbox"${addAttribute(rememberMe, "checked")} class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"> <label for="remember_me" class="ml-2 block text-sm text-gray-800">
Remember me
</label> </div> <div class="text-sm"> <a href="#" class="text-green-400 hover:text-green-500">
Forgot your password?
</a> </div> </div> <div> <button type="submit" id="btn-submit" class="disabled:bg-gray-400 w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
Registrarme
</button> </div> </form> <div class="pt-5 text-center text-gray-400 text-lg"> <a href="/login">INGRESAR</a> </div> </div> </div> ` })} `;
}, "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/pages/register.astro", void 0);

const $$file = "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
