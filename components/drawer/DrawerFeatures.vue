<script setup lang="ts">
import type { ProjectFeature } from '~/types'

interface Props {
  features: ProjectFeature[]
}

defineProps<Props>()
const { t } = useI18n()

const label = (feature: ProjectFeature, key: 'title' | 'description') => {
  const keyField = key === 'title' ? feature.titleKey : feature.descriptionKey
  if (keyField) return t(keyField)
  return key === 'title' ? feature.title ?? '' : feature.description ?? ''
}
</script>

<template>
  <ul v-if="features.length" class="space-y-4">
    <li
      v-for="(feature, index) in features"
      :key="index"
      class="feature-card"
    >
      <div class="feature-icon">
        <UiIcon :name="feature.icon" size="lg" />
      </div>
      <div>
        <h5 class="feature-title">{{ label(feature, 'title') }}</h5>
        <p class="feature-desc">{{ label(feature, 'description') }}</p>
      </div>
    </li>
  </ul>

  <div v-else class="empty-state">
    <UiIcon name="Star" size="xl" class="text-brand-muted mb-2" />
    <p class="text-sm text-brand-muted">{{ $t('drawer.featuresEmpty') }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  @apply flex gap-4 p-4 md:p-5 rounded-2xl shadow-sm border border-brand-muted/15
    hover:shadow-md transition-shadow;
  background-color: rgb(var(--brand-surface));
}

.feature-icon {
  @apply w-12 h-12 rounded-2xl flex items-center justify-center shrink-0;
  background-color: rgb(var(--brand-terra) / 0.1);
  color: rgb(var(--brand-terra));
}

.feature-title {
  @apply font-bold text-base mb-1;
  color: rgb(var(--brand-text));
}

.feature-desc {
  @apply text-sm leading-relaxed;
  color: rgb(var(--brand-muted));
}

.empty-state {
  @apply p-8 text-center rounded-2xl border border-dashed border-brand-muted/30
    flex flex-col items-center;
  background-color: rgb(var(--brand-surface));
}
</style>
