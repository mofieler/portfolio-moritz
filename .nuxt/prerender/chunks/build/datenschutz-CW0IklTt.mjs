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
  __name: "datenschutz",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Datenschutz \u2013 Moritz Fieler",
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
      _push(`<h1 class="font-display font-bold text-3xl md:text-4xl mb-4" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> Datenschutzerkl\xE4rung </h1><p class="text-sm mb-12" style="${ssrRenderStyle({ "color": "rgb(var(--brand-muted) / 0.6)" })}">Stand: April 2025</p><div class="space-y-10 text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "rgb(var(--brand-muted))" })}"><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 1. Verantwortlicher </h2><p> Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br><br> Moritz Fieler<br> Sautterweg 30<br> 70565 Stuttgart<br> E-Mail: <a href="mailto:moritzfieler@icloud.com" class="hover:underline" style="${ssrRenderStyle({ "color": "rgb(var(--brand-terra))" })}">moritzfieler@icloud.com</a></p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 2. Allgemeines zur Datenverarbeitung </h2><p> Diese Website erhebt und verarbeitet personenbezogene Daten nur soweit dies zur Bereitstellung einer funktionsf\xE4higen Website sowie der angebotenen Inhalte erforderlich ist. Eine dar\xFCber hinausgehende Verarbeitung findet nur statt, soweit dies gesetzlich erlaubt ist oder eine Einwilligung vorliegt. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 3. Hosting &amp; Server-Logfiles </h2><p> Diese Website wird auf einem externen Server gehostet. Beim Abrufen der Seite werden vom Hosting-Anbieter automatisch sogenannte Server-Logfiles erfasst, die Ihr Browser \xFCbermittelt. Dazu geh\xF6ren insbesondere:<br><br> Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie die IP-Adresse.<br><br> Eine Zusammenf\xFChrung dieser Daten mit anderen Datenquellen findet nicht statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und fehlerfreien Betrieb der Website). </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 4. Google Fonts </h2><p> Diese Website l\xE4dt Schriftarten (Inter, Plus Jakarta Sans) direkt von den Servern von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, \xFCber die Domain <span style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">fonts.googleapis.com</span> und <span style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">fonts.gstatic.com</span>.<br><br> Beim Laden der Schriftarten wird Ihre IP-Adresse an Google \xFCbermittelt. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen und ansprechenden Darstellung der Website).<br><br> Wenn Ihr Browser Google Fonts nicht unterst\xFCtzt oder der Abruf blockiert wird, erscheint die Seite in einer Systemschrift. Google kann die \xFCbermittelten Daten f\xFCr eigene Zwecke (z. B. Profiling) verwenden. Weitere Informationen finden Sie in der Datenschutzerkl\xE4rung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="hover:underline" style="${ssrRenderStyle({ "color": "rgb(var(--brand-terra))" })}">policies.google.com/privacy</a>. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 5. Eingebettete Inhalte (Google Drive) </h2><p> Einige Projektseiten dieser Website binden Videos \xFCber Google Drive (Google LLC) ein. Beim \xD6ffnen eines solchen Projekts wird eine Verbindung zu den Google-Servern hergestellt und dabei Ihre IP-Adresse \xFCbermittelt. Dies geschieht nur, wenn Sie das betreffende Projekt aktiv \xF6ffnen.<br><br> Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="hover:underline" style="${ssrRenderStyle({ "color": "rgb(var(--brand-terra))" })}">policies.google.com/privacy</a>. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 6. Lokaler Speicher (localStorage) </h2><p> Diese Website speichert im lokalen Speicher Ihres Browsers (localStorage) ausschlie\xDFlich Ihre Farbschema-Pr\xE4ferenz (Hell- oder Dunkelmodus). Es werden keine personenbezogenen Daten gespeichert, und diese Information wird nicht an Server \xFCbertragen. Sie k\xF6nnen den lokalen Speicher jederzeit \xFCber die Einstellungen Ihres Browsers l\xF6schen. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 7. Cookies </h2><p> Diese Website setzt keine Tracking- oder Marketing-Cookies. Es werden keine Analysetools, Werbenetzwerke oder sonstigen Cookie-basierten Dienste eingesetzt. </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 8. Kontaktaufnahme per E-Mail </h2><p> Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). </p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 9. Ihre Rechte als betroffene Person </h2><p> Sie haben gegen\xFCber mir folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:<br><br><strong style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">Auskunft</strong> (Art. 15 DSGVO) \xB7 <strong style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">Berichtigung</strong> (Art. 16 DSGVO) \xB7 <strong style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">L\xF6schung</strong> (Art. 17 DSGVO) \xB7 <strong style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">Einschr\xE4nkung der Verarbeitung</strong> (Art. 18 DSGVO) \xB7 <strong style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">Daten\xFCbertragbarkeit</strong> (Art. 20 DSGVO) \xB7 <strong style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}">Widerspruch</strong> (Art. 21 DSGVO)<br><br> Zur Aus\xFCbung Ihrer Rechte wenden Sie sich bitte per E-Mail an: <a href="mailto:moritzfieler@icloud.com" class="hover:underline" style="${ssrRenderStyle({ "color": "rgb(var(--brand-terra))" })}">moritzfieler@icloud.com</a></p></section><section><h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="${ssrRenderStyle({ "color": "rgb(var(--brand-text))" })}"> 10. Beschwerderecht bei der Aufsichtsbeh\xF6rde </h2><p> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbeh\xF6rde \xFCber die Verarbeitung Ihrer personenbezogenen Daten durch mich zu beschweren. Zust\xE4ndige Aufsichtsbeh\xF6rde f\xFCr Baden-W\xFCrttemberg ist:<br><br> Der Landesbeauftragte f\xFCr den Datenschutz und die Informationsfreiheit Baden-W\xFCrttemberg<br> K\xF6nigstra\xDFe 10a<br> 70173 Stuttgart<br><a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" class="hover:underline" style="${ssrRenderStyle({ "color": "rgb(var(--brand-terra))" })}">www.baden-wuerttemberg.datenschutz.de</a></p></section></div><div class="mt-16 pt-8 border-t text-xs" style="${ssrRenderStyle({ "border-color": "rgb(var(--brand-muted) / 0.15)", "color": "rgb(var(--brand-muted) / 0.6)" })}"> Mindcoded by Mo. \xB7 Stuttgart, Deutschland </div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datenschutz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=datenschutz-CW0IklTt.mjs.map
