/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dp_YYEdS.mjs';
import 'kleur/colors';
import { $ as $$MainLauyout } from '../chunks/MainLauyout_E548IJJ9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLauyout", $$MainLauyout, { "tittle": "Hola" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hola</h1> ` })}`;
}, "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/pages/index.astro", void 0);

const $$file = "C:/Users/OPTIMUS/Desktop/astro-auth-store/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
