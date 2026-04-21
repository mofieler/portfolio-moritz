import { _ as _sfc_main$5 } from "./UiIcon-CWWqmf7-.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BEwqaDiO.js";
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext, createVNode, resolveDynamicComponent, toDisplayString, ref, watch, nextTick, readonly } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { u as useSmoothScroll } from "./useSmoothScroll-Cw9Vktc0.js";
import { u as useI18n, b as useSwitchLocalePath, c as useColorMode, d as useRoute } from "../server.mjs";
import "@heroicons/vue/24/solid";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/klona/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/destr/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useSmoothScroll();
    const { locale } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const { isDark } = useColorMode();
    const isEnglish = computed(() => locale.value === "en");
    const isGerman = computed(() => locale.value === "de");
    const localePath = (code) => {
      const path = switchLocalePath(code);
      return typeof path === "string" ? path.split("#")[0] || "/" : path;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full z-40 px-4 py-3 md:p-8 pointer-events-none flex justify-between items-center glass-nav" }, _attrs))}><a href="www.moritzfieler.de" class="nav-trigger text-xl md:text-fluid-2xl font-display font-bold tracking-tighter text-brand-text pointer-events-auto hover:opacity-70 transition-opacity leading-tight"> Mindcoded by Mo. </a><div class="flex items-center gap-2 md:gap-3 pointer-events-auto"><button class="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full text-brand-muted hover:text-brand-text hover:bg-brand-surface border border-transparent hover:border-brand-muted/20 transition-all duration-300"${ssrRenderAttr("aria-label", unref(isDark) ? "Switch to light mode" : "Switch to dark mode")}>`);
      _push(ssrRenderComponent(_component_UiIcon, {
        name: unref(isDark) ? "Sun" : "Moon",
        size: "md"
      }, null, _parent));
      _push(`</button><div class="bg-brand-surface border border-brand-muted/20 rounded-full p-1 flex items-center shadow-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: localePath("en"),
        class: ["min-w-[40px] min-h-[40px] px-3 md:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center", unref(isEnglish) ? "bg-brand-text text-brand-bg" : "text-brand-muted hover:text-brand-text"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`EN`);
          } else {
            return [
              createTextVNode("EN")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: localePath("de"),
        class: ["min-w-[40px] min-h-[40px] px-3 md:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center", unref(isGerman) ? "bg-brand-text text-brand-bg" : "text-brand-muted hover:text-brand-text"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`DE`);
          } else {
            return [
              createTextVNode("DE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><a href="#contact" class="hidden md:flex nav-trigger bg-brand-surface text-brand-text border border-brand-muted/20 px-5 py-2.5 rounded-full text-fluid-sm font-semibold hover:border-brand-terra hover:text-brand-terra transition-all duration-300 shadow-sm items-center gap-2"><span class="relative flex h-2.5 w-2.5"><span class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-brand-terra opacity-75"></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-terra"></span></span> ${ssrInterpolate(_ctx.$t("nav.available"))}</a></div></header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/TheHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ContactCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    label: {},
    value: {},
    href: {},
    isExternal: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$5;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? "a" : "div"), mergeProps({
        href: __props.href,
        target: __props.isExternal ? "_blank" : void 0,
        rel: __props.isExternal ? "noopener noreferrer" : void 0,
        class: ["contact-card group", { "cursor-default": !__props.href }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-terra group-hover:scale-110 transition-transform"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiIcon, {
              name: __props.icon,
              size: "xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-fluid-xs text-[#A8A29E] uppercase tracking-[0.15em] font-bold mb-2"${_scopeId}>${ssrInterpolate(__props.label)}</div><div class="font-medium text-fluid-lg text-white"${_scopeId}>${ssrInterpolate(__props.value)}</div>`);
          } else {
            return [
              createVNode("div", { class: "w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-terra group-hover:scale-110 transition-transform" }, [
                createVNode(_component_UiIcon, {
                  name: __props.icon,
                  size: "xl"
                }, null, 8, ["name"])
              ]),
              createVNode("div", { class: "text-fluid-xs text-[#A8A29E] uppercase tracking-[0.15em] font-bold mb-2" }, toDisplayString(__props.label), 1),
              createVNode("div", { class: "font-medium text-fluid-lg text-white" }, toDisplayString(__props.value), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ContactCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const contactInfo = [
      {
        type: "email",
        label: "contact.email",
        value: "moritzfieler@icloud.com",
        href: "mailto:moritzfieler@icloud.com",
        icon: "Envelope"
      },
      {
        type: "phone",
        label: "contact.phone",
        value: "+49 151 68456178",
        href: "tel:+4915168456178",
        icon: "Phone"
      },
      {
        type: "location",
        label: "contact.location",
        value: "Stuttgart, Germany",
        href: null,
        icon: "MapPin"
      }
    ];
    const footerLinks = [
      { key: "ux", label: "footer.links.ux" },
      { key: "dev", label: "footer.links.dev" },
      { key: "portfolio", label: "footer.links.portfolio" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactCard = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "bg-brand-dark text-white pt-24 md:pt-32 pb-32 md:pb-24 px-6 mt-12 rounded-t-[3rem] md:rounded-t-[4rem] relative"
      }, _attrs))}><div class="max-w-5xl mx-auto text-center reveal"><h2 class="heading-section text-white mb-6 md:mb-8">${ssrInterpolate(_ctx.$t("contact.title"))}</h2><p class="body-medium max-w-2xl mx-auto mb-16 md:mb-20">${ssrInterpolate(_ctx.$t("contact.subtitle"))}</p><div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28"><!--[-->`);
      ssrRenderList(contactInfo, (item) => {
        _push(ssrRenderComponent(_component_ContactCard, {
          key: item.type,
          icon: item.icon,
          label: _ctx.$t(item.label),
          value: item.value,
          href: item.href || void 0
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#A8A29E]"><p>${ssrInterpolate(_ctx.$t("footer.copyright"))}</p><div class="flex gap-6 font-medium"><!--[-->`);
      ssrRenderList(footerLinks, (link) => {
        _push(`<span class="hover:text-white transition-colors cursor-pointer">${ssrInterpolate(_ctx.$t(link.label))}</span>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/impressum",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Impressum `);
          } else {
            return [
              createTextVNode(" Impressum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/datenschutz",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Datenschutz `);
          } else {
            return [
              createTextVNode(" Datenschutz ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/TheFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheFloatingNav",
  __ssrInlineRender: true,
  setup(__props) {
    useSmoothScroll();
    const activeSection = ref("top");
    ref(false);
    ref(null);
    const NAV_ITEMS = [
      { id: "top", label: "nav.home", icon: "Sparkles" },
      { id: "work", label: "nav.work", icon: "Briefcase" },
      { id: "skills", label: "nav.skills", icon: "MagicWand" },
      { id: "contact", label: "nav.contact", icon: "EnvelopeSimple" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$5;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-max" }, _attrs))}><div class="glass-nav rounded-full px-2 py-2 md:px-3 md:py-3 flex items-center gap-1 md:gap-3"><!--[-->`);
      ssrRenderList(NAV_ITEMS, (item) => {
        _push(`<a${ssrRenderAttr("href", `#${item.id}`)} class="${ssrRenderClass([{ active: unref(activeSection) === item.id }, "nav-item group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-brand-muted hover:text-brand-text hover:bg-brand-text/10"])}"${ssrRenderAttr("aria-label", _ctx.$t(item.label))}>`);
        _push(ssrRenderComponent(_component_UiIcon, {
          name: item.icon,
          size: "lg"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/TheFloatingNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useScrollReveal = (selector = ".reveal", options) => {
  const revealed = ref(/* @__PURE__ */ new Set());
  const route = useRoute();
  const scan = () => {
    return;
  };
  watch(() => route.fullPath, () => {
    revealed.value.clear();
    nextTick(scan);
  });
  return {
    revealed: readonly(revealed)
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useScrollReveal(".reveal");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = _sfc_main$4;
      const _component_TheFooter = _sfc_main$2;
      const _component_TheFloatingNav = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_TheFloatingNav, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-DyIrFCPd.js.map
