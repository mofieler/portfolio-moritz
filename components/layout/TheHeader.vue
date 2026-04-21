<script setup lang="ts">
const { handleSmoothScroll } = useSmoothScroll()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { isDark, toggle } = useColorMode()

const isEnglish = computed(() => locale.value === 'en')
const isGerman = computed(() => locale.value === 'de')

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
    >
      Mindcoded by Mo.
    </a>

    <!-- Right Side Controls -->
    <div class="flex items-center gap-2 md:gap-3 pointer-events-auto">

      <!-- Dark Mode Toggle -->
      <button
        class="theme-toggle"
        :class="{ 'theme-toggle--toggled': isDark }"
        type="button"
        title="Toggle theme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="1em"
          height="1em"
          fill="currentColor"
          class="theme-toggle__around"
          viewBox="0 0 32 32"
        >
          <clipPath id="theme-toggle__around__cutout">
            <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
          </clipPath>
          <g clip-path="url(#theme-toggle__around__cutout)">
            <circle cx="16" cy="16" r="8.4" />
            <g>
              <circle cx="16" cy="3.3" r="2.3" />
              <circle cx="27" cy="9.7" r="2.3" />
              <circle cx="27" cy="22.3" r="2.3" />
              <circle cx="16" cy="28.7" r="2.3" />
              <circle cx="5" cy="22.3" r="2.3" />
              <circle cx="5" cy="9.7" r="2.3" />
            </g>
          </g>
        </svg>
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
