<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  external?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  external: false,
})

const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105'

const variantClasses = {
  primary: 'bg-brand-text text-brand-bg hover:opacity-80 shadow-md',
  secondary: 'bg-brand-surface text-brand-text border border-brand-muted/30 hover:border-brand-muted/50 hover:bg-brand-text/5 shadow-sm',
}

const sizeClasses = {
  sm: 'px-6 py-3 text-fluid-sm',
  md: 'px-8 py-4 text-fluid-base',
  lg: 'px-10 py-5 text-fluid-lg',
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[baseClasses, variantClasses[variant], sizeClasses[size]]"
    class="nav-trigger"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="[baseClasses, variantClasses[variant], sizeClasses[size]]"
    class="nav-trigger"
  >
    <slot />
  </a>
  <button
    v-else
    :class="[baseClasses, variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </button>
</template>
