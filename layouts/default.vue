<script setup lang="ts">
useScrollReveal('.reveal', { threshold: 0.15 })
</script>

<template>
  <div class="min-h-screen touch-pan-y">
    <TheHeader />
    
    <main>
      <slot />
    </main>
    
    <TheFooter />
    <TheFloatingNav />
  </div>
</template>
