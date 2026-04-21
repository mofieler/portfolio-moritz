<script setup lang="ts">
const { locale } = useI18n()
const { handleSmoothScroll } = useSmoothScroll()

const PERSONAL_NAME = 'Moritz Fieler'
const TECH_STACK = ['VUE', 'NUXT', 'REACT', 'NODE.JS', 'TYPESCRIPT', 'FIGMA', 'IONIC'] as const

// Cycling phrases — each slots into the hero title like a cursor rewrites the ending
const PHRASES: Record<string, string[]> = {
  en: ['of interaction.', 'of digitalization.', 'of mobility.', 'of experience.', 'of tomorrow.'],
  de: ['der Interaktion.', 'der Digitalisierung.', 'der Mobilität.', 'des Erlebnisses.', 'von morgen.'],
}

const currentText = ref('')
const phraseIndex = ref(0)
const isDeleting = ref(false)
let timer: ReturnType<typeof setTimeout>

const phrases = computed(() => PHRASES[locale.value] ?? PHRASES.en)

function step() {
  const target = phrases.value[phraseIndex.value]

  if (!isDeleting.value) {
    if (currentText.value.length < target.length) {
      currentText.value = target.slice(0, currentText.value.length + 1)
      timer = setTimeout(step, 62)
    } else {
      timer = setTimeout(() => { isDeleting.value = true; step() }, 2800)
    }
  } else {
    if (currentText.value.length > 0) {
      currentText.value = currentText.value.slice(0, -1)
      timer = setTimeout(step, 36)
    } else {
      isDeleting.value = false
      phraseIndex.value = (phraseIndex.value + 1) % phrases.value.length
      timer = setTimeout(step, 380)
    }
  }
}

onMounted(() => {
  currentText.value = phrases.value[0]
  // Pause so the visitor reads the first phrase before the animation starts
  timer = setTimeout(() => { isDeleting.value = true; step() }, 3500)
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section
    id="top"
    class="relative flex flex-col items-center justify-center text-center pt-36 pb-32 md:pt-52 md:pb-40 px-6 min-h-svh"
  >
    <HeroBackground />

    <div class="relative z-10 max-w-4xl mx-auto">
      <!-- Profile picture -->
      <div class="flex justify-center mb-8 reveal reveal-d1">
        <div class="relative inline-block">
          <!-- Outer glow ring -->
          <div class="absolute inset-0 rounded-full animate-pulse-slow"
            style="background: radial-gradient(circle, rgb(var(--brand-terra) / 0.15) 0%, transparent 70%); transform: scale(1.35);">
          </div>
          <!-- Avatar -->
          <img
            src="/images/projects/portfolio/profilepicture.png"
            alt="Moritz Fieler"
            class="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover"
            style="box-shadow: 0 0 0 3px rgb(var(--brand-terra) / 0.25), 0 8px 32px rgba(0,0,0,0.12);"
          />
          <!-- Available pulse dot -->
          <span class="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style="background-color: rgb(var(--brand-terra));"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 border-2"
              style="background-color: rgb(var(--brand-terra)); border-color: rgb(var(--brand-bg));"></span>
          </span>
        </div>
      </div>

      <span class="eyebrow-text text-brand-terra mb-6 block reveal reveal-d2">
        {{ $t('hero.eyebrow') }}
      </span>

      <h1 class="heading-display mb-8 reveal reveal-d3">
        {{ $t('hero.title') }}
        <br class="hidden md:block" />
        <span class="text-gradient-terra">
          {{ currentText }}<span class="typewriter-cursor" aria-hidden="true">|</span>
        </span>
      </h1>

      <p class="body-large max-w-2xl mx-auto mb-12 reveal reveal-d4">
        {{ $t('hero.description', { name: PERSONAL_NAME }) }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0 reveal reveal-d5">
        <UiButton
          href="#work"
          variant="primary"
          @click="(e: MouseEvent) => handleSmoothScroll(e, '#work')"
        >
          {{ $t('hero.ctaWork') }}
        </UiButton>
        <UiButton
          href="#contact"
          variant="secondary"
          @click="(e: MouseEvent) => handleSmoothScroll(e, '#contact')"
        >
          {{ $t('hero.ctaContact') }}
        </UiButton>
      </div>
    </div>

    <!-- Powered By bar — hidden on mobile to avoid overlap with floating nav -->
    <div class="hidden md:flex absolute z-10 bottom-24 left-0 right-0 justify-center px-4 reveal reveal-d5">
      <div class="flex items-center gap-3 md:gap-4 bg-brand-text/[0.04] border border-brand-muted/15 rounded-full px-5 py-2.5 backdrop-blur-sm flex-wrap justify-center">
        <span class="font-bold tracking-[0.20em] uppercase text-brand-terra text-[10px] shrink-0">
          POWERED BY
        </span>
        <span class="h-3 w-px bg-brand-muted/30 shrink-0 hidden sm:block"></span>
        <div class="flex items-center gap-1 flex-wrap justify-center">
          <template v-for="(tech, i) in TECH_STACK" :key="tech">
            <span class="font-semibold tracking-[0.12em] uppercase text-brand-muted text-[10px] md:text-[11px] hover:text-brand-terra transition-colors duration-300 cursor-default">{{ tech }}</span>
            <span v-if="i < TECH_STACK.length - 1" class="text-brand-muted/30 text-[10px] mx-1 select-none">·</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typewriter-cursor {
  display: inline-block;
  margin-left: 2px;
  font-weight: 300;
  animation: blink 1s step-end infinite;
  /* Inherit the gradient parent's fill color */
  -webkit-text-fill-color: initial;
  color: #C47A3A;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; transform: scale(1.35); }
  50%       { opacity: 1;   transform: scale(1.45); }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>
