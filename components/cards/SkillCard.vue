<script setup lang="ts">
import type { Skill } from '~/types'

interface Props {
  skill: Skill
}

const props = defineProps<Props>()
const { title, description, tags } = useTranslatedSkill(() => props.skill)
</script>

<template>
  <div class="bg-brand-surface p-8 md:p-10 rounded-[2rem] shadow-soft border border-brand-muted/15 hover:shadow-hover transition-shadow duration-300">
    <div class="w-12 h-12 md:w-14 md:h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-text mb-6 border border-brand-muted/20">
      <UiIcon :name="skill.icon" size="xl" />
    </div>

    <h4 class="heading-card mb-3">{{ title }}</h4>
    <p class="body-small mb-8">{{ description }}</p>

    <div class="flex flex-wrap gap-2">
      <UiTag
        v-for="tag in tags"
        :key="tag.label"
        :variant="tag.variant"
      >
        {{ tag.label }}
      </UiTag>
    </div>
  </div>
</template>
