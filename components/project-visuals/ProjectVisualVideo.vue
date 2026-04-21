<script setup lang="ts">
interface Props {
  videoSrc: string
}

defineProps<Props>()
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <iframe
      :src="videoSrc"
      class="w-full h-full border-0"
      allow="autoplay; fullscreen"
      allowfullscreen
      loading="lazy"
      title="Project video"
    />
  </div>
</template>
