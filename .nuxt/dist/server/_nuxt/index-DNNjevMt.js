import { defineComponent, ref, mergeProps, useSSRContext, withCtx, renderSlot, computed, unref, createTextVNode, toDisplayString, toValue, watch, readonly } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderTeleport } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as __nuxt_component_0$3 } from "./nuxt-link-BEwqaDiO.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { u as useI18n, a as useRuntimeConfig } from "../server.mjs";
import { u as useSmoothScroll, a as useLenis } from "./useSmoothScroll-Cw9Vktc0.js";
import { _ as _sfc_main$l } from "./UiIcon-CWWqmf7-.js";
import { u as useHead } from "./v3-XW2WoKGq.js";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/ofetch/dist/node.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/klona/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/destr/dist/index.mjs";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
import "@heroicons/vue/24/solid";
import "C:/Users/morit/MyCode/moritzfieler.com/frontend/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "HeroBackground",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvasRef",
        ref: canvasRef,
        class: "hero-canvas",
        "aria-hidden": "true"
      }, _attrs))} data-v-aa8871f1></canvas>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroBackground.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-aa8871f1"]]);
const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105";
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "UiButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    href: {},
    to: {},
    external: { type: Boolean, default: false }
  },
  setup(__props) {
    const variantClasses = {
      primary: "bg-brand-text text-brand-bg hover:opacity-80 shadow-md",
      secondary: "bg-brand-surface text-brand-text border border-brand-muted/30 hover:border-brand-muted/50 hover:bg-brand-text/5 shadow-sm"
    };
    const sizeClasses = {
      sm: "px-6 py-3 text-fluid-sm",
      md: "px-8 py-4 text-fluid-base",
      lg: "px-10 py-5 text-fluid-lg"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: __props.to,
          class: [[baseClasses, variantClasses[__props.variant], sizeClasses[__props.size]], "nav-trigger"]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (__props.href) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          target: __props.external ? "_blank" : void 0,
          rel: __props.external ? "noopener noreferrer" : void 0,
          class: [[baseClasses, variantClasses[__props.variant], sizeClasses[__props.size]], "nav-trigger"]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: [baseClasses, variantClasses[__props.variant], sizeClasses[__props.size]]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UiButton.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/projects/portfolio/profilepicture.png");
const PERSONAL_NAME = "Moritz Fieler";
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { handleSmoothScroll } = useSmoothScroll();
    const TECH_STACK = ["VUE", "NUXT", "REACT", "NODE.JS", "TYPESCRIPT", "FIGMA", "IONIC"];
    const PHRASES = {
      en: ["of interaction.", "of digitalization.", "of mobility.", "of experience.", "of tomorrow."],
      de: ["der Interaktion.", "der Digitalisierung.", "der Mobilität.", "des Erlebnisses.", "von morgen."]
    };
    const currentText = ref("");
    ref(0);
    ref(false);
    computed(() => PHRASES[locale.value] ?? PHRASES.en);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroBackground = __nuxt_component_0$2;
      const _component_UiButton = _sfc_main$j;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "top",
        class: "relative flex flex-col items-center justify-center text-center pt-36 pb-32 md:pt-52 md:pb-40 px-6 min-h-[95vh]"
      }, _attrs))} data-v-863bcd08>`);
      _push(ssrRenderComponent(_component_HeroBackground, null, null, _parent));
      _push(`<div class="relative z-10 max-w-4xl mx-auto" data-v-863bcd08><div class="flex justify-center mb-8 reveal reveal-d1" data-v-863bcd08><div class="relative inline-block" data-v-863bcd08><div class="absolute inset-0 rounded-full animate-pulse-slow" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgb(var(--brand-terra) / 0.15) 0%, transparent 70%)", "transform": "scale(1.35)" })}" data-v-863bcd08></div><img${ssrRenderAttr("src", _imports_0)} alt="Moritz Fieler" class="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover" style="${ssrRenderStyle({ "box-shadow": "0 0 0 3px rgb(var(--brand-terra) / 0.25), 0 8px 32px rgba(0,0,0,0.12)" })}" data-v-863bcd08><span class="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 flex h-4 w-4" data-v-863bcd08><span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style="${ssrRenderStyle({ "background-color": "rgb(var(--brand-terra))" })}" data-v-863bcd08></span><span class="relative inline-flex rounded-full h-4 w-4 border-2" style="${ssrRenderStyle({ "background-color": "rgb(var(--brand-terra))", "border-color": "rgb(var(--brand-bg))" })}" data-v-863bcd08></span></span></div></div><span class="eyebrow-text text-brand-terra mb-6 block reveal reveal-d2" data-v-863bcd08>${ssrInterpolate(_ctx.$t("hero.eyebrow"))}</span><h1 class="heading-display mb-8 reveal reveal-d3" data-v-863bcd08>${ssrInterpolate(_ctx.$t("hero.title"))} <br class="hidden md:block" data-v-863bcd08><span class="text-gradient-terra" data-v-863bcd08>${ssrInterpolate(unref(currentText))}<span class="typewriter-cursor" aria-hidden="true" data-v-863bcd08>|</span></span></h1><p class="body-large max-w-2xl mx-auto mb-12 reveal reveal-d4" data-v-863bcd08>${ssrInterpolate(_ctx.$t("hero.description", { name: PERSONAL_NAME }))}</p><div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0 reveal reveal-d5" data-v-863bcd08>`);
      _push(ssrRenderComponent(_component_UiButton, {
        href: "#work",
        variant: "primary",
        onClick: (e) => unref(handleSmoothScroll)(e, "#work")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hero.ctaWork"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hero.ctaWork")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        href: "#contact",
        variant: "secondary",
        onClick: (e) => unref(handleSmoothScroll)(e, "#contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hero.ctaContact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hero.ctaContact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden md:flex absolute z-10 bottom-24 left-0 right-0 justify-center px-4 reveal reveal-d5" data-v-863bcd08><div class="flex items-center gap-3 md:gap-4 bg-brand-text/[0.04] border border-brand-muted/15 rounded-full px-5 py-2.5 backdrop-blur-sm flex-wrap justify-center" data-v-863bcd08><span class="font-bold tracking-[0.20em] uppercase text-brand-terra text-[10px] shrink-0" data-v-863bcd08> POWERED BY </span><span class="h-3 w-px bg-brand-muted/30 shrink-0 hidden sm:block" data-v-863bcd08></span><div class="flex items-center gap-1 flex-wrap justify-center" data-v-863bcd08><!--[-->`);
      ssrRenderList(TECH_STACK, (tech, i) => {
        _push(`<!--[--><span class="font-semibold tracking-[0.12em] uppercase text-brand-muted text-[10px] md:text-[11px] hover:text-brand-terra transition-colors duration-300 cursor-default" data-v-863bcd08>${ssrInterpolate(tech)}</span>`);
        if (i < TECH_STACK.length - 1) {
          _push(`<span class="text-brand-muted/30 text-[10px] mx-1 select-none" data-v-863bcd08>·</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroSection.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-863bcd08"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SectionLabel",
  __ssrInlineRender: true,
  props: {
    number: {},
    category: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 mb-2" }, _attrs))}><span class="w-10 h-[1px] bg-brand-muted/50"></span><span class="section-label">${ssrInterpolate(__props.number)} / ${ssrInterpolate(__props.category)}</span></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SectionLabel.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "UiTag",
  __ssrInlineRender: true,
  props: {
    variant: { default: "neutral" }
  },
  setup(__props) {
    const variantClasses = {
      neutral: "bg-brand-bg text-brand-text border-brand-muted/20",
      terra: "bg-brand-terra/10 text-brand-terra border-brand-terra/30",
      green: "bg-[#EBF2E8] text-[#466840] border-[#B0CCA8]",
      purple: "bg-[#F0EBF2] text-[#7A5870] border-[#C8B0C8]",
      blue: "bg-[#EBF0F8] text-[#3A6088] border-[#B0C8E0]"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [
          "px-4 py-1.5 rounded-full text-fluid-sm font-medium border",
          variantClasses[__props.variant]
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UiTag.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ProjectVisualMockup",
  __ssrInlineRender: true,
  props: {
    imageSrc: {},
    imageAlt: {},
    imageSrc2: {},
    imageAlt2: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-full flex items-center justify-center" }, _attrs))}>`);
      if (!__props.imageSrc2) {
        _push(`<img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.imageAlt)} loading="lazy" class="w-full h-full object-contain p-3 md:p-6 drop-shadow-2xl select-none pointer-events-none">`);
      } else {
        _push(`<!--[--><img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.imageAlt)} loading="lazy" class="w-full h-full object-contain p-4 md:p-8 drop-shadow-xl select-none pointer-events-none"><img${ssrRenderAttr("src", __props.imageSrc2)}${ssrRenderAttr("alt", __props.imageAlt2 || "")} loading="lazy" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[75%] object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.18)] translate-y-4 group-hover:translate-y-0 transition-transform duration-700 select-none pointer-events-none"><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-visuals/ProjectVisualMockup.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ProjectVisualDuoPhones",
  __ssrInlineRender: true,
  props: {
    imageSrc: {},
    imageAlt: {},
    imageSrc2: {},
    imageAlt2: {},
    compact: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-full overflow-hidden" }, _attrs))}>`);
      if (__props.imageSrc2) {
        _push(`<!--[--><img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.imageAlt)} loading="lazy" class="absolute w-auto object-contain select-none pointer-events-none top-1/2 -translate-y-[54%] group-hover:-translate-y-[58%] drop-shadow-2xl transition-transform duration-700" style="${ssrRenderStyle({ height: "82%", zIndex: 1, left: props.compact ? "14%" : "4%" })}"><img${ssrRenderAttr("src", __props.imageSrc2)}${ssrRenderAttr("alt", __props.imageAlt2 || "")} loading="lazy" class="absolute w-auto object-contain select-none pointer-events-none top-1/2 -translate-y-[46%] group-hover:-translate-y-[42%] drop-shadow-[0_12px_40px_rgba(0,0,0,0.20)] transition-transform duration-700 delay-75" style="${ssrRenderStyle({ height: "82%", zIndex: 2, right: props.compact ? "14%" : "4%" })}"><!--]-->`);
      } else {
        _push(`<div class="absolute inset-[3%]"><img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.imageAlt)} loading="lazy" class="w-full h-full object-contain drop-shadow-2xl select-none pointer-events-none"></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-visuals/ProjectVisualDuoPhones.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ProjectVisualHeroBottom",
  __ssrInlineRender: true,
  props: {
    imageSrc: {},
    imageAlt: {},
    imageSrc2: {},
    imageAlt2: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-full" }, _attrs))}><img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.imageAlt)} loading="lazy" class="w-full h-full object-contain p-6 md:p-8 drop-shadow-2xl select-none pointer-events-none">`);
      if (__props.imageSrc2) {
        _push(`<img${ssrRenderAttr("src", __props.imageSrc2)}${ssrRenderAttr("alt", __props.imageAlt2 || "")} loading="lazy" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] md:w-[70%] object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.20)] translate-y-4 group-hover:translate-y-0 transition-transform duration-700 select-none pointer-events-none">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-visuals/ProjectVisualHeroBottom.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ProjectVisualVideo",
  __ssrInlineRender: true,
  props: {
    videoSrc: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-full overflow-hidden" }, _attrs))}><iframe${ssrRenderAttr("src", __props.videoSrc)} class="w-full h-full border-0" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="Project video"></iframe></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-visuals/ProjectVisualVideo.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiIcon = _sfc_main$l;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex items-center justify-center p-8 md:p-12" }, _attrs))}><div class="w-full h-full border border-white/10 rounded-full flex items-center justify-center relative"><div class="w-3/4 h-3/4 border border-brand-terra/30 rounded-full animate-pulse absolute"></div><div class="w-1/2 h-1/2 bg-gradient-to-tr from-brand-terra to-brand-terraDark rounded-full blur-2xl opacity-40"></div>`);
  _push(ssrRenderComponent(_component_UiIcon, {
    name: "Lightning",
    size: "xl",
    class: "text-white z-10 drop-shadow-[0_0_20px_rgba(196,122,58,0.8)]"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-visuals/ProjectVisualCustom.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
function useTranslatedProject(projectRef) {
  const { t, tm, rt } = useI18n();
  const project = computed(() => toValue(projectRef));
  const pick = (key, fallback) => key ? t(key) : fallback ?? "";
  return {
    category: computed(() => pick(project.value?.categoryKey, project.value?.category)),
    title: computed(() => pick(project.value?.titleKey, project.value?.title)),
    description: computed(() => pick(project.value?.descriptionKey, project.value?.description)),
    longDescription: computed(() => pick(project.value?.longDescriptionKey, project.value?.longDescription)),
    imageAlt: computed(() => pick(project.value?.imageAltKey, project.value?.imageAlt)),
    imageAlt2: computed(() => pick(project.value?.imageAlt2Key, project.value?.imageAlt2)),
    tags: computed(() => {
      const key = project.value?.tagsKey;
      if (key) {
        const list = tm(key);
        if (Array.isArray(list)) return list.map((item) => rt(item));
      }
      return project.value?.tags ?? [];
    }),
    features: computed(() => {
      const key = project.value?.featuresKey;
      if (key) {
        const list = tm(key);
        if (Array.isArray(list)) return list;
      }
      return project.value?.features ?? [];
    })
  };
}
function useTranslatedSkill(skillRef) {
  const { t, tm, rt } = useI18n();
  const skill = computed(() => toValue(skillRef));
  return {
    title: computed(() => skill.value.titleKey ? t(skill.value.titleKey) : skill.value.title ?? ""),
    description: computed(
      () => skill.value.descriptionKey ? t(skill.value.descriptionKey) : skill.value.description ?? ""
    ),
    tags: computed(() => {
      const key = skill.value.tagsKey;
      if (key) {
        const labels = tm(key);
        if (Array.isArray(labels)) {
          return labels.map((label, i) => ({
            label: rt(label),
            variant: skill.value.tags?.[i]?.variant ?? "neutral"
          }));
        }
      }
      return skill.value.tags ?? [];
    })
  };
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {},
    reversed: { type: Boolean }
  },
  emits: ["select"],
  setup(__props) {
    const tagVariants = {
      "Web Design": "neutral",
      "Development": "neutral",
      "Booking System": "neutral",
      "Entwicklung": "neutral",
      "Buchungssystem": "neutral",
      "UX Design": "green",
      "Gamification": "green",
      "Persuasive Design": "neutral",
      "Vue.js & Ionic": "purple",
      "MongoDB": "neutral",
      "UX System": "neutral",
      "UX Research": "terra",
      "Multisensory Design": "terra",
      "Multisensorisches Design": "terra",
      "Haptics": "neutral",
      "Haptik": "neutral",
      "UI Concept": "blue",
      "UI Konzept": "blue",
      "IoT Ecosystem": "blue",
      "Interaction Design": "neutral"
    };
    const getTagVariant = (tag) => tagVariants[tag] ?? "neutral";
    const props = __props;
    const { category, title, description, tags, imageAlt, imageAlt2 } = useTranslatedProject(() => props.project);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionLabel = _sfc_main$h;
      const _component_UiTag = _sfc_main$g;
      const _component_ProjectVisualMockup = _sfc_main$f;
      const _component_ProjectVisualDuoPhones = _sfc_main$e;
      const _component_ProjectVisualHeroBottom = _sfc_main$d;
      const _component_ProjectVisualVideo = _sfc_main$c;
      const _component_ProjectVisualCustom = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-2 gap-10 lg:gap-20 items-center" }, _attrs))}><div class="${ssrRenderClass([__props.reversed ? "order-1 lg:order-2" : "order-2 lg:order-1", "space-y-5 md:space-y-6 cursor-pointer"])}">`);
      _push(ssrRenderComponent(_component_SectionLabel, {
        number: __props.project.num,
        category: unref(category)
      }, null, _parent));
      _push(`<h3 class="heading-project">${ssrInterpolate(unref(title))}</h3><p class="body-medium">${ssrInterpolate(unref(description))}</p><div class="flex flex-wrap gap-2 pt-2 md:pt-4"><!--[-->`);
      ssrRenderList(unref(tags), (tag) => {
        _push(ssrRenderComponent(_component_UiTag, {
          key: tag,
          variant: getTagVariant(tag)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([[
        __props.reversed ? "lg:order-1" : "lg:order-2",
        __props.project.visual !== "video" ? "cursor-pointer" : ""
      ], "relative group w-full order-1"])}"><div class="${ssrRenderClass([__props.project.fallbackClass ? "" : "bg-brand-terra", "project-glow"])}"></div><div class="${ssrRenderClass([__props.project.fallbackClass, "relative aspect-square lg:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-soft group-hover:shadow-hover transition-all duration-500 transform group-hover:-translate-y-2"])}">`);
      if (__props.project.visual === "mockup") {
        _push(ssrRenderComponent(_component_ProjectVisualMockup, {
          "image-src": __props.project.imageSrc,
          "image-alt": unref(imageAlt),
          "image-src2": __props.project.imageSrc2,
          "image-alt2": unref(imageAlt2)
        }, null, _parent));
      } else if (__props.project.visual === "duo-phones") {
        _push(ssrRenderComponent(_component_ProjectVisualDuoPhones, {
          "image-src": __props.project.imageSrc,
          "image-alt": unref(imageAlt),
          "image-src2": __props.project.imageSrc2,
          "image-alt2": unref(imageAlt2),
          compact: __props.project.id === "emobility"
        }, null, _parent));
      } else if (__props.project.visual === "hero-bottom") {
        _push(ssrRenderComponent(_component_ProjectVisualHeroBottom, {
          "image-src": __props.project.imageSrc,
          "image-alt": unref(imageAlt),
          "image-src2": __props.project.imageSrc2,
          "image-alt2": unref(imageAlt2)
        }, null, _parent));
      } else if (__props.project.visual === "video" && __props.project.videoSrc) {
        _push(ssrRenderComponent(_component_ProjectVisualVideo, {
          "video-src": __props.project.videoSrc
        }, null, _parent));
      } else if (__props.project.visual === "custom") {
        _push(ssrRenderComponent(_component_ProjectVisualCustom, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ProjectCard.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DrawerHeader",
  __ssrInlineRender: true,
  props: {
    subtitle: {}
  },
  emits: ["close", "prev", "next"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$l;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "drawer-header" }, _attrs))} data-v-94294ea6><div class="flex items-center gap-4" data-v-94294ea6><button class="drawer-pill-btn"${ssrRenderAttr("aria-label", _ctx.$t("drawer.close"))} data-v-94294ea6>`);
      _push(ssrRenderComponent(_component_UiIcon, {
        name: "X",
        size: "md"
      }, null, _parent));
      _push(`</button><span class="drawer-label" data-v-94294ea6>${ssrInterpolate(__props.subtitle)}</span></div><nav class="flex items-center gap-2" data-v-94294ea6><button class="drawer-pill-btn"${ssrRenderAttr("aria-label", _ctx.$t("drawer.prevProject"))} data-v-94294ea6>`);
      _push(ssrRenderComponent(_component_UiIcon, {
        name: "ChevronLeft",
        size: "md"
      }, null, _parent));
      _push(`</button><button class="drawer-pill-btn"${ssrRenderAttr("aria-label", _ctx.$t("drawer.nextProject"))} data-v-94294ea6>`);
      _push(ssrRenderComponent(_component_UiIcon, {
        name: "ChevronRight",
        size: "md"
      }, null, _parent));
      _push(`</button></nav></header>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/DrawerHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-94294ea6"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DrawerGallery",
  __ssrInlineRender: true,
  props: {
    gallery: {},
    title: {},
    accentClass: {},
    videoSrc: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const activeIndex = ref(0);
    const isFullscreen = ref(false);
    const captionVisible = ref(false);
    const total = computed(() => props.gallery?.length ?? 0);
    const hasMany = computed(() => total.value > 1);
    const hasContent = computed(() => !!props.videoSrc || total.value > 0);
    const activeItem = computed(() => props.gallery?.[activeIndex.value]);
    const activeCaption = computed(() => {
      const key = activeItem.value?.captionKey;
      return key ? t(key) : "";
    });
    watch(
      () => props.gallery,
      () => {
        activeIndex.value = 0;
        captionVisible.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$l;
      if (unref(hasContent)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-24c97c39>`);
        if (__props.videoSrc) {
          _push(`<div class="${ssrRenderClass([__props.accentClass || "stage-default", "video-stage"])}" data-v-24c97c39><iframe${ssrRenderAttr("src", __props.videoSrc)} class="video-frame" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="Project video" data-v-24c97c39></iframe></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(total) > 0) {
          _push(`<div class="${ssrRenderClass({ "mt-8": __props.videoSrc })}" data-v-24c97c39><div class="${ssrRenderClass([__props.accentClass || "stage-default", "stage group"])}" data-v-24c97c39><img${ssrRenderAttr("src", unref(activeItem).src)}${ssrRenderAttr("alt", `${__props.title} — ${unref(activeIndex) + 1} / ${unref(total)}`)} class="stage-image" loading="lazy" data-v-24c97c39>`);
          if (unref(activeCaption) && unref(captionVisible)) {
            _push(`<div class="caption-overlay" data-v-24c97c39><p class="caption-text" data-v-24c97c39>${ssrInterpolate(unref(activeCaption))}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(hasMany)) {
            _push(`<button class="overlay-nav-btn stage-nav stage-nav-prev"${ssrRenderAttr("aria-label", _ctx.$t("drawer.prevImage"))} data-v-24c97c39>`);
            _push(ssrRenderComponent(_component_UiIcon, {
              name: "ChevronLeft",
              size: "lg"
            }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(hasMany)) {
            _push(`<button class="overlay-nav-btn stage-nav stage-nav-next"${ssrRenderAttr("aria-label", _ctx.$t("drawer.nextImage"))} data-v-24c97c39>`);
            _push(ssrRenderComponent(_component_UiIcon, {
              name: "ChevronRight",
              size: "lg"
            }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="stage-meta" data-v-24c97c39>`);
          if (unref(hasMany)) {
            _push(`<span class="stage-counter" data-v-24c97c39>${ssrInterpolate(String(unref(activeIndex) + 1).padStart(2, "0"))} <span class="opacity-40" data-v-24c97c39>/</span> ${ssrInterpolate(String(unref(total)).padStart(2, "0"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="overlay-dark-btn w-9 h-9"${ssrRenderAttr("aria-label", _ctx.$t("drawer.openFullscreen"))} data-v-24c97c39>`);
          _push(ssrRenderComponent(_component_UiIcon, {
            name: "Expand",
            size: "sm"
          }, null, _parent));
          _push(`</button></div></div>`);
          if (unref(hasMany)) {
            _push(`<div class="thumb-row" data-v-24c97c39><!--[-->`);
            ssrRenderList(__props.gallery, (item, index) => {
              _push(`<button class="${ssrRenderClass([{ "thumb-active": index === unref(activeIndex) }, "thumb"])}"${ssrRenderAttr("aria-label", _ctx.$t("drawer.showImage", { n: index + 1 }))} data-v-24c97c39><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", `${__props.title} thumbnail ${index + 1}`)} loading="lazy" data-v-24c97c39></button>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        ssrRenderTeleport(_push, (_push2) => {
          if (unref(isFullscreen) && __props.gallery) {
            _push2(`<div class="lightbox" role="dialog" aria-modal="true" data-v-24c97c39><button class="lightbox-btn lb-close w-11 h-11"${ssrRenderAttr("aria-label", _ctx.$t("drawer.close"))} data-v-24c97c39>`);
            _push2(ssrRenderComponent(_component_UiIcon, {
              name: "X",
              size: "md"
            }, null, _parent));
            _push2(`</button>`);
            if (unref(hasMany)) {
              _push2(`<button class="lightbox-btn lb-nav lb-nav-prev w-12 h-12 md:w-14 md:h-14"${ssrRenderAttr("aria-label", _ctx.$t("drawer.prevImage"))} data-v-24c97c39>`);
              _push2(ssrRenderComponent(_component_UiIcon, {
                name: "ChevronLeft",
                size: "lg"
              }, null, _parent));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<img${ssrRenderAttr("src", __props.gallery[unref(activeIndex)].src)}${ssrRenderAttr("alt", `${__props.title} — ${unref(activeIndex) + 1}`)} class="lb-image" data-v-24c97c39>`);
            if (unref(hasMany)) {
              _push2(`<button class="lightbox-btn lb-nav lb-nav-next w-12 h-12 md:w-14 md:h-14"${ssrRenderAttr("aria-label", _ctx.$t("drawer.nextImage"))} data-v-24c97c39>`);
              _push2(ssrRenderComponent(_component_UiIcon, {
                name: "ChevronRight",
                size: "lg"
              }, null, _parent));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(hasMany)) {
              _push2(`<div class="lb-counter" data-v-24c97c39>${ssrInterpolate(unref(activeIndex) + 1)} / ${ssrInterpolate(unref(total))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
        }, "body", false, _parent);
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "empty-state" }, _attrs))} data-v-24c97c39>`);
        _push(ssrRenderComponent(_component_UiIcon, {
          name: "Photo",
          size: "xl",
          class: "text-brand-muted mb-2"
        }, null, _parent));
        _push(`<p class="text-sm text-brand-muted" data-v-24c97c39>${ssrInterpolate(_ctx.$t("drawer.galleryEmpty"))}</p></div>`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/DrawerGallery.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-24c97c39"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DrawerFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const label = (feature, key) => {
      const keyField = key === "title" ? feature.titleKey : feature.descriptionKey;
      if (keyField) return t(keyField);
      return key === "title" ? feature.title ?? "" : feature.description ?? "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$l;
      if (__props.features.length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))} data-v-5acd6924><!--[-->`);
        ssrRenderList(__props.features, (feature, index) => {
          _push(`<li class="feature-card" data-v-5acd6924><div class="feature-icon" data-v-5acd6924>`);
          _push(ssrRenderComponent(_component_UiIcon, {
            name: feature.icon,
            size: "lg"
          }, null, _parent));
          _push(`</div><div data-v-5acd6924><h5 class="feature-title" data-v-5acd6924>${ssrInterpolate(label(feature, "title"))}</h5><p class="feature-desc" data-v-5acd6924>${ssrInterpolate(label(feature, "description"))}</p></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "empty-state" }, _attrs))} data-v-5acd6924>`);
        _push(ssrRenderComponent(_component_UiIcon, {
          name: "Star",
          size: "xl",
          class: "text-brand-muted mb-2"
        }, null, _parent));
        _push(`<p class="text-sm text-brand-muted" data-v-5acd6924>${ssrInterpolate(_ctx.$t("drawer.featuresEmpty"))}</p></div>`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/DrawerFeatures.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5acd6924"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DrawerContent",
  __ssrInlineRender: true,
  props: {
    project: {},
    isSwitching: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { category, title, description, longDescription, features } = useTranslatedProject(() => props.project);
    const isDescExpanded = ref(false);
    const hasLongDesc = computed(() => longDescription.value.length > 0);
    const isExpandable = computed(() => hasLongDesc.value || description.value.length > 180);
    const parsedSections = computed(() => {
      if (!longDescription.value) return [];
      const sections = [];
      const text = longDescription.value.replace(/\\n/g, "\n");
      const lines = text.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith("- ") || trimmed.startsWith("• ") || trimmed.startsWith("— ") || trimmed.startsWith("– ")) {
          sections.push({
            title: "",
            content: trimmed.substring(2),
            type: "bullet"
          });
        } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          sections.push({
            title: trimmed.replace(/\*\*/g, ""),
            content: "",
            type: "heading"
          });
        } else if (/^\d+\.\s/.test(trimmed)) {
          const match = trimmed.match(/^(\d+)\.\s+(.+)$/);
          if (match) {
            sections.push({
              title: match[2],
              content: "",
              type: "heading"
            });
          }
        } else {
          const lastSection = sections[sections.length - 1];
          if (lastSection?.type === "bullet") {
            sections.push({
              title: "",
              content: trimmed,
              type: "bullet"
            });
          } else {
            sections.push({
              title: "",
              content: trimmed,
              type: "text"
            });
          }
        }
      }
      return sections;
    });
    const formattedContent = (content) => {
      let formatted = content.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      formatted = formatted.replace(
        /(#[0-9A-Fa-f]{6})/g,
        '<span class="color-swatch-wrapper"><span class="color-swatch" style="background-color: $1;"></span><code class="color-code">$1</code></span>'
      );
      return formatted;
    };
    watch(() => props.project.id, () => {
      isDescExpanded.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$l;
      const _component_DrawerGallery = __nuxt_component_1$2;
      const _component_DrawerFeatures = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["drawer-content", __props.isSwitching ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"]
      }, _attrs))} data-v-e4885244><header class="project-header" data-v-e4885244><span class="project-category" data-v-e4885244>${ssrInterpolate(unref(category))}</span><h3 class="project-title" data-v-e4885244>${ssrInterpolate(unref(title))}</h3><p class="${ssrRenderClass([{ "desc-clamp": unref(isExpandable) && !unref(isDescExpanded) }, "project-description"])}" data-v-e4885244>${ssrInterpolate(unref(description))}</p>`);
      if (unref(hasLongDesc) && unref(isDescExpanded)) {
        _push(`<div class="case-study-content" data-v-e4885244><!--[-->`);
        ssrRenderList(unref(parsedSections), (section, index) => {
          _push(`<!--[-->`);
          if (section.type === "heading") {
            _push(`<h4 class="case-study-heading" data-v-e4885244>${ssrInterpolate(section.title)}</h4>`);
          } else if (section.type === "bullet") {
            _push(`<div class="case-study-bullet" data-v-e4885244><span class="bullet-marker" data-v-e4885244>—</span><span data-v-e4885244>${formattedContent(section.content) ?? ""}</span></div>`);
          } else {
            _push(`<p class="case-study-paragraph" data-v-e4885244>${formattedContent(section.content) ?? ""}</p>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="action-row" data-v-e4885244>`);
      if (unref(isExpandable)) {
        _push(`<button class="desc-toggle" data-v-e4885244>${ssrInterpolate(unref(isDescExpanded) ? _ctx.$t("drawer.readLess") : _ctx.$t("drawer.readMore"))} `);
        _push(ssrRenderComponent(_component_UiIcon, {
          name: "ChevronDown",
          size: "sm",
          class: ["transition-transform", { "rotate-180": unref(isDescExpanded) }]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.pdfUrl) {
        _push(`<a${ssrRenderAttr("href", __props.project.pdfUrl)} target="_blank" rel="noopener noreferrer" class="pdf-link" data-v-e4885244>`);
        _push(ssrRenderComponent(_component_UiIcon, {
          name: "DocumentArrowDown",
          size: "sm"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("drawer.viewPdf"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><section class="mb-12 md:mb-16" data-v-e4885244><div class="section-head" data-v-e4885244><h4 class="section-title" data-v-e4885244>${ssrInterpolate(_ctx.$t("drawer.gallery"))}</h4><span class="section-rule" data-v-e4885244></span></div>`);
      _push(ssrRenderComponent(_component_DrawerGallery, {
        gallery: __props.project.gallery,
        title: unref(title),
        "accent-class": __props.project.fallbackClass,
        "video-src": __props.project.videoSrc
      }, null, _parent));
      _push(`</section><section data-v-e4885244><div class="section-head" data-v-e4885244><h4 class="section-title" data-v-e4885244>${ssrInterpolate(_ctx.$t("drawer.features"))}</h4><span class="section-rule" data-v-e4885244></span></div>`);
      _push(ssrRenderComponent(_component_DrawerFeatures, { features: unref(features) }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/DrawerContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e4885244"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DrawerBottomNav",
  __ssrInlineRender: true,
  emits: ["prev", "next"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bottom-nav-wrapper" }, _attrs))} data-v-5dd557b6><nav class="bottom-nav" data-v-5dd557b6><button class="nav-btn nav-btn-muted" data-v-5dd557b6>`);
      _push(ssrRenderComponent(_component_UiIcon, {
        name: "ArrowLeft",
        size: "sm"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("drawer.prev"))}</button><span class="nav-divider" data-v-5dd557b6></span><button class="nav-btn nav-btn-strong" data-v-5dd557b6>${ssrInterpolate(_ctx.$t("drawer.next"))} `);
      _push(ssrRenderComponent(_component_UiIcon, {
        name: "ArrowRight",
        size: "sm"
      }, null, _parent));
      _push(`</button></nav></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/DrawerBottomNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5dd557b6"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProjectDrawer",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    project: {},
    isSwitching: { type: Boolean }
  },
  emits: ["close", "next", "prev"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DrawerHeader = __nuxt_component_0;
      const _component_DrawerContent = __nuxt_component_1$1;
      const _component_DrawerBottomNav = __nuxt_component_2;
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.isOpen && __props.project) {
          _push2(`<div class="drawer-overlay" role="dialog" aria-modal="true" data-v-1bcfbc83><div class="drawer-backdrop" aria-hidden="true" data-v-1bcfbc83></div><template><div class="drawer-panel" data-v-1bcfbc83>`);
          _push2(ssrRenderComponent(_component_DrawerHeader, {
            subtitle: _ctx.$t("drawer.subtitle"),
            onClose: ($event) => _ctx.$emit("close"),
            onPrev: ($event) => _ctx.$emit("prev"),
            onNext: ($event) => _ctx.$emit("next")
          }, null, _parent));
          _push2(`<div class="drawer-scroll-area" data-lenis-prevent data-v-1bcfbc83>`);
          _push2(ssrRenderComponent(_component_DrawerContent, {
            project: __props.project,
            "is-switching": __props.isSwitching ?? false
          }, null, _parent));
          _push2(`</div>`);
          _push2(ssrRenderComponent(_component_DrawerBottomNav, {
            onPrev: ($event) => _ctx.$emit("prev"),
            onNext: ($event) => _ctx.$emit("next")
          }, null, _parent));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectDrawer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1bcfbc83"]]);
const projects = [
  {
    id: "paquita-pilates",
    num: "01",
    categoryKey: "projects.paquita-pilates.category",
    titleKey: "projects.paquita-pilates.title",
    descriptionKey: "projects.paquita-pilates.description",
    longDescriptionKey: "projects.paquita-pilates.longDescription",
    tagsKey: "projects.paquita-pilates.tags",
    visual: "mockup",
    imageSrc: "/images/projects/portfolio/paquita/paquita-mobile.png",
    imageAltKey: "projects.paquita-pilates.imageAlt",
    gallery: [
      { src: "/images/projects/portfolio/paquita/paquita-mobile.png", captionKey: "projects.paquita-pilates.gallery.1" },
      { src: "/images/projects/portfolio/paquita/paquita-mac.png", captionKey: "projects.paquita-pilates.gallery.2" }
    ],
    reversed: false,
    fallbackClass: "fallback-paquita",
    features: [
      { titleKey: "projects.paquita-pilates.features.1.title", icon: "CalendarDays", descriptionKey: "projects.paquita-pilates.features.1.desc" },
      { titleKey: "projects.paquita-pilates.features.2.title", icon: "DevicePhoneMobile", descriptionKey: "projects.paquita-pilates.features.2.desc" },
      { titleKey: "projects.paquita-pilates.features.3.title", icon: "Swatch", descriptionKey: "projects.paquita-pilates.features.3.desc" },
      { titleKey: "projects.paquita-pilates.features.4.title", icon: "ArrowsRightLeft", descriptionKey: "projects.paquita-pilates.features.4.desc" }
    ]
  },
  {
    id: "hiqer",
    num: "02",
    categoryKey: "projects.hiqer.category",
    titleKey: "projects.hiqer.title",
    descriptionKey: "projects.hiqer.description",
    longDescriptionKey: "projects.hiqer.longDescription",
    tagsKey: "projects.hiqer.tags",
    visual: "hero-bottom",
    imageSrc: "/images/projects/portfolio/hiqer/hiqer-three.png",
    imageAltKey: "projects.hiqer.imageAlt",
    imageSrc2: "/images/projects/portfolio/hiqer/hiqer-watch.png",
    imageAlt2Key: "projects.hiqer.imageAlt2",
    gallery: [
      { src: "/images/projects/portfolio/hiqer/hiqer-three.png", captionKey: "projects.hiqer.gallery.1" },
      { src: "/images/projects/portfolio/hiqer/hiqer-quests.png", captionKey: "projects.hiqer.gallery.2" },
      { src: "/images/projects/portfolio/hiqer/hiqer-ranking.png", captionKey: "projects.hiqer.gallery.3" },
      { src: "/images/projects/portfolio/hiqer/hiqer-watch.png", captionKey: "projects.hiqer.gallery.4" }
    ],
    reversed: true,
    fallbackClass: "fallback-hiqer",
    features: [
      { titleKey: "projects.hiqer.features.1.title", icon: "Map", descriptionKey: "projects.hiqer.features.1.desc" },
      { titleKey: "projects.hiqer.features.2.title", icon: "Trophy", descriptionKey: "projects.hiqer.features.2.desc" },
      { titleKey: "projects.hiqer.features.3.title", icon: "Watch", descriptionKey: "projects.hiqer.features.3.desc" },
      { titleKey: "projects.hiqer.features.4.title", icon: "Bolt", descriptionKey: "projects.hiqer.features.4.desc" }
    ]
  },
  {
    id: "kischde",
    num: "03",
    categoryKey: "projects.kischde.category",
    titleKey: "projects.kischde.title",
    descriptionKey: "projects.kischde.description",
    longDescriptionKey: "projects.kischde.longDescription",
    tagsKey: "projects.kischde.tags",
    visual: "duo-phones",
    imageSrc: "/images/projects/portfolio/kischde/kischde-home.png",
    imageAltKey: "projects.kischde.imageAlt",
    imageSrc2: "/images/projects/portfolio/kischde/kischde-profile.png",
    imageAlt2Key: "projects.kischde.imageAlt2",
    gallery: [
      { src: "/images/projects/portfolio/kischde/kischde-home.png", captionKey: "projects.kischde.gallery.1" },
      { src: "/images/projects/portfolio/kischde/kischde-profile.png", captionKey: "projects.kischde.gallery.2" }
    ],
    reversed: false,
    fallbackClass: "fallback-kischde",
    features: [
      { titleKey: "projects.kischde.features.1.title", icon: "Users", descriptionKey: "projects.kischde.features.1.desc" },
      { titleKey: "projects.kischde.features.2.title", icon: "ArrowPath", descriptionKey: "projects.kischde.features.2.desc" },
      { titleKey: "projects.kischde.features.3.title", icon: "DevicePhoneMobile", descriptionKey: "projects.kischde.features.3.desc" },
      { titleKey: "projects.kischde.features.4.title", icon: "ShieldCheck", descriptionKey: "projects.kischde.features.4.desc" }
    ]
  },
  {
    id: "beast",
    num: "04",
    categoryKey: "projects.beast.category",
    titleKey: "projects.beast.title",
    descriptionKey: "projects.beast.description",
    longDescriptionKey: "projects.beast.longDescription",
    tagsKey: "projects.beast.tags",
    visual: "video",
    imageSrc: "",
    imageAltKey: "projects.beast.imageAlt",
    videoSrc: "https://drive.google.com/file/d/1tI3G2rP3guSLxWXkb_nM_HUENAI1Btly/preview",
    pdfUrl: "/pdfs/beast-final-presentation.pdf",
    reversed: true,
    fallbackClass: "fallback-beast",
    features: [
      { titleKey: "projects.beast.features.1.title", icon: "Bolt", descriptionKey: "projects.beast.features.1.desc" },
      { titleKey: "projects.beast.features.2.title", icon: "SpeakerWave", descriptionKey: "projects.beast.features.2.desc" },
      { titleKey: "projects.beast.features.3.title", icon: "Battery100", descriptionKey: "projects.beast.features.3.desc" },
      { titleKey: "projects.beast.features.4.title", icon: "Fire", descriptionKey: "projects.beast.features.4.desc" }
    ]
  },
  {
    id: "emobility",
    num: "05",
    categoryKey: "projects.emobility.category",
    titleKey: "projects.emobility.title",
    descriptionKey: "projects.emobility.description",
    longDescriptionKey: "projects.emobility.longDescription",
    tagsKey: "projects.emobility.tags",
    visual: "duo-phones",
    imageSrc: "/images/projects/portfolio/emobility/main.png",
    imageAltKey: "projects.emobility.imageAlt",
    imageSrc2: "/images/projects/portfolio/emobility/watchui.png",
    imageAlt2Key: "projects.emobility.imageAlt2",
    gallery: [
      { src: "/images/projects/portfolio/emobility/main.png", captionKey: "projects.emobility.gallery.1" },
      { src: "/images/projects/portfolio/emobility/mba_dynamicisland.gif", captionKey: "projects.emobility.gallery.2" },
      { src: "/images/projects/portfolio/emobility/dashboard.png", captionKey: "projects.emobility.gallery.3" },
      { src: "/images/projects/portfolio/emobility/charging.png", captionKey: "projects.emobility.gallery.4" },
      { src: "/images/projects/portfolio/emobility/menu.png", captionKey: "projects.emobility.gallery.5" }
    ],
    reversed: false,
    fallbackClass: "fallback-thesis",
    features: [
      { titleKey: "projects.emobility.features.1.title", icon: "Wifi", descriptionKey: "projects.emobility.features.1.desc" },
      { titleKey: "projects.emobility.features.2.title", icon: "ChartBar", descriptionKey: "projects.emobility.features.2.desc" },
      { titleKey: "projects.emobility.features.3.title", icon: "Squares2x2", descriptionKey: "projects.emobility.features.3.desc" },
      { titleKey: "projects.emobility.features.4.title", icon: "LightBulb", descriptionKey: "projects.emobility.features.4.desc" }
    ]
  }
];
function useProjectDrawer(projects2) {
  const isOpen = ref(false);
  const currentProject = ref(null);
  const isSwitching = ref(false);
  useLenis();
  const lockScroll = () => {
    const scrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      (void 0).body.style.paddingRight = `${scrollbarWidth}px`;
    }
    (void 0).body.style.overflow = "hidden";
  };
  const unlockScroll = () => {
    (void 0).body.style.overflow = "";
    (void 0).body.style.paddingRight = "";
  };
  const open = (project) => {
    currentProject.value = project;
    isOpen.value = true;
    lockScroll();
  };
  const close = () => {
    isOpen.value = false;
    unlockScroll();
    setTimeout(() => {
      currentProject.value = null;
    }, 400);
  };
  const switchProject = (direction) => {
    if (!currentProject.value || !projects2.length) return;
    isSwitching.value = true;
    setTimeout(() => {
      const currentIndex = projects2.findIndex((p) => p.id === currentProject.value?.id);
      const delta = direction === "next" ? 1 : -1;
      const newIndex = (currentIndex + delta + projects2.length) % projects2.length;
      currentProject.value = projects2[newIndex];
      isSwitching.value = false;
      (void 0).querySelector(".drawer-scroll-area")?.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };
  const next = () => switchProject("next");
  const prev = () => switchProject("prev");
  return {
    isOpen: readonly(isOpen),
    currentProject,
    isSwitching: readonly(isSwitching),
    open,
    close,
    next,
    prev
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WorkSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, currentProject, isSwitching, open, close, next, prev } = useProjectDrawer(projects);
    const handleSelect = (project) => open(project);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = _sfc_main$a;
      const _component_ProjectDrawer = __nuxt_component_1;
      _push(`<!--[--><section id="work" class="py-20 md:py-32 px-4 md:px-8 bg-brand-surface rounded-[2.5rem] md:rounded-[4rem] shadow-soft mx-3 md:mx-6 mb-8 relative z-10"><div class="max-w-7xl mx-auto"><div class="text-center mb-16 md:mb-28 reveal"><h2 class="heading-section">${ssrInterpolate(_ctx.$t("work.title"))}</h2><p class="body-small mt-4">${ssrInterpolate(_ctx.$t("work.subtitle"))}</p></div><!--[-->`);
      ssrRenderList(unref(projects), (project, index) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: project.id,
          project,
          reversed: index % 2 !== 0,
          class: ["reveal", { "mb-28 md:mb-40": index < unref(projects).length - 1 }],
          onSelect: handleSelect
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_ProjectDrawer, {
        "is-open": unref(isOpen),
        project: unref(currentProject),
        "is-switching": unref(isSwitching),
        onClose: unref(close),
        onNext: unref(next),
        onPrev: unref(prev)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/WorkSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SkillCard",
  __ssrInlineRender: true,
  props: {
    skill: {}
  },
  setup(__props) {
    const props = __props;
    const { title, description, tags } = useTranslatedSkill(() => props.skill);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiIcon = _sfc_main$l;
      const _component_UiTag = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-brand-surface p-8 md:p-10 rounded-[2rem] shadow-soft border border-brand-muted/15 hover:shadow-hover transition-shadow duration-300" }, _attrs))}><div class="w-12 h-12 md:w-14 md:h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-text mb-6 border border-brand-muted/20">`);
      _push(ssrRenderComponent(_component_UiIcon, {
        name: __props.skill.icon,
        size: "xl"
      }, null, _parent));
      _push(`</div><h4 class="heading-card mb-3">${ssrInterpolate(unref(title))}</h4><p class="body-small mb-8">${ssrInterpolate(unref(description))}</p><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(tags), (tag) => {
        _push(ssrRenderComponent(_component_UiTag, {
          key: tag.label,
          variant: tag.variant
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/SkillCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const skills = [
  {
    id: "ux-design",
    icon: "PenNib",
    titleKey: "skills.ux-design.title",
    descriptionKey: "skills.ux-design.description",
    tagsKey: "skills.ux-design.tags"
  },
  {
    id: "frontend",
    icon: "Code",
    titleKey: "skills.frontend.title",
    descriptionKey: "skills.frontend.description",
    tagsKey: "skills.frontend.tags"
  },
  {
    id: "backend",
    icon: "Database",
    titleKey: "skills.backend.title",
    descriptionKey: "skills.backend.description",
    tagsKey: "skills.backend.tags"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkillCard = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "py-20 md:py-32 px-6 max-w-7xl mx-auto reveal"
      }, _attrs))}><div class="text-center mb-12 md:mb-20"><h2 class="heading-section">${ssrInterpolate(_ctx.$t("skills.title"))}</h2><p class="body-medium mt-4">${ssrInterpolate(_ctx.$t("skills.subtitle"))}</p></div><div class="grid md:grid-cols-3 gap-6 md:gap-8"><!--[-->`);
      ssrRenderList(unref(skills), (skill) => {
        _push(ssrRenderComponent(_component_SkillCard, {
          key: skill.id,
          skill
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SkillsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const config = useRuntimeConfig();
    const siteUrl = config.public.siteUrl;
    const isDE = computed(() => locale.value === "de");
    const pageTitle = computed(
      () => isDE.value ? "Moritz Fieler – UX Designer & Frontend Entwickler Stuttgart" : "Moritz Fieler – UX Designer & Frontend Developer Stuttgart"
    );
    const pageDescription = computed(
      () => isDE.value ? "Freiberuflicher UX-Stratege und Frontend-Entwickler aus Stuttgart. Von der Nutzerforschung bis zur fertigen Lösung — modulare, nutzerzentrierte Digital­produkte mit Vue.js, Nuxt und Figma." : "Freelance UX Strategist and Frontend Developer based in Stuttgart, Germany. From research to production — building modular, user-centred digital products with Vue.js, Nuxt and Figma."
    );
    const canonicalUrl = computed(
      () => isDE.value ? siteUrl : `${siteUrl}/en`
    );
    const jsonLd = computed(() => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Moritz Fieler",
      url: siteUrl,
      email: "moritzfieler@icloud.com",
      telephone: "+4915168456178",
      jobTitle: isDE.value ? "UX-Stratege & Frontend-Entwickler" : "UX Strategist & Frontend Developer",
      description: pageDescription.value,
      image: `${siteUrl}/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stuttgart",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE"
      },
      knowsAbout: [
        "UX Design",
        "User Experience",
        "UX Strategy",
        "UX Research",
        "Frontend Development",
        "Vue.js",
        "Nuxt.js",
        "React",
        "TypeScript",
        "Figma",
        "Ionic Framework",
        "Interaction Design",
        "Information Architecture",
        "Usability Testing",
        "Persuasive Design"
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: isDE.value ? "UX-Designer & Frontend-Entwickler" : "UX Designer & Frontend Developer",
        occupationLocation: {
          "@type": "City",
          name: "Stuttgart"
        },
        skills: "UX Design, UX Research, Vue.js, Nuxt.js, TypeScript, Figma, Ionic"
      }
    }));
    useHead({
      title: pageTitle,
      meta: [
        { name: "description", content: pageDescription },
        {
          name: "keywords",
          content: isDE.value ? "UX Designer Stuttgart, Frontend Entwickler Stuttgart, UX Stratege, Freelance UX Designer Deutschland, Vue.js Entwickler, Nuxt Entwickler, Figma, Nutzerzentriertes Design, Digitale Produkte" : "UX Designer Stuttgart, Frontend Developer Stuttgart, UX Strategist Germany, Freelance UX Designer, Vue.js Developer, Nuxt Developer, Figma, User-centred Design, Digital Products"
        },
        { name: "author", content: "Moritz Fieler" },
        { name: "geo.region", content: "DE-BW" },
        { name: "geo.placename", content: "Stuttgart" },
        // Open Graph
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: isDE.value ? "de_DE" : "en_US" },
        { property: "og:locale:alternate", content: isDE.value ? "en_US" : "de_DE" },
        { property: "og:site_name", content: "Mindcoded by Mo." },
        // Twitter / X
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: pageDescription }
      ],
      link: [
        { rel: "canonical", href: canonicalUrl },
        { rel: "alternate", hreflang: "de", href: siteUrl },
        { rel: "alternate", hreflang: "en", href: `${siteUrl}/en` },
        { rel: "alternate", hreflang: "x-default", href: siteUrl }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: computed(() => JSON.stringify(jsonLd.value))
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0$1;
      const _component_WorkSection = _sfc_main$3;
      const _component_SkillsSection = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_WorkSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SkillsSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DNNjevMt.js.map
