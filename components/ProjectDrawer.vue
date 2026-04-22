<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  isOpen: boolean
  project: Project | null
  isSwitching?: boolean
}

defineProps<Props>()

defineEmits<{
  close: []
  next: []
  prev: []
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer-fade">
      <div
        v-if="isOpen && project"
        class="drawer-overlay"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="drawer-backdrop"
          aria-hidden="true"
          @click="$emit('close')"
        ></div>

        <Transition name="drawer-slide" appear>
          <div class="drawer-panel">
            <DrawerHeader
              :subtitle="$t('drawer.subtitle')"
              @close="$emit('close')"
              @prev="$emit('prev')"
              @next="$emit('next')"
            />

            <div class="drawer-scroll-area">
              <DrawerContent
                :project="project"
                :is-switching="isSwitching ?? false"
              />
            </div>

            <DrawerBottomNav
              @prev="$emit('prev')"
              @next="$emit('next')"
            />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.drawer-overlay {
  @apply fixed inset-0 z-[100] flex justify-end;
}

.drawer-backdrop {
  @apply absolute inset-0 backdrop-blur-sm transition-opacity;
  background-color: rgb(var(--brand-text) / 0.4);
}

.drawer-panel {
  @apply relative w-full md:w-[92vw] lg:w-[85vw] xl:w-[78vw] 2xl:w-[72vw] h-full
    shadow-2xl flex flex-col;
  background-color: rgb(var(--brand-bg));
  will-change: transform;
  contain: layout style;
}

.drawer-scroll-area {
  @apply flex-1 overflow-y-auto overflow-x-hidden relative;
  scrollbar-width: thin;
  scrollbar-color: rgb(var(--brand-muted) / 0.35) transparent;
  overscroll-behavior: contain;
}

.drawer-scroll-area::-webkit-scrollbar { width: 6px; }
.drawer-scroll-area::-webkit-scrollbar-track { background: transparent; }
.drawer-scroll-area::-webkit-scrollbar-thumb {
  background: rgb(var(--brand-muted) / 0.35);
  border-radius: 10px;
}

.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.4s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to { opacity: 0; }

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-slide-enter-from,
.drawer-slide-leave-to { transform: translateX(100%); }
</style>
