<script setup lang="ts">
const { handleSmoothScroll } = useSmoothScroll()
const activeSection = ref('top')

const justClicked = ref(false)
const clickTimeout: Ref<ReturnType<typeof setTimeout> | null> = ref(null)

const handleNavClick = (e: MouseEvent, id: string) => {
  activeSection.value = id
  justClicked.value = true

  if (clickTimeout.value) clearTimeout(clickTimeout.value)

  clickTimeout.value = setTimeout(() => {
    justClicked.value = false
  }, 1500)

  handleSmoothScroll(e, `#${id}`)
}

const NAV_ITEMS = [
  { id: 'top', label: 'nav.home', icon: 'Sparkles' },
  { id: 'work', label: 'nav.work', icon: 'Briefcase' },
  { id: 'skills', label: 'nav.skills', icon: 'MagicWand' },
  { id: 'contact', label: 'nav.contact', icon: 'EnvelopeSimple' },
] as const

const SECTION_IDS = ['top', 'work', 'skills', 'contact'] as const

onMounted(() => {
  const { onScroll } = useLenis()
  onScroll(({ scroll, velocity }) => {
    if (justClicked.value) return
    if (Math.abs(velocity) > 0.5) return

    const sections: { id: string; top: number; bottom: number }[] = []
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        sections.push({
          id,
          top: scroll + rect.top,
          bottom: scroll + rect.bottom,
        })
      }
    }
    if (sections.length === 0) return

    const midpoint = scroll + window.innerHeight * 0.5

    // Standard scroll-spy: last section whose top has passed the viewport midpoint
    let newActive = sections[0].id
    for (const section of sections) {
      if (section.top <= midpoint) newActive = section.id
    }

    // Contact override: activate once its top reaches 40% into viewport
    const contact = sections.find(s => s.id === 'contact')
    if (contact) {
      const contactThreshold = scroll + window.innerHeight * 0.4
      if (contact.top <= contactThreshold && contact.bottom > scroll) {
        newActive = 'contact'
      }
    }

    activeSection.value = newActive
  })
})
</script>

<template>
  <nav class="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-max touch-manipulation">
    <div class="glass-nav rounded-full px-2 py-2 md:px-3 md:py-3 flex items-center gap-1 md:gap-3 will-change-transform">
      <a
        v-for="item in NAV_ITEMS"
        :key="item.id"
        :href="`#${item.id}`"
        class="nav-item group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-brand-muted hover:text-brand-text hover:bg-brand-text/10"
        :class="{ active: activeSection === item.id }"
        :aria-label="$t(item.label)"
        @click="(e: MouseEvent) => handleNavClick(e, item.id)"
      >
        <UiIcon :name="item.icon" size="lg" />
      </a>
    </div>
  </nav>
</template>
