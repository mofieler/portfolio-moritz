<script setup lang="ts">
interface Props {
  number: string
  category: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-4 mb-2">
    <span class="w-10 h-[1px] bg-brand-muted/50"></span>
    <span class="section-label">{{ number }} / {{ category }}</span>
  </div>
</template>
