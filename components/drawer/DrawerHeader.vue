<script setup lang="ts">
interface Props {
  subtitle: string
}

defineProps<Props>()

defineEmits<{
  close: []
  prev: []
  next: []
}>()
</script>

<template>
  <header class="drawer-header">
    <div class="flex items-center gap-4">
      <button
        class="drawer-pill-btn touch-manipulation"
        :aria-label="$t('drawer.close')"
        @click="$emit('close')"
        @touchend.prevent="$emit('close')"
      >
        <UiIcon name="X" size="md" />
      </button>
      <span class="drawer-label">{{ subtitle }}</span>
    </div>

    <nav class="flex items-center gap-2">
      <button
        class="drawer-pill-btn touch-manipulation"
        :aria-label="$t('drawer.prevProject')"
        @click="$emit('prev')"
        @touchend.prevent="$emit('prev')"
      >
        <UiIcon name="ChevronLeft" size="md" />
      </button>
      <button
        class="drawer-pill-btn touch-manipulation"
        :aria-label="$t('drawer.nextProject')"
        @click="$emit('next')"
        @touchend.prevent="$emit('next')"
      >
        <UiIcon name="ChevronRight" size="md" />
      </button>
    </nav>
  </header>
</template>

<style scoped>
.drawer-header {
  @apply flex items-center justify-between px-6 py-5 md:px-10 border-b border-brand-muted/20
    backdrop-blur z-20 shrink-0;
  background-color: rgb(var(--brand-bg) / 0.97);
}

.drawer-label {
  @apply text-xs font-bold tracking-[0.1em] uppercase;
  color: rgb(var(--brand-muted));
}
</style>
