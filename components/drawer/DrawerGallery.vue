<script setup lang="ts">
import type { GalleryItem } from '~/types'

interface Props {
  gallery?: GalleryItem[]
  title: string
  accentClass?: string
  videoSrc?: string
}

const props = defineProps<Props>()
const { t } = useI18n()

const activeIndex = ref(0)
const isFullscreen = ref(false)
const captionVisible = ref(false)

const total = computed(() => props.gallery?.length ?? 0)
const hasMany = computed(() => total.value > 1)
const hasContent = computed(() => !!props.videoSrc || total.value > 0)
const activeItem = computed(() => props.gallery?.[activeIndex.value])
const activeCaption = computed(() => {
  const key = activeItem.value?.captionKey
  return key ? t(key) : ''
})

const next = () => {
  if (!total.value) return
  captionVisible.value = false
  activeIndex.value = (activeIndex.value + 1) % total.value
}

const prev = () => {
  if (!total.value) return
  captionVisible.value = false
  activeIndex.value = (activeIndex.value - 1 + total.value) % total.value
}

const goTo = (i: number) => {
  captionVisible.value = false
  activeIndex.value = i
}

watch(
  () => props.gallery,
  () => {
    activeIndex.value = 0
    captionVisible.value = false
  },
)

const openFullscreen = () => {
  if (!total.value) return
  isFullscreen.value = true
}

const closeFullscreen = () => {
  isFullscreen.value = false
}

const toggleCaption = () => {
  captionVisible.value = !captionVisible.value
}

const onKey = (e: KeyboardEvent) => {
  if (!isFullscreen.value) return
  if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'Escape') closeFullscreen()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div v-if="hasContent">
    <!-- Video player -->
    <div v-if="videoSrc" class="video-stage" :class="accentClass || 'stage-default'">
      <iframe
        :src="videoSrc"
        class="video-frame"
        allow="autoplay; fullscreen"
        allowfullscreen
        loading="lazy"
        title="Project video"
      />
    </div>

    <!-- Image gallery -->
    <div v-if="total > 0" :class="{ 'mt-8': videoSrc }">
      <!-- Main Stage -->
      <div
        class="stage group touch-manipulation"
        :class="accentClass || 'stage-default'"
        @mouseenter="activeCaption ? (captionVisible = true) : null"
        @mouseleave="captionVisible = false"
        @click="toggleCaption"
        @touchend.prevent="toggleCaption"
      >
        <Transition name="stage-fade" mode="out-in">
          <NuxtImg
            :key="activeItem!.src"
            :src="activeItem!.src"
            :alt="`${title} — ${activeIndex + 1} / ${total}`"
            class="stage-image"
            loading="lazy"
            preset="project"
          />
        </Transition>

        <!-- Caption overlay -->
        <Transition name="caption-fade">
          <div
            v-if="activeCaption && captionVisible"
            class="caption-overlay"
          >
            <p class="caption-text">{{ activeCaption }}</p>
          </div>
        </Transition>

        <button
          v-if="hasMany"
          class="overlay-nav-btn stage-nav stage-nav-prev touch-manipulation"
          :aria-label="$t('drawer.prevImage')"
          @click.stop="prev"
          @touchend.prevent="prev"
        >
          <UiIcon name="ChevronLeft" size="lg" />
        </button>
        <button
          v-if="hasMany"
          class="overlay-nav-btn stage-nav stage-nav-next touch-manipulation"
          :aria-label="$t('drawer.nextImage')"
          @click.stop="next"
          @touchend.prevent="next"
        >
          <UiIcon name="ChevronRight" size="lg" />
        </button>

        <div class="stage-meta">
          <span v-if="hasMany" class="stage-counter">
            {{ String(activeIndex + 1).padStart(2, '0') }}
            <span class="opacity-40">/</span>
            {{ String(total).padStart(2, '0') }}
          </span>
          <button
            class="overlay-dark-btn w-9 h-9 touch-manipulation"
            :aria-label="$t('drawer.openFullscreen')"
            @click.stop="openFullscreen"
            @touchend.prevent="openFullscreen"
          >
            <UiIcon name="Expand" size="sm" />
          </button>
        </div>
      </div>

      <!-- Thumbnails -->
      <div v-if="hasMany" class="thumb-row">
        <button
          v-for="(item, index) in gallery"
          :key="item.src"
          class="thumb touch-manipulation"
          :class="{ 'thumb-active': index === activeIndex }"
          :aria-label="$t('drawer.showImage', { n: index + 1 })"
          @click="goTo(index)"
          @touchend.prevent="goTo(index)"
        >
          <NuxtImg :src="item.src" :alt="`${title} thumbnail ${index + 1}`" loading="lazy" preset="thumbnail" />
        </button>
      </div>
    </div>

    <!-- Fullscreen Lightbox -->
    <Teleport to="body">
      <Transition name="lb-fade">
        <div
          v-if="isFullscreen && gallery"
          class="lightbox touch-manipulation"
          role="dialog"
          aria-modal="true"
          @click.self="closeFullscreen"
          @touchend.self.prevent="closeFullscreen"
        >
          <button
            class="lightbox-btn lb-close w-11 h-11 touch-manipulation"
            :aria-label="$t('drawer.close')"
            @click="closeFullscreen"
            @touchend.prevent="closeFullscreen"
          >
            <UiIcon name="X" size="md" />
          </button>

          <button
            v-if="hasMany"
            class="lightbox-btn lb-nav lb-nav-prev w-12 h-12 md:w-14 md:h-14 touch-manipulation"
            :aria-label="$t('drawer.prevImage')"
            @click="prev"
            @touchend.prevent="prev"
          >
            <UiIcon name="ChevronLeft" size="lg" />
          </button>

          <NuxtImg
            :src="gallery[activeIndex].src"
            :alt="`${title} — ${activeIndex + 1}`"
            class="lb-image"
            preset="project"
          />

          <button
            v-if="hasMany"
            class="lightbox-btn lb-nav lb-nav-next w-12 h-12 md:w-14 md:h-14 touch-manipulation"
            :aria-label="$t('drawer.nextImage')"
            @click="next"
            @touchend.prevent="next"
          >
            <UiIcon name="ChevronRight" size="lg" />
          </button>

          <div v-if="hasMany" class="lb-counter">
            {{ activeIndex + 1 }} / {{ total }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>

  <div v-else class="empty-state">
    <UiIcon name="Photo" size="xl" class="text-brand-muted mb-2" />
    <p class="text-sm text-brand-muted">{{ $t('drawer.galleryEmpty') }}</p>
  </div>
</template>

<style scoped>
/* ===== Video Stage ===== */
.video-stage {
  @apply relative w-full rounded-[1.75rem] overflow-hidden border border-brand-muted/20 shadow-sm;
  aspect-ratio: 16 / 9;
}

.video-frame {
  @apply w-full h-full border-0;
}

/* ===== Image Stage ===== */
.stage {
  @apply relative w-full rounded-[1.75rem] overflow-hidden border border-brand-muted/20 shadow-sm
    flex items-center justify-center cursor-pointer;
  min-height: clamp(320px, 60vh, 640px);
}

.stage-default {
  background:
    radial-gradient(circle at 30% 20%, rgba(196, 122, 58, 0.12), transparent 55%),
    radial-gradient(circle at 75% 80%, rgba(120, 113, 108, 0.10), transparent 60%),
    linear-gradient(135deg, #F4EFE8 0%, #EDE4D6 100%);
}

.stage-image {
  @apply max-w-full max-h-full object-contain select-none pointer-events-none;
  padding: clamp(1rem, 3vw, 2.5rem);
  filter: drop-shadow(0 20px 40px rgba(28, 25, 23, 0.12));
  will-change: opacity, transform;
}

/* ===== Caption Overlay ===== */
.caption-overlay {
  @apply absolute inset-x-0 bottom-0 flex items-end p-5 md:p-7;
  background: linear-gradient(to top, rgba(28, 25, 23, 0.72) 0%, transparent 100%);
  border-radius: 0 0 1.75rem 1.75rem;
  pointer-events: none;
}

.caption-text {
  @apply text-white text-sm md:text-base font-light leading-snug
    drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)];
  max-width: 90%;
}

/* ===== Nav buttons ===== */
.stage-nav {
  @apply absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100;
}

.stage-nav-prev { @apply left-3 md:left-5; }
.stage-nav-next { @apply right-3 md:right-5; }

@media (max-width: 768px) {
  .stage-nav { @apply opacity-100; }
}

.stage-meta {
  @apply absolute bottom-4 right-4 flex items-center gap-2;
}

.stage-counter {
  @apply px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-mono tracking-widest backdrop-blur-sm;
}

/* ===== Thumbnails ===== */
.thumb-row {
  @apply mt-4 flex gap-3 overflow-x-auto pb-2;
  scrollbar-width: thin;
}

.thumb {
  @apply relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden
    border-2 border-transparent bg-[#F4EFE8] opacity-60 hover:opacity-100
    transition-all duration-300;
}

.thumb img {
  @apply w-full h-full object-contain p-1.5;
}

.thumb-active {
  @apply opacity-100 border-brand-terra shadow-md;
}

/* ===== Empty ===== */
.empty-state {
  @apply p-10 text-center bg-brand-surface rounded-2xl border border-dashed border-brand-muted/30
    flex flex-col items-center;
}

/* ===== Lightbox ===== */
.lightbox {
  @apply fixed inset-0 z-[200] flex items-center justify-center
    bg-brand-text/95 backdrop-blur-md p-4 md:p-10;
}

.lb-image {
  @apply max-w-full max-h-full object-contain select-none;
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4));
}

.lb-close { @apply absolute top-5 right-5; }
.lb-nav { @apply absolute top-1/2 -translate-y-1/2; }
.lb-nav-prev { @apply left-4 md:left-8; }
.lb-nav-next { @apply right-4 md:right-8; }

.lb-counter {
  @apply absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full
    bg-white/10 text-white text-sm font-mono tracking-wider backdrop-blur-sm border border-white/20;
}

/* ===== Transitions ===== */
.stage-fade-enter-active,
.stage-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.stage-fade-enter-from {
  opacity: 0;
  transform: scale(0.98);
}
.stage-fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

.caption-fade-enter-active,
.caption-fade-leave-active {
  transition: opacity 0.25s ease;
}
.caption-fade-enter-from,
.caption-fade-leave-to {
  opacity: 0;
}

.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.25s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}
</style>
