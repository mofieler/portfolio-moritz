import { _ as __nuxt_component_0 } from './nuxt-link-BEwqaDiO.mjs';
import { _ as _sfc_main$1 } from './UiIcon-CWWqmf7-.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-XW2WoKGq.mjs';
import './server.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/@heroicons/vue/24/solid/esm/index.js';
import '../_/renderer.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/devalue/index.js';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "impressum",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Impressum \u2013 Moritz Fieler",
      meta: [{ name: "robots", content: "noindex, nofollow" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen px-6 pt-36 pb-24 md:pt-48 md:pb-32" }, _attrs))}><div class="max-w-2xl mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-2 text-sm font-semibold mb-12 transition-colors",
        style: { "color": "rgb(var(--brand-muted))" },
        onmouseenter: "this.style.color='rgb(var(--brand-terra))'",
        onmouseleave: "this.style.color='rgb(var(--brand-muted))'"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiIcon, {
              name: "ArrowLeft",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(` Zur\xFCck `);
          } else {
            return [
              createVNode(_component_UiIcon, {
                name: "ArrowLeft",
                size: "sm"
              }),
              createTextVNode(" Zur\xFCck ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="font-display font-bold text-3xl md:text-4xl mb-12" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Impressum </h1><div class="space-y-10 text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "rgb(var(--brand-muted))" })}"><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Angaben gem\xE4\xDF \xA7 5 TMG </h2><p> Moritz Fieler<br> Sautterweg 30<br> 70565 Stuttgart<br> Deutschland </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Kontakt </h2><p> E-Mail: <a href="mailto:moritzfieler@icloud.com" class="hover:underline transition-colors" style="${ssrRenderStyle({ "color": "rgb(var(--brand-terra))" })}">moritzfieler@icloud.com</a></p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Berufsbezeichnung </h2><p> Freiberuflicher UX Designer &amp; Frontend Entwickler<br> Verliehen in: Deutschland </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Steuerliche Angaben </h2><p> Als Kleinunternehmer im Sinne von \xA7 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet und ausgewiesen. Eine Umsatzsteuer-Identifikationsnummer liegt daher nicht vor. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Verantwortlich f\xFCr den Inhalt (\xA7 55 Abs. 2 RStV) </h2><p> Moritz Fieler<br> Sautterweg 30<br> 70565 Stuttgart </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Haftung f\xFCr Inhalte </h2><p> Als Diensteanbieter bin ich gem\xE4\xDF \xA7 7 Abs. 1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Haftung f\xFCr Links </h2><p> Mein Angebot enth\xE4lt Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Urheberrecht </h2><p> Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen meiner schriftlichen Zustimmung. </p></section></div><div class="mt-16 pt-8 border-t text-xs" style="${ssrRenderStyle({ "border-color": "rgb(var(--brand-muted) / 0.15)", "color": "rgb(var(--brand-muted) / 0.6)" })}"> Mindcoded by Mo. \xB7 Stuttgart, Deutschland </div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=impressum-D1BUFEI9.mjs.map
