
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


export const ProjectDrawer: typeof import("../components/ProjectDrawer.vue")['default']
export const ContactCard: typeof import("../components/cards/ContactCard.vue")['default']
export const ProjectCard: typeof import("../components/cards/ProjectCard.vue")['default']
export const SkillCard: typeof import("../components/cards/SkillCard.vue")['default']
export const DrawerBottomNav: typeof import("../components/drawer/DrawerBottomNav.vue")['default']
export const DrawerContent: typeof import("../components/drawer/DrawerContent.vue")['default']
export const DrawerFeatures: typeof import("../components/drawer/DrawerFeatures.vue")['default']
export const DrawerGallery: typeof import("../components/drawer/DrawerGallery.vue")['default']
export const DrawerHeader: typeof import("../components/drawer/DrawerHeader.vue")['default']
export const TheFloatingNav: typeof import("../components/layout/TheFloatingNav.vue")['default']
export const TheFooter: typeof import("../components/layout/TheFooter.vue")['default']
export const TheHeader: typeof import("../components/layout/TheHeader.vue")['default']
export const ProjectVisualCustom: typeof import("../components/project-visuals/ProjectVisualCustom.vue")['default']
export const ProjectVisualDuoPhones: typeof import("../components/project-visuals/ProjectVisualDuoPhones.vue")['default']
export const ProjectVisualHeroBottom: typeof import("../components/project-visuals/ProjectVisualHeroBottom.vue")['default']
export const ProjectVisualMockup: typeof import("../components/project-visuals/ProjectVisualMockup.vue")['default']
export const ProjectVisualVideo: typeof import("../components/project-visuals/ProjectVisualVideo.vue")['default']
export const HeroBackground: typeof import("../components/sections/HeroBackground.vue")['default']
export const HeroSection: typeof import("../components/sections/HeroSection.vue")['default']
export const SkillsSection: typeof import("../components/sections/SkillsSection.vue")['default']
export const WorkSection: typeof import("../components/sections/WorkSection.vue")['default']
export const SectionLabel: typeof import("../components/ui/SectionLabel.vue")['default']
export const UiButton: typeof import("../components/ui/UiButton.vue")['default']
export const UiIcon: typeof import("../components/ui/UiIcon.vue")['default']
export const UiTag: typeof import("../components/ui/UiTag.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyProjectDrawer: LazyComponent<typeof import("../components/ProjectDrawer.vue")['default']>
export const LazyContactCard: LazyComponent<typeof import("../components/cards/ContactCard.vue")['default']>
export const LazyProjectCard: LazyComponent<typeof import("../components/cards/ProjectCard.vue")['default']>
export const LazySkillCard: LazyComponent<typeof import("../components/cards/SkillCard.vue")['default']>
export const LazyDrawerBottomNav: LazyComponent<typeof import("../components/drawer/DrawerBottomNav.vue")['default']>
export const LazyDrawerContent: LazyComponent<typeof import("../components/drawer/DrawerContent.vue")['default']>
export const LazyDrawerFeatures: LazyComponent<typeof import("../components/drawer/DrawerFeatures.vue")['default']>
export const LazyDrawerGallery: LazyComponent<typeof import("../components/drawer/DrawerGallery.vue")['default']>
export const LazyDrawerHeader: LazyComponent<typeof import("../components/drawer/DrawerHeader.vue")['default']>
export const LazyTheFloatingNav: LazyComponent<typeof import("../components/layout/TheFloatingNav.vue")['default']>
export const LazyTheFooter: LazyComponent<typeof import("../components/layout/TheFooter.vue")['default']>
export const LazyTheHeader: LazyComponent<typeof import("../components/layout/TheHeader.vue")['default']>
export const LazyProjectVisualCustom: LazyComponent<typeof import("../components/project-visuals/ProjectVisualCustom.vue")['default']>
export const LazyProjectVisualDuoPhones: LazyComponent<typeof import("../components/project-visuals/ProjectVisualDuoPhones.vue")['default']>
export const LazyProjectVisualHeroBottom: LazyComponent<typeof import("../components/project-visuals/ProjectVisualHeroBottom.vue")['default']>
export const LazyProjectVisualMockup: LazyComponent<typeof import("../components/project-visuals/ProjectVisualMockup.vue")['default']>
export const LazyProjectVisualVideo: LazyComponent<typeof import("../components/project-visuals/ProjectVisualVideo.vue")['default']>
export const LazyHeroBackground: LazyComponent<typeof import("../components/sections/HeroBackground.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/sections/HeroSection.vue")['default']>
export const LazySkillsSection: LazyComponent<typeof import("../components/sections/SkillsSection.vue")['default']>
export const LazyWorkSection: LazyComponent<typeof import("../components/sections/WorkSection.vue")['default']>
export const LazySectionLabel: LazyComponent<typeof import("../components/ui/SectionLabel.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../components/ui/UiButton.vue")['default']>
export const LazyUiIcon: LazyComponent<typeof import("../components/ui/UiIcon.vue")['default']>
export const LazyUiTag: LazyComponent<typeof import("../components/ui/UiTag.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
