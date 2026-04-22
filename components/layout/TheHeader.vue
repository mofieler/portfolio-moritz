<script setup lang="ts">
const { handleSmoothScroll } = useSmoothScroll()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { isDark, toggle, isHydrated } = useColorMode()

const isEnglish = computed(() => locale.value === 'en')
const isGerman = computed(() => locale.value === 'de')

// Check actual DOM state for initial icon to prevent mismatch
const currentTheme = computed(() => {
  if (!process.client) return 'light'
  
  // During hydration, check actual DOM state instead of reactive value
  if (!isHydrated.value) {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }
  
  return isDark.value ? 'dark' : 'light'
})

// Ensure icon updates when hydration completes
watch([isHydrated, isDark], () => {
  // Force reactivity update when hydration completes or theme changes
}, { immediate: true })

// Strip hash fragment — switchLocalePath preserves the current URL hash (#top, #work…)
// which causes a server/client hydration mismatch and crashes the page on navigation.
const localePath = (code: 'en' | 'de') => {
  const path = switchLocalePath(code)
  return typeof path === 'string' ? path.split('#')[0] || '/' : path
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-40 px-4 py-3 md:p-8 pointer-events-none flex justify-between items-center glass-nav">
    <!-- Logo -->
    <a
      href="www.moritzfieler.de"
      class="nav-trigger text-xl md:text-fluid-2xl font-display font-bold tracking-tighter text-brand-text pointer-events-auto hover:opacity-70 transition-opacity leading-tight"
      @click="(e: MouseEvent) => handleSmoothScroll(e, '#top')"
      @touchend.prevent="(e: TouchEvent) => handleSmoothScroll(e as unknown as MouseEvent, '#top')"
    >
      Mindcoded by Mo.
    </a>

    <!-- Right Side Controls -->
    <div class="flex items-center gap-2 md:gap-3 pointer-events-auto">

      <!-- Dark Mode Toggle -->
      <button
        class="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full text-brand-muted touch-manipulation
          hover:text-brand-text hover:bg-brand-surface border border-transparent
          hover:border-brand-muted/20 transition-all duration-300"
        :aria-label="currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggle"
        @touchend.prevent="toggle"
      >
        <UiIcon :name="currentTheme === 'dark' ? 'Sun' : 'Moon'" size="md" />
      </button>

      <!-- Language Switcher -->
      <div class="bg-brand-surface border border-brand-muted/20 rounded-full p-1 flex items-center shadow-sm">
        <NuxtLink
          :to="localePath('en')"
          class="min-w-[40px] min-h-[40px] px-3 md:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center"
          :class="isEnglish ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'"
        >EN</NuxtLink>
        <NuxtLink
          :to="localePath('de')"
          class="min-w-[40px] min-h-[40px] px-3 md:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center"
          :class="isGerman ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'"
        >DE</NuxtLink>
      </div>

      <!-- Available Badge — desktop only -->
      <a
        href="#contact"
        class="hidden md:flex nav-trigger bg-brand-surface text-brand-text border border-brand-muted/20 px-5 py-2.5 rounded-full text-fluid-sm font-semibold hover:border-brand-terra hover:text-brand-terra transition-all duration-300 shadow-sm items-center gap-2"
        @click="(e: MouseEvent) => handleSmoothScroll(e, '#contact')"
        @touchend.prevent="(e: TouchEvent) => handleSmoothScroll(e as unknown as MouseEvent, '#contact')"
      >
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-brand-terra opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-terra"></span>
        </span>
        {{ $t('nav.available') }}
      </a>
    </div>
  </header>
</template>
