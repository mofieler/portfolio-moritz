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

interface CaseStudySection {
  title: string
  content: string
  type: 'intro' | 'heading' | 'bullet' | 'text'
}

const parsedSections = computed(() => {
  if (!longDescription.value) return []
  
  const sections: CaseStudySection[] = []
  // Replace literal \n with actual newlines first
  const text = longDescription.value.replace(/\\n/g, '\n')
  const lines = text.split('\n')
  
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    
    // Check for bullet points (start with - or •)
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
      sections.push({
        title: '',
        content: trimmed.substring(2),
        type: 'bullet'
      })
    }
    // Check for bold headings (**text**)
    else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      sections.push({
        title: trimmed.replace(/\*\*/g, ''),
        content: '',
        type: 'heading'
      })
    }
    // Numbered sections (1. Title, 2. Title etc)
    else if (/^\d+\.\s/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s+(.+)$/)
      if (match) {
        sections.push({
          title: match[2],
          content: '',
          type: 'heading'
        })
      }
    }
    // Regular text
    else {
      // Check if previous section was a bullet list to group them
      const lastSection = sections[sections.length - 1]
      if (lastSection?.type === 'bullet') {
        // This might be bullet content continuation - treat as new bullet
        sections.push({
          title: '',
          content: trimmed,
          type: 'bullet'
        })
      } else {
        sections.push({
          title: '',
          content: trimmed,
          type: 'text'
        })
      }
    }
  }
  
  return sections
})

const formattedContent = (content: string) => {
  return content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

watch(() => props.project.id, () => {
  isDescExpanded.value = false
})
</script>

<template>
  <div
    class="drawer-content"
    :class="isSwitching ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'"
  >
    <!-- Header Section -->
    <header class="project-header">
      <span class="project-category">{{ category }}</span>
      <h3 class="project-title">{{ title }}</h3>

      <!-- Short Description: always visible -->
      <p
        class="project-description"
        :class="{ 'desc-clamp': isExpandable && !isDescExpanded }"
      >
        {{ description }}
      </p>

      <!-- Case Study Content (Expanded) -->
      <div
        v-if="hasLongDesc && isDescExpanded"
        class="case-study-content"
      >
        <template v-for="(section, index) in parsedSections" :key="index">
          <!-- Section Heading -->
          <h4
            v-if="section.type === 'heading'"
            class="case-study-heading"
          >
            {{ section.title }}
          </h4>
          
          <!-- Bullet Point -->
          <div
            v-else-if="section.type === 'bullet'"
            class="case-study-bullet"
          >
            <span class="bullet-marker">—</span>
            <span v-html="formattedContent(section.content)" />
          </div>
          
          <!-- Regular Text -->
          <p
            v-else
            class="case-study-paragraph"
            v-html="formattedContent(section.content)"
          />
        </template>
      </div>

      <!-- Action Row -->
      <div class="action-row">
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
    </header>

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

.project-header {
  @apply mb-10 md:mb-12 max-w-4xl;
}

.project-description {
  @apply text-base md:text-lg font-light leading-relaxed mb-6;
  color: rgb(var(--brand-muted));
}

.desc-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.action-row {
  @apply flex flex-wrap items-center gap-4 mt-6;
}

.desc-toggle {
  @apply inline-flex items-center gap-1.5 text-sm font-semibold transition-colors;
  color: rgb(var(--brand-terra));
}
.desc-toggle:hover { color: rgb(var(--brand-terra-dark)); }

.pdf-link {
  @apply inline-flex items-center gap-2 text-sm font-semibold transition-colors;
  color: rgb(var(--brand-terra));
}
.pdf-link:hover { color: rgb(var(--brand-terra-dark)); }

/* Case Study Content Styles */
.case-study-content {
  @apply mt-6;
}

.case-study-heading {
  @apply text-lg md:text-xl font-display font-semibold mb-3;
  color: rgb(var(--brand-text));
  line-height: 1.4;
}

.case-study-paragraph {
  @apply text-base font-light leading-relaxed mb-4;
  color: rgb(var(--brand-muted));
}

.case-study-bullet {
  @apply flex items-start gap-3 text-base font-light leading-relaxed mb-2 pl-2;
  color: rgb(var(--brand-muted));
}

.bullet-marker {
  @apply text-lg mt-[-2px];
  color: rgb(var(--brand-terra));
  font-weight: 600;
}

.case-study-bullet :deep(strong),
.case-study-paragraph :deep(strong) {
  font-weight: 600;
  color: rgb(var(--brand-text));
}

/* Add space between sections */
.case-study-content > * + .case-study-heading {
  @apply mt-8;
}

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
