<script setup lang="ts">
import { projects } from '~/data/projects'
import type { Project } from '~/types'

const { isOpen, currentProject, isSwitching, open, close, next, prev } = useProjectDrawer(projects)

const handleSelect = (project: Project) => open(project)
</script>

<template>
  <section
    id="work"
    class="py-20 md:py-32 px-4 md:px-8 bg-brand-surface rounded-[2.5rem] md:rounded-[4rem] shadow-soft mx-3 md:mx-6 mb-8 relative z-10"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 md:mb-28 reveal">
        <h2 class="heading-section">{{ $t('work.title') }}</h2>
        <p class="body-small mt-4">{{ $t('work.subtitle') }}</p>
      </div>

      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :reversed="index % 2 !== 0"
        class="reveal"
        :class="{ 'mb-28 md:mb-40': index < projects.length - 1 }"
        @select="handleSelect"
      />
    </div>
  </section>

  <ProjectDrawer
    :is-open="isOpen"
    :project="currentProject"
    :is-switching="isSwitching"
    @close="close"
    @next="next"
    @prev="prev"
  />
</template>
