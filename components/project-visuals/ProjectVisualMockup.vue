<script setup lang="ts">
interface Props {
  imageSrc: string
  imageAlt: string
  imageSrc2?: string
  imageAlt2?: string
}

defineProps<Props>()

const handleImageError = (event: Event) => {
  const el = event.target as HTMLImageElement
  if (!el) return
  el.alt = ''
  el.style.display = 'none'
}
</script>

<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <!-- Primary: centered, fills available space, no secondary overlay -->
    <NuxtImg
      v-if="!imageSrc2"
      :src="imageSrc"
      :alt="imageAlt"
      loading="lazy"
      preset="project"
      class="w-full h-full object-contain p-3 md:p-6
        drop-shadow-2xl select-none pointer-events-none"
      @error="handleImageError"
    />

    <!-- Primary with secondary: fills background, secondary overlays bottom-center -->
    <template v-else>
      <NuxtImg
        :src="imageSrc"
        :alt="imageAlt"
        loading="lazy"
        preset="project"
        class="w-full h-full object-contain p-4 md:p-8
          drop-shadow-xl select-none pointer-events-none"
        @error="handleImageError"
      />
      <NuxtImg
        :src="imageSrc2"
        :alt="imageAlt2 || ''"
        loading="lazy"
        preset="project"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[75%] object-contain
          drop-shadow-[0_8px_32px_rgba(0,0,0,0.18)]
          translate-y-4 group-hover:translate-y-0 transition-transform duration-700
          select-none pointer-events-none"
        @error="handleImageError"
      />
    </template>
  </div>
</template>
