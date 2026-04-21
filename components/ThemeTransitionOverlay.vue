<script setup lang="ts">
const { isAnimating, clipPath, isExpanding } = useThemeTransition()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isAnimating"
      class="theme-transition-layer"
      :class="{ 'is-expanding': isExpanding }"
      :style="{ clipPath }"
    />
  </Teleport>
</template>

<style scoped>
.theme-transition-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background-color: rgb(23 23 23); /* dark bg */
  transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: clip-path;
}

/* When contracting back to light, we use the same dark bg but clip-path reveals light underneath */
.theme-transition-layer.is-expanding {
  /* Already expanding to dark */
}
</style>
