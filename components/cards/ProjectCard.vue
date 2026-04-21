<script setup lang="ts">
import type { Project } from '~/types'

const tagVariants: Record<string, 'neutral' | 'green' | 'purple' | 'blue' | 'terra'> = {
  'Web Design': 'neutral',
  'Development': 'neutral',
  'Booking System': 'neutral',
  'Entwicklung': 'neutral',
  'Buchungssystem': 'neutral',
  'UX Design': 'green',
  'Gamification': 'green',
  'Persuasive Design': 'neutral',
  'Vue.js & Ionic': 'purple',
  'MongoDB': 'neutral',
  'UX System': 'neutral',
  'UX Research': 'terra',
  'Multisensory Design': 'terra',
  'Multisensorisches Design': 'terra',
  'Haptics': 'neutral',
  'Haptik': 'neutral',
  'UI Concept': 'blue',
  'UI Konzept': 'blue',
  'IoT Ecosystem': 'blue',
  'Interaction Design': 'neutral',
}
const getTagVariant = (tag: string) => tagVariants[tag] ?? 'neutral'

interface Props {
  project: Project
  reversed?: boolean
}

const props = defineProps<Props>()

defineEmits<{
  select: [project: Project]
}>()

const { category, title, description, tags, imageAlt, imageAlt2 } = useTranslatedProject(() => props.project)
</script>

<template>
  <div class="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
    <!-- Text — always clickable so video projects can still open the drawer -->
    <div
      class="space-y-5 md:space-y-6 cursor-pointer"
      :class="reversed ? 'order-1 lg:order-2' : 'order-2 lg:order-1'"
      @click="$emit('select', project)"
    >
      <SectionLabel :number="project.num" :category="category" />
      <h3 class="heading-project">{{ title }}</h3>
      <p class="body-medium">{{ description }}</p>

      <div class="flex flex-wrap gap-2 pt-2 md:pt-4">
        <UiTag
          v-for="tag in tags"
          :key="tag"
          :variant="getTagVariant(tag)"
        >
          {{ tag }}
        </UiTag>
      </div>
    </div>

    <!-- Visual — click opens drawer (except video: iframe captures its own clicks) -->
    <div
      class="relative group w-full order-1"
      :class="[
        reversed ? 'lg:order-1' : 'lg:order-2',
        project.visual !== 'video' ? 'cursor-pointer' : '',
      ]"
      @click="project.visual !== 'video' && $emit('select', project)"
    >
      <div class="project-glow" :class="project.fallbackClass ? '' : 'bg-brand-terra'"></div>

      <div
        class="relative aspect-square lg:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-soft group-hover:shadow-hover transition-all duration-500 transform group-hover:-translate-y-2"
        :class="project.fallbackClass"
      >
        <ProjectVisualMockup
          v-if="project.visual === 'mockup'"
          :image-src="project.imageSrc"
          :image-alt="imageAlt"
          :image-src2="project.imageSrc2"
          :image-alt2="imageAlt2"
        />
        <ProjectVisualDuoPhones
          v-else-if="project.visual === 'duo-phones'"
          :image-src="project.imageSrc"
          :image-alt="imageAlt"
          :image-src2="project.imageSrc2"
          :image-alt2="imageAlt2"
          :compact="project.id === 'emobility'"
        />
        <ProjectVisualHeroBottom
          v-else-if="project.visual === 'hero-bottom'"
          :image-src="project.imageSrc"
          :image-alt="imageAlt"
          :image-src2="project.imageSrc2"
          :image-alt2="imageAlt2"
        />
        <ProjectVisualVideo
          v-else-if="project.visual === 'video' && project.videoSrc"
          :video-src="project.videoSrc"
        />
        <ProjectVisualCustom v-else-if="project.visual === 'custom'" />
      </div>
    </div>
  </div>
</template>
