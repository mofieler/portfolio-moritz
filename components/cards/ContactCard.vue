<script setup lang="ts">
interface Props {
  icon: string
  label: string
  value: string
  href?: string
  isExternal?: boolean
}

withDefaults(defineProps<Props>(), {
  isExternal: false,
})
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="contact-card group"
    :class="{ 'cursor-default': !href }"
  >
    <div class="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-terra group-hover:scale-110 transition-transform">
      <UiIcon :name="icon" size="xl" />
    </div>
    <div class="text-fluid-xs text-[#A8A29E] uppercase tracking-[0.15em] font-bold mb-2">
      {{ label }}
    </div>
    <div class="font-medium text-fluid-lg text-white">
      {{ value }}
    </div>
  </component>
</template>
