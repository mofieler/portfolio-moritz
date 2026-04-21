<script setup lang="ts">
import type { TagVariant } from '~/types'

interface Props {
  variant?: TagVariant
}

withDefaults(defineProps<Props>(), {
  variant: 'neutral',
})

const variantClasses: Record<TagVariant, string> = {
  neutral: 'bg-brand-bg text-brand-text border-brand-muted/20',
  terra: 'bg-brand-terra/10 text-brand-terra border-brand-terra/30',
  green: 'bg-[#EBF2E8] text-[#466840] border-[#B0CCA8]',
  purple: 'bg-[#F0EBF2] text-[#7A5870] border-[#C8B0C8]',
  blue: 'bg-[#EBF0F8] text-[#3A6088] border-[#B0C8E0]',
}
</script>

<template>
  <span
    :class="[
      'px-4 py-1.5 rounded-full text-fluid-sm font-medium border',
      variantClasses[variant],
    ]"
  >
    <slot />
  </span>
</template>
