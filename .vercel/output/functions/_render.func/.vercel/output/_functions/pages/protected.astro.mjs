/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Dp_YYEdS.mjs';
import 'kleur/colors';
import { $ as $$MainLauyout } from '../chunks/MainLauyout_E548IJJ9.mjs';
import { f as firebase } from '../chunks/config_DzgpoZMP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Protected = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Protected;
  const firebaseUser = firebase.auth.currentUser;
  if (!firebaseUser) {
    return Astro2.redirect("/login");
  }
  await firebaseUser.reload();
  const { displayName, email, emailVerified, photoURL } = firebaseUser;
  const name = displayName ?? "Sin Nombre";
  return renderTemplate`${renderComponent($$result, "MainLauyout", $$MainLauyout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center"> <div class="card w-96 mx-auto bg-white shadow-xl hover:shadow"> ${photoURL ? renderTemplate`<img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4"${addAttribute(`Avatar de ${name}`, "alt")}>` : renderTemplate`<div class="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white bg-gray-300 flex justify-center items-center"> <span class="text-white text-3xl font-extrabold"> ${name.substring(0, 2)} </span> </div>`} <div class="text-center mt-2 text-3xl font-medium">${name}</div> <div class="text-center mt-2 font-light text-sm">${email}</div> <div class="text-center font-normal text-md"> ${emailVerified ? "Email Verificado" : "Email no verificado"} </div> <div class="px-6 text-center mt-2 font-light text-sm"> <p>Front end Developer, avid reader. Love to take a long walk, swim</p> </div> <hr class="mt-8"> <div class="flex p-4"> <div class="w-1/2 text-center"> <span class="font-bold">1.8 k</span> Followers
</div> <div class="w-0 border border-gray-300"></div> <div class="w-1/2 text-center"> <span class="font-bold">2.0 k</span> Following
</div> </div> </div> </div> ` })}`;
}, "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/pages/protected.astro", void 0);

const $$file = "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/pages/protected.astro";
const $$url = "/protected";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Protected,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
