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
  /* Light mode circle - expands to reveal light mode from dark */
  background-color: rgb(240 241 237);
  transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: clip-path;
}

/* When expanding to dark mode, use dark circle */
.theme-transition-layer.is-expanding {
  background-color: rgb(23 23 23);
}
</style>
