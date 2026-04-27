<script setup lang="ts">
interface Props {
  imageSrc: string
  imageAlt: string
  imageSrc2?: string
  imageAlt2?: string
  compact?: boolean
}

const props = defineProps<Props>()

const handleImageError = (event: Event) => {
  const el = event.target as HTMLImageElement
  if (!el) return
  el.alt = ''
  el.style.display = 'none'
}
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <template v-if="imageSrc2">
      <!--
        Each phone gets an absolute bounding box.
        Using direct absolute bounds (not flex) so h/w percentages resolve
        against the card height, not a flex item's content size.
        Left phone is raised, right phone is lowered for staggered depth.
      -->

      <!-- Primary: sized by height, left-anchored -->
      <NuxtImg
        :src="imageSrc"
        :alt="imageAlt"
        loading="lazy"
        preset="project"
        class="absolute w-auto object-contain select-none pointer-events-none
          top-1/2 -translate-y-[54%] group-hover:-translate-y-[58%]
          drop-shadow-2xl transition-transform duration-700"
        :style="{ height: '82%', zIndex: 1, left: props.compact ? '14%' : '4%' }"
        @error="handleImageError"
      />

      <!-- Secondary: sized by height, right-anchored, lowered -->
      <NuxtImg
        :src="imageSrc2"
        :alt="imageAlt2 || ''"
        loading="lazy"
        preset="project"
        class="absolute w-auto object-contain select-none pointer-events-none
          top-1/2 -translate-y-[46%] group-hover:-translate-y-[42%]
          drop-shadow-[0_12px_40px_rgba(0,0,0,0.20)] transition-transform duration-700 delay-75"
        :style="{ height: '82%', zIndex: 2, right: props.compact ? '14%' : '4%' }"
        @error="handleImageError"
      />
    </template>

    <!-- Single image fallback: centred, fills card -->
    <div v-else class="absolute inset-[3%]">
      <NuxtImg
        :src="imageSrc"
        :alt="imageAlt"
        loading="lazy"
        preset="project"
        class="w-full h-full object-contain
          drop-shadow-2xl select-none pointer-events-none"
        @error="handleImageError"
      />
    </div>
  </div>
</template>
