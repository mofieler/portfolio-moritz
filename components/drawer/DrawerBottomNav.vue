<script setup lang="ts">
defineEmits<{
  prev: []
  next: []
}>()
</script>

<template>
  <div class="bottom-nav-wrapper">
    <nav class="bottom-nav">
      <button class="nav-btn nav-btn-muted touch-manipulation" @click="$emit('prev')" @touchend.prevent="$emit('prev')">
        <UiIcon name="ArrowLeft" size="sm" /> {{ $t('drawer.prev') }}
      </button>
      <span class="nav-divider"></span>
      <button class="nav-btn nav-btn-strong touch-manipulation" @click="$emit('next')" @touchend.prevent="$emit('next')">
        {{ $t('drawer.next') }} <UiIcon name="ArrowRight" size="sm" />
      </button>
    </nav>
  </div>
</template>

<style scoped>
.bottom-nav-wrapper {
  @apply absolute bottom-0 w-full p-4 pb-8 pointer-events-none flex justify-center;
  background: linear-gradient(to top, rgb(var(--brand-bg)) 0%, rgb(var(--brand-bg)) 40%, transparent 100%);
}

.bottom-nav {
  @apply pointer-events-auto flex items-center gap-4 backdrop-blur-md
    px-6 py-3 rounded-full shadow-lg border border-brand-muted/20;
  background-color: rgb(var(--brand-surface) / 0.92);
}

.nav-btn {
  @apply text-sm font-semibold transition-colors flex items-center gap-2;
  color: rgb(var(--brand-text));
}
.nav-btn:hover { color: rgb(var(--brand-terra)); }

.nav-btn-muted { color: rgb(var(--brand-muted)); }
.nav-btn-strong { color: rgb(var(--brand-text)); }

.nav-divider {
  @apply w-px h-4;
  background-color: rgb(var(--brand-muted) / 0.3);
}
</style>
