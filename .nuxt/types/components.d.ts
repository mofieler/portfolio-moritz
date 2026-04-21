
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  ProjectDrawer: typeof import("../../components/ProjectDrawer.vue")['default']
  ContactCard: typeof import("../../components/cards/ContactCard.vue")['default']
  ProjectCard: typeof import("../../components/cards/ProjectCard.vue")['default']
  SkillCard: typeof import("../../components/cards/SkillCard.vue")['default']
  DrawerBottomNav: typeof import("../../components/drawer/DrawerBottomNav.vue")['default']
  DrawerContent: typeof import("../../components/drawer/DrawerContent.vue")['default']
  DrawerFeatures: typeof import("../../components/drawer/DrawerFeatures.vue")['default']
  DrawerGallery: typeof import("../../components/drawer/DrawerGallery.vue")['default']
  DrawerHeader: typeof import("../../components/drawer/DrawerHeader.vue")['default']
  TheFloatingNav: typeof import("../../components/layout/TheFloatingNav.vue")['default']
  TheFooter: typeof import("../../components/layout/TheFooter.vue")['default']
  TheHeader: typeof import("../../components/layout/TheHeader.vue")['default']
  ProjectVisualCustom: typeof import("../../components/project-visuals/ProjectVisualCustom.vue")['default']
  ProjectVisualDuoPhones: typeof import("../../components/project-visuals/ProjectVisualDuoPhones.vue")['default']
  ProjectVisualHeroBottom: typeof import("../../components/project-visuals/ProjectVisualHeroBottom.vue")['default']
  ProjectVisualMockup: typeof import("../../components/project-visuals/ProjectVisualMockup.vue")['default']
  ProjectVisualVideo: typeof import("../../components/project-visuals/ProjectVisualVideo.vue")['default']
  HeroBackground: typeof import("../../components/sections/HeroBackground.vue")['default']
  HeroSection: typeof import("../../components/sections/HeroSection.vue")['default']
  SkillsSection: typeof import("../../components/sections/SkillsSection.vue")['default']
  WorkSection: typeof import("../../components/sections/WorkSection.vue")['default']
  SectionLabel: typeof import("../../components/ui/SectionLabel.vue")['default']
  UiButton: typeof import("../../components/ui/UiButton.vue")['default']
  UiIcon: typeof import("../../components/ui/UiIcon.vue")['default']
  UiTag: typeof import("../../components/ui/UiTag.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtLinkLocale: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  SwitchLocalePathLink: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyProjectDrawer: LazyComponent<typeof import("../../components/ProjectDrawer.vue")['default']>
  LazyContactCard: LazyComponent<typeof import("../../components/cards/ContactCard.vue")['default']>
  LazyProjectCard: LazyComponent<typeof import("../../components/cards/ProjectCard.vue")['default']>
  LazySkillCard: LazyComponent<typeof import("../../components/cards/SkillCard.vue")['default']>
  LazyDrawerBottomNav: LazyComponent<typeof import("../../components/drawer/DrawerBottomNav.vue")['default']>
  LazyDrawerContent: LazyComponent<typeof import("../../components/drawer/DrawerContent.vue")['default']>
  LazyDrawerFeatures: LazyComponent<typeof import("../../components/drawer/DrawerFeatures.vue")['default']>
  LazyDrawerGallery: LazyComponent<typeof import("../../components/drawer/DrawerGallery.vue")['default']>
  LazyDrawerHeader: LazyComponent<typeof import("../../components/drawer/DrawerHeader.vue")['default']>
  LazyTheFloatingNav: LazyComponent<typeof import("../../components/layout/TheFloatingNav.vue")['default']>
  LazyTheFooter: LazyComponent<typeof import("../../components/layout/TheFooter.vue")['default']>
  LazyTheHeader: LazyComponent<typeof import("../../components/layout/TheHeader.vue")['default']>
  LazyProjectVisualCustom: LazyComponent<typeof import("../../components/project-visuals/ProjectVisualCustom.vue")['default']>
  LazyProjectVisualDuoPhones: LazyComponent<typeof import("../../components/project-visuals/ProjectVisualDuoPhones.vue")['default']>
  LazyProjectVisualHeroBottom: LazyComponent<typeof import("../../components/project-visuals/ProjectVisualHeroBottom.vue")['default']>
  LazyProjectVisualMockup: LazyComponent<typeof import("../../components/project-visuals/ProjectVisualMockup.vue")['default']>
  LazyProjectVisualVideo: LazyComponent<typeof import("../../components/project-visuals/ProjectVisualVideo.vue")['default']>
  LazyHeroBackground: LazyComponent<typeof import("../../components/sections/HeroBackground.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/sections/HeroSection.vue")['default']>
  LazySkillsSection: LazyComponent<typeof import("../../components/sections/SkillsSection.vue")['default']>
  LazyWorkSection: LazyComponent<typeof import("../../components/sections/WorkSection.vue")['default']>
  LazySectionLabel: LazyComponent<typeof import("../../components/ui/SectionLabel.vue")['default']>
  LazyUiButton: LazyComponent<typeof import("../../components/ui/UiButton.vue")['default']>
  LazyUiIcon: LazyComponent<typeof import("../../components/ui/UiIcon.vue")['default']>
  LazyUiTag: LazyComponent<typeof import("../../components/ui/UiTag.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtLinkLocale: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  LazySwitchLocalePathLink: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
