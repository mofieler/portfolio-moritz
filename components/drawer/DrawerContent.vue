<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
  isSwitching: boolean
}

const props = defineProps<Props>()
const { category, title, description, longDescription, features } = useTranslatedProject(() => props.project)

const isDescExpanded = ref(false)
const hasLongDesc = computed(() => longDescription.value.length > 0)
const isExpandable = computed(() => hasLongDesc.value || description.value.length > 180)

watch(() => props.project.id, () => {
  isDescExpanded.value = false
})
</script>

<template>
  <div
    class="drawer-content"
    :class="isSwitching ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'"
  >
    <!-- Title -->
    <div class="mb-8 md:mb-10 max-w-4xl">
      <span class="project-category">{{ category }}</span>
      <h3 class="project-title">{{ title }}</h3>

      <!-- Description: always visible; clamp only when collapsible and collapsed -->
      <p
        class="project-description"
        :class="{ 'desc-clamp': isExpandable && !isDescExpanded }"
      >
        {{ description }}
      </p>

      <!-- Long description: shown only when expanded -->
      <p
        v-if="hasLongDesc && isDescExpanded"
        class="project-description mt-4"
      >
        {{ longDescription }}
      </p>

      <button
        v-if="isExpandable"
        class="desc-toggle"
        @click="isDescExpanded = !isDescExpanded"
      >
        {{ isDescExpanded ? $t('drawer.readLess') : $t('drawer.readMore') }}
        <UiIcon
          name="ChevronDown"
          size="sm"
          class="transition-transform"
          :class="{ 'rotate-180': isDescExpanded }"
        />
      </button>

      <!-- PDF Download -->
      <a
        v-if="project.pdfUrl"
        :href="project.pdfUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="pdf-link"
      >
        <UiIcon name="DocumentArrowDown" size="sm" />
        {{ $t('drawer.viewPdf') }}
      </a>
    </div>

    <!-- Gallery -->
    <section class="mb-12 md:mb-16">
      <div class="section-head">
        <h4 class="section-title">{{ $t('drawer.gallery') }}</h4>
        <span class="section-rule"></span>
      </div>
      <DrawerGallery
        :gallery="project.gallery"
        :title="title"
        :accent-class="project.fallbackClass"
        :video-src="project.videoSrc"
      />
    </section>

    <!-- Features -->
    <section>
      <div class="section-head">
        <h4 class="section-title">{{ $t('drawer.features') }}</h4>
        <span class="section-rule"></span>
      </div>
      <DrawerFeatures :features="features" />
    </section>
  </div>
</template>

<style scoped>
.drawer-content {
  /* md:p-10 shorthand would override pb — use explicit sides instead */
  @apply p-6 pb-72 md:pt-10 md:px-10 md:pb-72 transition-all duration-300;
}

.project-category {
  @apply inline-block px-3 py-1 text-xs font-bold tracking-[0.1em] uppercase rounded-full mb-4;
  background-color: rgb(var(--brand-terra) / 0.1);
  color: rgb(var(--brand-terra-dark));
}

.project-title {
  @apply text-3xl md:text-5xl font-display font-bold mb-5;
  color: rgb(var(--brand-text));
}

.project-description {
  @apply text-base md:text-lg font-light leading-relaxed;
  color: rgb(var(--brand-muted));
}

.desc-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.desc-toggle {
  @apply mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors;
  color: rgb(var(--brand-terra));
}
.desc-toggle:hover { color: rgb(var(--brand-terra-dark)); }

.pdf-link {
  @apply mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors;
  color: rgb(var(--brand-terra));
}
.pdf-link:hover { color: rgb(var(--brand-terra-dark)); }

.section-head {
  @apply flex items-center gap-4 mb-5;
}

.section-title {
  @apply text-sm md:text-base font-bold tracking-[0.15em] uppercase shrink-0;
  color: rgb(var(--brand-muted));
}

.section-rule {
  @apply flex-1 h-px;
  background-color: rgb(var(--brand-muted) / 0.2);
}

/* Widen feature list into 2-col grid inside the drawer */
:deep(.feature-card) { @apply h-full; }
:deep(ul.space-y-4) {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0;
}
</style>
