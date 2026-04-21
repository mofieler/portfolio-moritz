<script setup lang="ts">
import { skills } from '~/data/skills'
</script>

<template>
  <section id="skills" class="py-20 md:py-32 px-6 max-w-7xl mx-auto reveal">
    <!-- Section Header -->
    <div class="text-center mb-12 md:mb-20">
      <h2 class="heading-section">{{ $t('skills.title') }}</h2>
      <p class="body-medium mt-4">{{ $t('skills.subtitle') }}</p>
    </div>

    <!-- Skill Cards -->
    <div class="grid md:grid-cols-3 gap-6 md:gap-8">
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </section>
</template>
