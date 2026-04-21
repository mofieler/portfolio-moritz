<script setup lang="ts">
useScrollReveal('.reveal', { threshold: 0.15 })
</script>

<template>
  <div class="overflow-x-hidden">
    <TheHeader />
    
    <main>
      <slot />
    </main>
    
    <TheFooter />
    <TheFloatingNav />
  </div>
</template>
