<script setup lang="ts">
interface Props {
  imageSrc: string
  imageAlt: string
  imageSrc2?: string
  imageAlt2?: string
}

defineProps<Props>()

const handleImageError = (event: Event) => {
  const target = event.target as HTMLElement
  if (target) target.style.display = 'none'
}
</script>

<template>
  <div class="relative w-full h-full">
    <!-- Primary image: centered, large, no rotation -->
    <NuxtImg
      :src="imageSrc"
      :alt="imageAlt"
      loading="lazy"
      preset="project"
      class="w-full h-full object-contain p-6 md:p-8 drop-shadow-2xl select-none pointer-events-none"
      @error="handleImageError"
    />
    <!-- Secondary image: anchored at bottom, straight, bigger -->
    <NuxtImg
      v-if="imageSrc2"
      :src="imageSrc2"
      :alt="imageAlt2 || ''"
      loading="lazy"
      preset="project"
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] md:w-[70%] object-contain
        drop-shadow-[0_8px_32px_rgba(0,0,0,0.20)]
        translate-y-4 group-hover:translate-y-0 transition-transform duration-700
        select-none pointer-events-none"
      @error="handleImageError"
    />
  </div>
</template>
